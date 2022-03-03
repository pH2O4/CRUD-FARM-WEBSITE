import React from "react";
import './Home.css'
import { Component } from "react";

import Header from "./Headerr"
import Content from "../componentes/Content"


class Home extends Component {
    render() {
        return <div className="Home.css">
        <Header/>
        <Content/>
        </div>
    }
};

export default Home