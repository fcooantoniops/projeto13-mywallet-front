import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import { useState, useContext } from "react";
import axios from 'axios';

import ContextLogin from "../../contexts/ContextLogin";
import FormLayout from "../../layouts/FormLayout";
import PageLayout from "../../layouts/PageLayout";
import SendingButtonLayout from "../../layouts/SendingButtonLayout";

export default function SignUpScreen(){
    const {email, setEmail} = useContext(ContextLogin);
    const {password, setPassword} = useContext(ContextLogin);
    const [name, setName] = useState("");
    const [confirmation, setConfirmation] = useState("");
    const navigate = useNavigate();

    function handleForm(e){
        e.preventDefault();
    };

    function sucess(){
        alert("Cadastro realizado com sucesso, vá para tela de login para iniciar");
        navigate("/");
    };

    function error(){
        alert("Email já ultilizado, Por favor preencha os campos novamente");
    };

    function submit(){
        if (email !== ""  && password !== "" && name !== "" && password === confirmation ){
            const cadastro = {
                name,
	            email,
	            password
            };
            const request = axios.post("http://localhost:5000/sign-up", cadastro);
            request.then(()=> sucess());
            request.catch(()=> error());
        } else {
            alert("Por favor preencha os campos novamente");
        };
    };

    return(
        <>
            <PageLayout>
                <SignInScreenContainer>
                    <h1>MyWallet</h1>
                    <FormLayout onSubmit={handleForm}>
                        <input type="text" placeholder="Nome" onChange={(e)=> setName(e.target.value)} required/>
                        <input type="email" placeholder="E-mail" onChange={(e)=> setEmail(e.target.value)} required/>
                        <input type="password" placeholder="Senha" onChange={(e)=> setPassword(e.target.value)} required/>
                        <input type="password" placeholder="Confirme a senha" onChange={(e)=> setConfirmation(e.target.value)} required/>
                        <SendingButtonLayout type="submit" onClick={() => submit()}>Cadastrar</SendingButtonLayout>
                    </FormLayout>
                    <Link to="/">Já tem uma conta? Entre agora!</Link>
                </SignInScreenContainer>
            </PageLayout>
        </>
    );
}

const SignInScreenContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    h1{
        font-family: 'Saira Stencil One', sans-serif;
        font-size: 32px;
        font-weight: 400;
        line-height: 50px;
        margin-bottom: 24px;
    }
`;