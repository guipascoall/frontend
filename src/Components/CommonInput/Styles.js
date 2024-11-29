import styled from "styled-components";


export const StyleCommonInput = styled.input`
    
    width: 55vh;
    height: 5vh;
    margin-bottom: 10px; /* Espaçamento entre os inputs */
    border: none; /* Remove o contorno */
    border-radius: 15px; /* Bordas arredondadas para os inputs */
    background-color: white; /* Cor de fundo do campo de entrada */
    padding-left: 15px; /* Move o texto para a direita */
    

  &::placeholder {
    color: gray; /* Cor padrão do placeholder */
  }

  &:focus {
    outline: none; /* Remove o contorno azul ao focar */
    background-color: #f0f0f0; /* Leve alteração no fundo ao focar */
  }
`