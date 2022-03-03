import React from "react";
import './Content.css'
import { Component } from "react";
import {Carousel} from "react-bootstrap"
import 'bootstrap/dist/js/bootstrap.bundle.min'

import imag1 from '../imagens/1.png'
import imag2 from '../imagens/2.png'
import imag3 from '../imagens/3.png'

class Content extends Component{
  
    render(){
        return <div className="Content">
<Carousel fade>
  <Carousel.Item>
    <img
      className="d-block w-100"
      alt="First slide"
      src={imag1}
    />
    <Carousel.Caption>
      <h3>Bem Vindo Ao Metaverso da Fazenda Decisão!</h3>
      <p>Terras para sua agricultura digital diretamente de outro mundo. </p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      alt="Second slide"
      src={imag2}
    />

    <Carousel.Caption>
      <h3>NFT's da Agricultura à Agropecuária</h3>
      <p> Encha sua fazenda com seus NFT's dos mais simples aos mais cobiçados.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      alt="Third slide"
      src={imag3}
    />

    <Carousel.Caption>
      <h3>O Futuro é META!</h3>
      <p>Você não vai só comprar sua NFT você poderá ve-la pessoalmente VR!.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
        </div>
    }
};

export default Content