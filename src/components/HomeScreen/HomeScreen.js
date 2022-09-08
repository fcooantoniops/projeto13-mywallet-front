import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";

import PageLayout from "../../layouts/PageLayout";
import exitIcon from "../../assets/images/exit-icon.svg";
import addIcon from "../../assets/images/add-icon.svg";
import rmIcon from "../../assets/images/rm-icon.svg";

export default function HomeScreen(){
    const navigate = useNavigate();
    return(
        <>
            <PageLayout>
                <HomeContainer>
                    <Header>
                        <h2>Olá, Fulano</h2>
                        <img src={exitIcon} alt="exit" onClick={ () => navigate("/")}/>
                    </Header>
                    <Historic>
                        <Log>
                            <li>
                                <span className="date">00/00</span>
                                <span className="description">Isso isso isso isso isso isso</span>
                                <span className="value">00,00</span>
                            </li>
                            <div className="balance">
                                <span className="balance-name">SALDO</span>
                                <span className="balance-value">0000,00</span>
                            </div>
                        </Log>
                        {/* <span>Não há registros de entrada ou saída</span> */}
                    </Historic>
                    <Footer>
                        <Link to="/new-entry">                        
                            <img src={addIcon} alt="add"/>
                            <span>Nova entrada</span> 
                        </Link>
                        <Link to="/new-output">
                            <img src={rmIcon} alt="remove"/>
                            <span>Nova saída</span>
                        </Link>
                    </Footer>
                </HomeContainer>
            </PageLayout>
        </>
    );
}

const HomeContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    width: 100%;
    height: 100%;
    padding: 0 24px;

    header, footer{
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        margin: 22px 0;
        padding: 0 24px;
        position: fixed;
        z-index: 1;
    }

    a{
        display: flex;
        flex-direction: column;
        width: 48%;
        height: 114px;
        border-radius: 5px;
        padding: 10px 0 10px 10px;
        background-color: var(--light-purple);
        text-align: left;
        font-size: 17px;
        font-weight: 700;
        line-height: 20px;
    }
`;

const Header = styled.header`
    top: 0;
    left: 0;

    h2{
        font-size: 26px;
        font-weight: 700;
        line-height: 31px;
    }

    img{
        cursor: pointer;
    }
`;

const Historic = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 22%;
    width: 100%;
    height: 68%;
    border-radius: 5px;
    background-color: #FFFFFF;

    span{
        width: 70%;
        font-size: 20px;
        font-weight: 400;
        line-height: 23px;
        text-align: center;
        color: var(--dark-grey);
    }
`;

const Log = styled.ul`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    padding: 22px 10px 10px 10px;

    li{
        width: 100%;
        display: flex;
        justify-content: space-between;
    }

    span{
        width: fit-content;
        font-size: 16px;
        font-weight: 400;
        line-height: 19px;
    }

    .date{
        color: var(--grey);
    }

    .description{
        color: #000000;
    }

    .value{
        color: var(--green);
    }

    .balance{
        display: flex;
        justify-content: space-between;
        position: relative;
        top: 92%;
        font-size: 17px;
        font-weight: 400;
        line-height: 20px;
    }

    .balance-name{
        font-size: 17px;
        font-weight: 700;
        line-height: 20px;
        color: #000000;
    }

    .balance-value{
        color: var(--green);
    }
`;

const Footer = styled.footer`
    bottom: 0;
    right: 0;

    span{
        width: 50%;
    }

    img{
        width: 24px;
        height: 24px;
        margin-bottom: 22%;
    }
`;