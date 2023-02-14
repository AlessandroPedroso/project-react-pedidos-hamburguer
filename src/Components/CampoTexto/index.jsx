import React from "react";
import { Label, CaixaInput, Input as InputCampo } from "./styles";

const Input = ({label, placeholder}) => {

    return (
        <CaixaInput>
            <Label>{label}</Label>
            <InputCampo type="text" placeholder={placeholder} />
        </CaixaInput>
    )

}

export default Input