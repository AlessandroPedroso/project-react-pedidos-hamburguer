import React from "react";

import {ContainerItens as Itens} from './styles';

const ContainerItens = (props)=>{

    return (
        <Itens>{props.children}</Itens>
    )
};

export default ContainerItens;