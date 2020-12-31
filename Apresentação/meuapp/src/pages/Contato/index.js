import React from 'react';
import Input from "./components/Input";
import Validation from "./components/Validation";

import styles from './contato.module.css';


const Contato = () => {
  const cep = Validation("cep");
  const email = Validation("email");
  const nome = Validation();
  const sobrenome = Validation(false);

  function handleSubmit(event) {
    event.preventDefault();
    if (cep.validate() && email.validate() && nome.validate()) {
      console.log("Enviar");
    } else {
      console.log("Não enviar");
    }
  }

  return (
    <form onSubmit={handleSubmit}>
    <Input
      label="Nome"
      id="nome"
      type="text"
      placeholder="Seu nome"
      {...nome}
    />
    <br/>
    <Input
      label="Sobrenome"
      id="sobrenome"
      type="text"
      placeholder="Seu sobrenome"
      {...sobrenome}
    />
    <br/>
    <Input
      label="CEP"
      id="cep"
      type="text"
      placeholder="00000-000"
      {...cep}
    />
    <br/>
    <Input
      label="Email"
      id="email"
      type="email"
      placeholder="seuemail@hotmail.com.br"
      {...email}
    />
    <button style={{ margin: ".5rem 0rem 0rem 0rem" }}>Enviar</button>
  </form>
  );
};

export default Contato;
