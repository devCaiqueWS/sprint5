import React from "react";
import "../css/Contato.css";
import "../mediaQuery/Contato-media.css";
import emailImage from "../assets/email.png";
import telefoneImage from "../assets/telefone.png";

function Contato() {
  return (
    <>
      <div id="container-contato">
        <div id="form-ctt">
          <h1>Contato</h1>
          <form>
            <h2>Nome</h2>
            <input type="text" placeholder="Digite seu nome aqui" />
            <h2>E-mail</h2>
            <input type="text" placeholder="Digite seu e-mail aqui" />
            <h2>Mensagem</h2>
            <textarea
              name=""
              id="mnsg"
              cols="30"
              rows="10"
              placeholder="Digite a mensagem que deseja nos enviar aqui"
            ></textarea>
            <button type="submit">Enviar</button>
          </form>
        </div>
        <div id="info-ctt">
          <h1>informações</h1>
          <h2>E-mail</h2>
          <div className="info-ctt-item">
            <img src={emailImage} alt="" />
            <p>contato@desktops.com.br</p>
          </div>
          <h2>telefone</h2>
          <div className="info-ctt-item">
            <img src={telefoneImage} alt="" />
            <p>+55 (11) 4000-7007</p>
          </div>
        </div>
        <div id="content2">
          <h2>Sua região está alagada?</h2>
          <button>Descubra aqui</button>
        </div>
      </div>
    </>
  );
}

export default Contato;
