import styled from "styled-components";

export const Button = styled.button`

    width: 342px;
    height: 68px;
    background: ${props => props.backgroundBlack? 'rgba(255, 255, 255, 0.14)':'#D93856'};
    margin-top: 35px;
    margin-bottom: 51px;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 900;
    font-size: 17px;
    line-height: 2px;
    color: #FFFFFF;
    cursor: pointer;

    &:hover{
        opacity: 0.8;
    }

    &:active{
        opacity: 0.6;
    }

`;