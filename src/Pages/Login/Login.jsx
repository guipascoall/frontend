import React from 'react';
import { Container, StyledForm, Tittle, TextoClicavel } from './Styles';
import { BotaoPadrao, CommonInput, } from '../../Components';
import {useNavigate} from "react-router-dom";
import{useForm} from "react-hook-form";


function Login(){

    
    const navigate = useNavigate();

    const{
        handleSubmit, 
        register, 
        formState: {errors},
    } = useForm({});

    function response(data){
        console.log(data);
    }

    return(
        <Container>
            <Tittle>LOGIN</Tittle>
            <StyledForm onSubmit={handleSubmit(response)}>
                
                
                <CommonInput placeholder = "E-mail" register = {register("email")} type="email"/>
                <CommonInput placeholder = "Senha" register = {register("senha")} type="password"/>

                <p>
                    Não tem login? Faça seu cadastro 
                    <TextoClicavel href = '/cadastro'> aqui.</TextoClicavel>
                </p>
                
                <BotaoPadrao onClick={()=> navigate("/")}> 
                ENTRAR
                </BotaoPadrao> 

                
            </StyledForm>
        </Container>
    )


}
export default Login;