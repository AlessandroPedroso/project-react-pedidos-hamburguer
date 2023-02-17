import React, {useState,useEffect} from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import { Container,ListPedidos,PPedidos,PCliente, DivPedidos} from "./styles";
import burguer from '../../assets/burger2.png'
import Title from "../../Components/Title";
import ContainerItens from '../../Components/ContainerItens';
import LixeiraDelete from '../../assets/lixeira.svg'
import Button from '../../Components/Button'


const Pedidos = () =>{

    const [pedidos,setPedidos] = useState([]);
    const navigate = useNavigate();

    useEffect(()=>{

        async function newPedidos(){
            const {data:newPedidos} = await axios.get('http://localhost:3000/order');
            setPedidos(newPedidos);
        }

        newPedidos();

    },[])

    const backToPage = () =>{

        navigate('/');
    }

    async function deletePedidos(id){

        await axios.delete(`http://localhost:3000/order/${id}`);

        const newPedidos = pedidos.filter(itens=> itens.id !== id);
        setPedidos(newPedidos);
    }

    return (
        <Container>
            <img src={burguer}/>
            <Title>Pedidos</Title>
            <ContainerItens>
                <ul>
                    {
                        pedidos.map(itens => (

                            <ListPedidos>
                            <DivPedidos>
                                <PPedidos>{itens.order}</PPedidos>
                                <PCliente>{itens.clientName}</PCliente>
                            </DivPedidos>
    
                            <button onClick={()=>deletePedidos(itens.id)}><img src={LixeiraDelete} /></button>
                        </ListPedidos>

                        ))
                    }

                </ul>
                <Button backgroundBlack={true} onClick={backToPage}>Voltar</Button>
            </ContainerItens>
        </Container>
    )
}

export default Pedidos