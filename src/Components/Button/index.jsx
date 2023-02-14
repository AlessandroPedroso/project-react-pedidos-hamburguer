import React from "react";

import { Button as Botao } from "./styles";

const Button = ({children,...props}) =>{
    // console.log({...props})
    return <Botao {...props}>{children}</Botao>

};

export default Button;