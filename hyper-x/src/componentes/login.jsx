import React from "react";
import './Headerr.css'
import { useState} from "react";
import { Form, Button } from "react-bootstrap"
import "./login.css"
import Axios from "axios"

import Header from "./Headerr"

function Login() {
  const [values, setValues] = useState()
  const changingvalue = (value) => {
    setValues(prevValue => ({
      ...prevValue,
      [value.target.name]: value.target.value,
    }))
  }

  const ClickButton = () => {
    Axios.post("http://localhost:8000/api/login", {
      Email: values.Email,
      Senha: values.Senha,
    }).then((response) => {
      const resposta = response.data
      window.alert(`${resposta}`)
    })
  }



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
        <Button type="button" href="/Cadastro">Ainda não tem conta? Registre-se aqui! </Button>
      </Form.Group>
      <Button variant="primary" onKeyPress={13} onClick={() => ClickButton()} >
        Submit
      </Button>
      <div>
      
        </div>
    </Form>

  </div>
</div>
)
}
export default Login