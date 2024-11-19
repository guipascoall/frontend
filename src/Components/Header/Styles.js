import styled from "styled-components";
import logo1 from '../../Assets/logo1.png';

export const YellowRectangle = styled.div`
    display: flex;
    height: 12vh;
    background-color: #FFE712;
    align-items: center; /* Alinha a imagem verticalmente no centro */
    padding-left: 20px; /* Espaçamento da imagem à esquerda */
    position: relative; /* Garante que a imagem fique posicionada corretamente */
`

export const Logo = styled.img`
    width: 20vh;
    position: absolute;
    top: 41px;
    left: 16px;
    transform: translateY(-50%);
    z-index: 1001;
`;