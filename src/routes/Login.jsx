import React, { useRef, useState } from 'react';
import Projeto from './Projeto';
import '../css/Login.css';
import '../mediaQuery/Login-media.css';

function Login() {
  const user = useRef();
  const password = useRef();
  const [loggedIn, setLoggedIn] = useState(false);

  const getUser = sessionStorage.getItem('userData');
  const getSenha = sessionStorage.getItem('senhaData');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (user.current.value === 'admin' && password.current.value === '123') {
      let token =
        Math.random().toString(16).substring(2) +
        Math.random().toString(16).substring(2);
      sessionStorage.setItem('userData', 'admin');
      sessionStorage.setItem('senhaData', token);
      setLoggedIn(true);
    } else {
      alert('usuário e senha inválidos !!!');
    }
  };

  const handleLogout = () => {
    sessionStorage.removeItem('userData');
    sessionStorage.removeItem('senhaData');
    setLoggedIn(false);
  };

  return (
    <>
      {loggedIn ? (
        <div>
          <h1>Bem-vindo, {getUser}!</h1>
          <button onClick={handleLogout}>Logout</button>
          <Projeto />
        </div>
      ) : (
        <div id="form-login">
          <h1>FAÇA LOGIN</h1>
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="nome">Nome de usuário</label>
              <br />
              <input
                type="text"
                id="nome"
                placeholder="Digite seu nome aqui"
                ref={user}
              />
            </div>
            <div>
              <label htmlFor="senha">Senha</label>
              <br />
              <input
                type="password"
                id="senha"
                placeholder="Digite sua senha aqui"
                ref={password}
              />
            </div>
            <button type="submit">Enviar</button>
          </form>
        </div>
      )}
    </>
  );
}

export default Login;
