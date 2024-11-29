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
    align-items: center;
    gap: 10px;
`

export const Tittle = styled.h1`
    margin-bottom: 9vh;
    font-weight: bold;
    color: #FFE712; /* Cor do texto */
    font-size: 40px; /* Ajuste o tamanho da fonte conforme necessário */
    font-family: 'Roboto', sans-serif;
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
