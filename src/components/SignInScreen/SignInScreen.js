import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import axios from "axios";

import ContextLogin from "../../contexts/ContextLogin";
import FormLayout from "../../layouts/FormLayout";
import PageLayout from "../../layouts/PageLayout";
import SendingButtonLayout from "../../layouts/SendingButtonLayout";

export default function SignInScreen(){
    const {email, setEmail} = useContext(ContextLogin);
    const {password, setPassword} = useContext(ContextLogin);
    const  navigate = useNavigate();

    function handleForm(e){
        e.preventDefault();
    };

    function sucess(res){
        localStorage.setItem("token", res.data.token);
        localStorage.setItem("name", res.data.name);
        navigate("/home");
    };

    function error(){
        alert("Por favor preencha os campos novamente");
    }; 

    function submit(){
        if (email !== ""  && password !== ""){
            const login = {
                email,
	            password
            };
            const request = axios.post("http://localhost:5000/sign-in", login);
            request.then((res)=> sucess(res));
            request.catch(()=> error());
        } else {
            alert("Por favor preencha os campos novamente");
        };
    };

    return (
        <>
            <PageLayout>
                <SignUpContainer>
                    <h1>MyWallet</h1>
                    <FormLayout onSubmit={handleForm}>
                        <input type="email" placeholder="E-mail" onChange={(e)=> setEmail(e.target.value)} required/>
                        <input type="password" placeholder="Senha" onChange={(e)=> setPassword(e.target.value)} required/>
                        <SendingButtonLayout type="submit" onClick={() => submit()}>Entrar</SendingButtonLayout>
                    </FormLayout>
                    <Link to="/sign-up">Primeira vez? Cadastre-se!</Link>
                </SignUpContainer>
            </PageLayout>
        </>
    );
}

const SignUpContainer = styled.div`
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