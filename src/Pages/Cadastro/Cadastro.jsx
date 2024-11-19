import React from 'react';
import logo1 from '../../Assets/logo1.png';
import { BotaoPadrao, CommonInput } from '../../Components';
import {Principal, YellowRectangle, Logo, Tittle, TextoClicavel, Container, StyledForm} from "./Styles";
import { useState, useEffect } from 'react';
import {useNavigate} from "react-router-dom";
import{useForm} from "react-hook-form";


function Cadastro () {
    const navigate = useNavigate();   
    const{
        handleSubmit, 
        register, 
        formState: {errors},
    } = useForm({});

    function response(data){
        console.log("ooooi");
        console.log(data);
        //navigate("/login");
        console.log(response);
    }

    //const handleFormSubmit = (e) => {
        //e.preventDefault(); // Previne o envio tradicional
        //handleSubmit(response)(); // Chama a função de submissão do React Hook Form
    //};

    return (
        <Container>
            <Tittle>CADASTRO</Tittle>
            <StyledForm onSubmit={handleSubmit(response)}>
                <CommonInput {...register("nome")} placeholder = "Nome"/>
                <CommonInput {...register("email")} placeholder = "E-mail" type = "email"/>
                <CommonInput {...register("cargo")} placeholder = "Cargo"/>
                <CommonInput type = "password" {...register("senha")} placeholder = "Senha"/>
                <CommonInput type = "password" {...register("repita sua senha")} placeholder = "Repita sua senha" />
                <p>
                    Já tem uma conta? Faça login 
                    <TextoClicavel href = '/login'> aqui.</TextoClicavel>
                </p>
                
                <BotaoPadrao > 
                    CRIAR CONTA
                </BotaoPadrao> 
            </StyledForm>
            
        </Container>
    )
    
};

export default Cadastro
