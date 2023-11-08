import React from "react";
import "../css/Sobre.css";
import "../mediaQuery/Sobre-media-query.css";
import logoDesktops from "../assets/logo-desktops-amarelo.png";
import caiqueImage from "../assets/caique.jpg";
import enricoImage from "../assets/enrico.png";
import gabrielImage from "../assets/gabriel.png";
import guilhermeImage from "../assets/guilherme.jpg";
import silviaImage from "../assets/silvia.png";
import mockup from "../assets/mockup_projeto.jpg";
import sensorRPM from "../assets/imagem-RPM.jpg";

function Sobre() {
  return (
    <>
      <div id="container-sobre">
          <div id="top">
            <img src={logoDesktops} alt="Logo Desk{tops}" />
            <p>
              DeskTOPS é um grupo dedicado a desenvolver soluções tecnológicas
              que visam proteger e melhorar a qualidade de vida das pessoas, ao
              mesmo tempo em que preservam o meio ambiente. Seu objetivo é
              utilizar a tecnologia para construir um futuro mais seguro e
              sustentável.
            </p>
          </div>
        <div id="content1">
          <h1>Integrantes</h1>
          <div className="integrantes">
            <div className="integrante">
              <img src={caiqueImage} alt="" />

              <p>Caíque Walter</p>
            </div>
            <div className="integrante">
              <img src={enricoImage} alt="" />

              <p>Enricco Rossi</p>
            </div>
            <div className="integrante">
              <img src={gabrielImage} alt="" />

              <p>Gabriel Marquez</p>
            </div>
            <div className="integrante">
              <img src={guilhermeImage} alt="" />

              <p>Guilherme Nobre</p>
            </div>
            <div className="integrante">
              <img src={silviaImage} alt="" />

              <p>Silvia Kavabata</p>
            </div>
          </div>
        </div>
        <div id="content3">
          <h1>Projeto</h1>
          <p>
            Nosso projeto consiste em um website e aplicativo que tenta resolver
            a problemática situação das enchentes em São Paulo. Utilizando
            sensores estrategicamente posicionados nos sistemas de esgoto da
            cidade, nosso objetivo é fornecer alertas antecipados à população e
            às autoridades sobre possíveis enchentes em vias públicas do estado.
            Estes sensores enviam dados em tempo real para o site, permitindo
            que as pessoas se preparem adequadamente e, assim, minimizem ou até
            mesmo previnam os danos decorrentes desse desastre natural.
          </p>
          <img src={mockup} alt="mockup" />
          <p>
            Conforme mostrado na imagem acima, vemos como é uma tela para
            administradores e usuários, com pontos de como está a situação dos
            sensores dentro do esgoto, onde: <br />
            <strong>Verde:</strong> sem risco de enchentes;
            <br />
            <strong>Amarelo:</strong> risco de alagamentos;
            <br />
            <strong>Vermelho:</strong> enchente iminente;
            <br />A diferença entre o aplicativo de administradores e de
            usuários são os dados exibidos. Enquanto o usuário pode apenas saber
            da situação, o administrador tem mais detalhes sobre valores do
            fluxo e nível da água e poderá agir antecipadamente, caso perceba
            possíveis anormalidades nos valores.
          </p>
          <h1>Sensores</h1>
          <p>
            O sistema contará com dois sensores que trabalharão em conjunto que
            funcionarão da seguinte forma:
          </p>
          <h3>RPM</h3>
          <p>
            O sensor em questão será posicionado ao nível padrão da água no
            local. Ele consiste em um módulo de sensor de velocidade/encoder,
            bem como duas rodas: uma roda (1) com vários furos em sua parte
            interna e outra roda (2) com pequenas nadadeiras em seu contorno. A
            primeira roda será acomodada dentro de uma caixa lacrada,
            posicionada no centro dos sensores. A segunda roda será colocada
            fora da caixa e conectada à primeira por meio de uma pequena haste.
            <br /> <br />
            Quando o fluxo de água faz a roda externa (2) girar, seguindo a lei
            da velocidade angular, esse movimento é replicado pela roda interna
            (1) localizada dentro da caixa. Essa configuração permite o
            funcionamento do sensor de rotações por minuto (RPM). O movimento da
            roda dentro da caixa resulta na obstrução repetida e desobstrução do
            sensor infravermelho presente no dispositivo. Esse sensor ativa uma
            função que registra quantas vezes isso ocorre a cada segundo e, em
            seguida, realiza os cálculos necessários para determinar a
            velocidade do fluxo de água em RPM.
          </p>
          <img src={sensorRPM} alt="" />
          <h3>Sensor de nivel de água</h3>
          <p>
            O sensor de nível de água é um dispositivo de funcionamento simples.
            Ele consiste em um sensor ultrassônico (1.) posicionado dentro de
            uma caixa com pequenos orifícios, permitindo que o som seja emitido
            e retornado para medir a distância entre o sensor e a água. Esta
            caixa também abriga o ESP32 (4.), localizado em um compartimento
            separado para maior proteção em caso de enchentes.
            <br /> <br />
            Para evitar que a água entre em contato com o sistema, implementamos
            uma função de proteção. O sensor ultrassônico inicialmente faz
            leituras. Se a água atingir uma altura específica, que pode variar
            de acordo com o tamanho do esgoto, o sistema ativa a função de
            proteção. Um servo motor entra em ação, empurrando uma placa de
            material leve e sólido, como acrílico, para cobrir os pequenos
            orifícios. Essa placa também possui uma camada de borracha ao redor
            para proporcionar uma barreira adicional contra a entrada de água.
            <br /> <br />
            O sistema permanece em modo de proteção com sua entrada
            bloqueada por 5 minutos. Após esse período, o sensor de profundidade
            de água (2.) verifica se a caixa ainda está submersa. Se detectar
            que a caixa está embaixo d'água, o sistema continua em modo de
            proteção até que não haja mais detecção de submersão. Se a detecção
            inicial de altura for causada apenas por um objeto grande que tenha
            passado pelo esgoto, após os primeiros 5 minutos de verificação para
            garantir a integridade do sistema, o sensor não detectará mais água
            e retornará ao funcionamento normal."
          </p>
          <img src="" alt="" /><img src="" alt="" />
          <img src="" alt="" /><img src="" alt="" />
          <img src="" alt="" />
        </div>
        <div id="content2">
          <h2>Sua região está alagada?</h2>
          <button>Descubra aqui</button>
        </div>
      </div>
    </>
  );
}

export default Sobre;
