import React, {forwardRef} from "react";
import { Label, CaixaInput, Input as InputCampo } from "./styles";

const Input = forwardRef(({label, placeholder}, ref) => {

    return (
        <CaixaInput>
            <Label>{label}</Label>
            <InputCampo ref={ref} type="text" placeholder={placeholder} />
        </CaixaInput>
    )

})

export default Input