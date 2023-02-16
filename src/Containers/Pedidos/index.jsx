import React from "react";

import { Container,ListPedidos,PPedidos,PCliente, DivPedidos} from "./styles";
import burguer from '../../assets/burger2.png'
import Title from "../../Components/Title";
import ContainerItens from '../../Components/ContainerItens';
import LixeiraDelete from '../../assets/lixeira.svg'
import Button from '../../Components/Button'

const Pedidos = () =>{
    return (
        <Container>
            <img src={burguer}/>
            <Title>Pedidos</Title>
            <ContainerItens>
                <ul>
                    <ListPedidos>
                        <DivPedidos>
                            <PPedidos>1 Batata Grande, 1 X-Bacon,2 Coca-Colas Light</PPedidos>
                            <PCliente>Steve Jobs</PCliente>
                        </DivPedidos>

                        <button><img src={LixeiraDelete} /></button>
                    </ListPedidos>
                    <ListPedidos>
                        <DivPedidos>
                            <PPedidos>1 Batata Grande, 1 X-Bacon,2 Coca-Colas Light</PPedidos>
                            <PCliente>Steve Jobs</PCliente>
                        </DivPedidos>
                        
                        <button><img src={LixeiraDelete} /></button>
                    </ListPedidos>
                </ul>
                <Button>Voltar</Button>
            </ContainerItens>
        </Container>
    )
}

export default Pedidos