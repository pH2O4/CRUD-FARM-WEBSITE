import React from "react";
import './Header.css'
import { useState, useEffect } from "react";
import { Form, Button } from "react-bootstrap"
import "./login.css"
import Axios from "axios"
import Divreposta from '../componentes/Divrepostalogin'

import Header from "./Headerr"

function Login() {
  const [values, setValues] = useState()
  const [respostas, setRespostas] = useState
  console.log(respostas)
  const changingvalue = (value) => {
    setValues(prevValue => ({
      ...prevValue,
      [value.target.name]: value.target.value,
    }))
  }

  const ClickButton = () => {
    Axios.get("http://localhost:8000/api/usuarios", {
      email: values.Email,
      senha: values.Senha,

    }).then((response) => {
      console.log(response)
    })
  }

useEffect(() => {
  Axios.get("http://localhost:8000/api/usuarios").then((response)=>{
    setRespostas(response.data);
  });
}, []);


return (<div className="login">
  <Header />
  <div className="entrycrud">
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control onChange={changingvalue} name="Email" type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          Não compartilhe suas informações de login com ninguém.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control onChange={changingvalue} name="Senha" type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Button type="button" href="/Cadastro" label="">Ainda não tem conta? Registre-se aqui! </Button>
      </Form.Group>
      <Button variant="primary" onClick={() => ClickButton()} type="submit">
        Submit
      </Button>
      <div>
        <Divreposta></Divreposta>
        </div>
    </Form>

  </div>
</div>
)
}
export default Login