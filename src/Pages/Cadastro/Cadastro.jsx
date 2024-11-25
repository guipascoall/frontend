import React from 'react';
import logo1 from '../../Assets/logo1.png';
import { BotaoPadrao, CommonInput } from '../../Components';
import {Principal, YellowRectangle, Logo, Tittle, TextoClicavel, Container, StyledForm} from "./Styles";
import { useCreateUsuario } from '../../Hooks/usuario';
import { useState, useEffect } from 'react';
import {useNavigate} from "react-router-dom";
import{useForm} from "react-hook-form";


function Cadastro () {
    const navigate = useNavigate();   
    
    //HOOKS
    const{
        handleSubmit, 
        register, 
        formState: {errors},
    } = useForm({});

    const {mutate: postUsuario, isPending } = useCreateUsuario({});

    //ONSUBMIT
    function response(data){
        console.log("cheguei na func");
        postUsuario(data);
        navigate("/login");
    }

    return (
        <Container>
            <Tittle>CADASTRO</Tittle>
            <StyledForm onSubmit={handleSubmit(response)}>

                <CommonInput placeholder = "Nome" register = {register("nome")}/>
                <CommonInput placeholder = "E-mail" register = {register("email")} type="email"/>
                <CommonInput placeholder = "Cargo" register = {register("cargo")}/>
                <CommonInput placeholder = "Senha" register = {register("senha")} type="password"/>
                <CommonInput placeholder = "Repita sua senha" register = {register("status")} type="password"/>
                {/*<input  placeholder = "Cargo" {...register("cargo")}/>
                <input  placeholder = "Senha" type = "password" {...register("senha")}/>
                <input  placeholder = "Repita sua senha" type = "password" {...register("repita")}/>*/}
                <p>
                    Já tem uma conta? Faça login 
                    <TextoClicavel href = '/login'> aqui.</TextoClicavel>
                </p>
                
                <BotaoPadrao> 
                    CRIAR CONTA
                </BotaoPadrao> 
            </StyledForm>
            
        </Container>
    )
    
};

export default Cadastro
