import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
`;

export const StyledForm = styled.form`
    display:flex;
    flex-direction: column;
    gap: 10px;
`
export const Tittle = styled.h1`
    
    margin-bottom: 7vh;
    font-weight: bold;
    color: #FFE712; /* Cor do texto */
    font-size: 40px; /* Ajuste o tamanho da fonte conforme necessário */
    font-family: 'Roboto', sans-serif;
`;

export const Principal = styled.div`
    min-height: 100vh;
    background-color: black;
    margin: 0; /* Remove margens padrão */
    padding: 0;
    border:0;
    font-family: 'Roboto', sans-serif;
`

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



export const TextoClicavel = styled.a`
    color: #FFE712; /* Cor amarela para o "aqui" */
    font-size: 15px;
    text-decoration: none; /* Remove o sublinhado */
    cursor: pointer;

    &:hover {
        text-decoration: underline; /* Sublinhado ao passar o mouse */;
    }

    &:active {
        color: #e6c200; /* Cor um pouco mais escura ao clicar */
    }

`;

export const SmallText = styled.p`
    font-size: 10px;
    margin-top: 10px; /* Espaço entre os inputs e o link */
    margin-bottom: 10px;
    color: white; /* Cor do texto "Já tem uma conta?" */
`;