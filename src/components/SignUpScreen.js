import styled from "styled-components";
import { Link } from "react-router-dom";

import FormLayout from "../layouts/FormLayout";
import PageLayout from "../layouts/PageLayout";
import SendingButton from "../layouts/SendingButtonLayout";

export default function SignUpScreen(){
    return (
        <>
            <PageLayout>
                <SignUpContainer>
                    <h1>MyWallet</h1>
                    <FormLayout>
                        <input type="email" placeholder="E-mail"/>
                        <input type="password" placeholder="Senha"/>
                        <SendingButton type="submit">Entrar</SendingButton>
                    </FormLayout>
                    <Link to="/sign-in">Primeira vez? Cadastre-se!</Link>
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