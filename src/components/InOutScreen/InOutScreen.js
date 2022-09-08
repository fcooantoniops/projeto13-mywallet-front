import { useLocation } from "react-router-dom";
import styled from "styled-components";
import FormLayout from "../../layouts/FormLayout";
import PageLayout from "../../layouts/PageLayout";
import SendingButtonLayout from "../../layouts/SendingButtonLayout";

export default function InOutScreen(){
    let location = useLocation();
    return(
        <>
            <PageLayout>
                <InOutContainer>
                    <h1>{((location.pathname === "/new-entry") ?  <>Nova entrada</> : <>Nova saída</>)}</h1>
                    <FormLayout>
                        <input type="text" placeholder="Valor"/>
                        <input type="text" placeholder="Descrição"/>
                        <SendingButtonLayout>
                            {((location.pathname === "/new-entry") ?  <>Salvar entrada</> : <>Salvar saída</>)}
                        </SendingButtonLayout>
                    </FormLayout>
                </InOutContainer>
            </PageLayout>
        </>
    );
}

const InOutContainer = styled.div`
    display: flex;
    flex-direction: column;
    position: fixed;
    top: 0;
    left: 0;
    margin: 24px 24px 0 24px;

    h1{
        width: 100%;
        margin-bottom: 40px;
        font-size: 26px;
        font-weight: 700;
        line-height: 31px;
        text-align: left;
    }
`;