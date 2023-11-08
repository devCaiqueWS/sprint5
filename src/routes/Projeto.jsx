import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Modal, Button } from "react-bootstrap";
import MapaGoogle from "../componentes/MapaGoogle";

function Projeto() {
  const [inputValue, setInputValue] = useState("");
  const [endereco, setEndereco] = useState({
    rua: "",
    bairro: "",
    cidade: "",
    estado: "",
  });
  const [resultado, setResultado] = useState(null);
  const [fluxo, setFluxo] = useState(null);
  const [nivel, setNivel] = useState(null);
  const [pageHeightClass, setPageHeightClass] = useState("");
  const [riscoEnchente, setRiscoEnchente] = useState("");
  const [corBolinha, setCorBolinha] = useState("");
  const [showModal, setShowModal] = useState(false);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    buscarCep(inputValue);
    setPageHeightClass("extended-height");
  };

  function buscarCep(cep) {
    fetch(`https://viacep.com.br/ws/${cep}/json/`)
      .then((res) => res.json())
      .then((data) => {
        if (data.erro) {
          setShowModal(true); // Exibe o modal
        } else {
          setEndereco({
            rua: data.logradouro,
            bairro: data.bairro,
            cidade: data.localidade,
            estado: data.uf,
          });
          gerarValoresAleatorios();
          verificarRiscoEnchente();
          setResultado({
            enderecoString: Object.values(endereco).join(", "),
            fluxo,
            nivel,
          });
        }
      });
  }

  const gerarValoresAleatorios = () => {
    const novoFluxo = Math.floor(Math.random() * (300 - 50 + 1)) + 50;
    const novoNivel = Math.floor(Math.random() * (5 - 1 + 1)) + 1;
    setFluxo(novoFluxo);
    setNivel(novoNivel);
  };

  const verificarRiscoEnchente = () => {
    const resultadoMultiplicacao = fluxo * nivel;
    let novaCorBolinha = "";

    if (resultadoMultiplicacao < 500) {
      setRiscoEnchente("Sem risco de enchente");
      novaCorBolinha = "verde";
    } else if (resultadoMultiplicacao < 1000) {
      setRiscoEnchente("Risco de enchente: Chamar suporte para verificar local");
      novaCorBolinha = "amarela";
    } else {
      setRiscoEnchente("Possível enchente: Chamar equipe para diminuir danos");
      novaCorBolinha = "vermelha";
    }

    setCorBolinha(novaCorBolinha);
  }

  useEffect(() => {
    if (resultado) {
      setPageHeightClass("extended-height");
    } else {
      setPageHeightClass("");
    }
  }, [resultado]);

  return (
    <>
      <div id="container-projeto" className={pageHeightClass}>
        <h1>Área de administração</h1>
        <h2>Informe o CEP da área que deseja administrar: </h2>
        <div id="mapa">
          <div className="busca">
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="Digite o CEP aqui (EX.: 01310100)"
                value={inputValue}
                onChange={handleInputChange}
                style={{ display: "inline-block" }}
                maxLength="8"
                minLength="8"
              />
              <button type="submit" style={{ display: "inline-block" }}>
                Enviar
              </button>
            </form>
          </div>
          <MapaGoogle />
          <div id="resultados">
            {resultado && (
              <>
                <h2>{resultado.enderecoString}</h2>
                <div className={`bolinha ${corBolinha}`} style={{ display: "inline-block" }}></div>
                <p style={{ display: "inline-block" }}>{riscoEnchente}</p>
                <br /><br />
                <p style={{ display: "inline-block" }}>Fluxo de água:</p>
                <p style={{ display: "inline-block" }}> {fluxo} rpm</p>
                <br /><br />
                <p style={{ display: "inline-block" }}>Nível de água:</p>
                <p style={{ display: "inline-block" }}> {nivel}</p>
              </>
            )}
          </div>
        </div>
      </div>
      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>CEP não encontrado</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>O CEP digitado não foi encontrado. Por favor, use outro ou tente novamente.</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Fechar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Projeto;
