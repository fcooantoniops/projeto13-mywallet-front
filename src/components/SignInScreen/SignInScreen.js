import styled from "styled-components";
import { Link } from "react-router-dom";

import FormLayout from "../../layouts/FormLayout";
import PageLayout from "../../layouts/PageLayout";
import SendingButtonLayout from "../../layouts/SendingButtonLayout";

export default function SignInScreen(){
    return (
        <>
            <PageLayout>
                <SignUpContainer>
                    <h1>MyWallet</h1>
                    <FormLayout>
                        <input type="email" placeholder="E-mail"/>
                        <input type="password" placeholder="Senha"/>
                        <SendingButtonLayout type="submit">
                            <Link to="/home"><p>Entrar</p></Link>
                        </SendingButtonLayout>
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
    
    p{
        font-size: 20px;
        font-weight: 700;
        line-height: 23px;
    }
`;