import React from "react";

import { Container,IMG } from "./styles";

import Hamburger from '../../assets/burger1.png'
import H1 from "../../Components/Title";
import ContainerItens from "../../Components/ContainerItens/index";
import CampoTexto from "../../Components/CampoTexto";

const Home = ()=>{

    return (
        <Container>
            <IMG alt="logo-hamburguer" src={Hamburger} />
            
            <ContainerItens>

                 <H1>Faça seu pedido!</H1>
                 <CampoTexto label="Pedido" placeholder="Digite o pedido" />
                 <CampoTexto label="Nome do Cliente" placeholder="Informe o nome do Cliente" />

            </ContainerItens>
        </Container>
    )
};

export default Home;