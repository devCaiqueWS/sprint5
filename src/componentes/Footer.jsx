import {} from "react";
import "../scss/Footer.css";
import "../mediaQuery/Footer-media.css";
import logoDesktops from "../assets/logo-desktops-amarelo.png";

function Footer() {
  return (
    <>
      <footer className="container-footer">
        <div>
          <div className="copy">
          <img src={logoDesktops} width="150px" />
          <p>Todos os direitos reservados &copy; Copyright 2023</p>
          </div>
          <div className="news">
            <div className="news-content">
              <form>
              <h4>Inscreva-se em nosso Newsletter</h4>
                <div className="form-group">
                  <input
                    type="email"
                    placeholder="Seu endereço de e-mail"
                    required
                  />
                </div>
                  <button type="submit">Inscrever-se</button>
              </form>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
export default Footer;
