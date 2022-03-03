import React from "react";
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min'

import { Routes, Route} from "react-router-dom";

import Sobre from "../componentes/Sobre"
import Home from "../componentes/Home"
import Login from "../componentes/login"
import Cadastro from "../componentes/Cadastro"

export default props =>
<div className="App">

<Routes>
    <Route exact path="/" element={<Home/>} />
    <Route exact path="/Sobre" element={<Sobre/>} />
    <Route exact path="/login$Register" element={<Login/>}/>
    <Route exact path="/Cadastro" element={<Cadastro/>}/>
</Routes>
</div>
