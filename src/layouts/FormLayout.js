import styled from "styled-components";

const FormLayout = styled.form`
    width: 324px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    input{
        width: 100%;
        height: 58px;
        border: 0;
        border-radius: 5px;
        margin-bottom: 13px;
        padding: 15px;
        background-color: #FFFFFF;
    }

    input::placeholder {
        font-family: 'Raleway', sans-serif;
        font-size: 20px;
        font-weight: 400;
        line-height: 23px;
        opacity: 1;
        color: #000000;
    }
`;

export default FormLayout;