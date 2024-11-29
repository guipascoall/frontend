import React from 'react';
import { Container, StyledForm } from './Styles';
import {useNavigate} from "react-router-dom";
import {BotaoPadrao} from '../../Components';


function Home(){
    const navigate = useNavigate();
    return(
        <Container>
            <StyledForm>
            
                <BotaoPadrao onClick={()=> navigate("/cadastro")}> 
                IR PARA CADASTRO
                </BotaoPadrao>
            </StyledForm>    
        </Container>
    )
}
export default Home;