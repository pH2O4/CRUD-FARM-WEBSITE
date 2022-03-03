import React,{useState} from "react";
import './Headerr.css'
import {Form, Button} from "react-bootstrap"
import "./Cadastro.css"
import Axios from 'axios'

import Header from "./Headerr"

function Cadastro(){
const [values, setValues] = useState();
const changingvalue = (value) =>{
setValues(prevValue=>({
  ...prevValue,
  [value.target.name]: value.target.value,
}))
}

const  clickButton = () => {

    Axios.post("http://localhost:8000/api/Cadastro", {
      Email: values.Email,
      Senha: values.Senha,
      SenhaV: values.SenhaV,
      Nome: values.Nome
    }).then((response) => {
      const resposta = response.data
      window.alert(`${resposta}`)
    })
  
};

    return(  <div>
        <Header/>
        <div className="Cadastro">
        <Form>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label >Email address</Form.Label>
    <Form.Control onChange={changingvalue} name="Email" type="email" placeholder="Enter email" />
    <Form.Label >Numero celular</Form.Label>
    <Form.Control onChange={changingvalue} name="Numero" type="text" placeholder="Enter Number" />
    <Form.Label >Nome Completo</Form.Label>
    <Form.Control onChange={changingvalue} name="Nome" type="text" placeholder="Nome Completo" />
    <Form.Text className="text">
      Lembre-se de sua senha, não compartilhe seus dados!
    </Form.Text>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control onChange={changingvalue} type="password" name="Senha" placeholder="Password" />
    <Form.Label >Repeat password </Form.Label>
    <Form.Control onChange={changingvalue} type="password"name="SenhaV"placeholder="Password" />
  </Form.Group>
  <Button variant="primary" onClick={() => clickButton()} type="submit">
    Submit
  </Button>
</Form>
        </div> 

        </div>
 
       
    )
};

export default Cadastro