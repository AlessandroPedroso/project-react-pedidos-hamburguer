import {useRef} from "react";
import axios from "axios";

import { Container,IMG } from "./styles";

import Hamburger from '../../assets/burger1.png'
import H1 from "../../Components/Title";
import ContainerItens from "../../Components/ContainerItens/index";
import CampoTexto from "../../Components/CampoTexto";
import Button from "../../Components/Button";
const Home = ()=>{

    const inputPedido = useRef();
    const inputCliente = useRef();

    const addNovoPedido = async() =>{

        const pedido = inputPedido.current.value;
        const cliente = inputCliente.current.value;

        if(pedido=='' || cliente==''){

            alert("Preencha os Campos!");

        }else{
            
            const {data:response} = await axios.post('http://localhost:3000/order',{
                order: pedido,
                clientName: cliente
            })

            // console.log(response);
        }

    };

    return (
        <Container>
            <IMG alt="logo-hamburguer" src={Hamburger} />
            
            <ContainerItens>

                 <H1>Faça seu pedido!</H1>
                 <CampoTexto ref={inputPedido} label="Pedido" placeholder="Digite o pedido" />
                 <CampoTexto ref={inputCliente} label="Nome do Cliente" placeholder="Informe o nome do Cliente" />
                 <Button onClick={addNovoPedido}>Novo Pedido</Button>
            </ContainerItens>
        </Container>
    )
};

export default Home;