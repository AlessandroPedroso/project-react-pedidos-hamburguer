import styled from "styled-components";

export const Container = styled.div`

    background-color: #0A0A10;
    height: 100%;
    min-height: 100vh;
    display:flex;
    align-items: center;
    flex-direction: column;
`

export const ListPedidos = styled.li`
width: 100%;
min-width: 342px;
height: auto;
background: rgba(255, 255, 255, 0.25);
border-radius: 14px;
display: flex;
justify-content: space-between;
margin-bottom: 20px;

    button{
        background: none;
        border:none;
        cursor: pointer;
        padding-right: 15px;
    }

`

export const PPedidos = styled.p`

font-family: 'Roboto';
font-style: normal;
font-weight: 300;
font-size: 18px;
line-height: 21px;
color: #FFFFFF;
padding-top: 17px;
padding-left: 27px;

`

export const PCliente = styled.p`

font-family: 'Roboto';
font-style: normal;
font-weight: 700;
font-size: 18px;
line-height: 21px;
color: #FFFFFF;
margin-bottom: 13px;
padding-left: 27px;

`

export const DivPedidos = styled.div`
display: flex;
flex-direction: column;
gap: 29px;

`
