import { Link } from "react-router-dom";
import styled from "styled-components";
import FormLayout from "../../layouts/FormLayout";
import PageLayout from "../../layouts/PageLayout";
import SendingButton from "../../layouts/SendingButtonLayout";

export default function SignUpScreen(){
    return(
        <>
            <PageLayout>
                <SignInScreenContainer>
                    <h1>MyWallet</h1>
                    <FormLayout>
                        <input type="text" placeholder="Nome"/>
                        <input type="email" placeholder="E-mail"/>
                        <input type="password" placeholder="Senha"/>
                        <input type="password" placeholder="Confirme a senha"/>
                        <SendingButton type="submit">Cadastrar</SendingButton>
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