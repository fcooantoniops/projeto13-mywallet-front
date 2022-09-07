import styled from "styled-components";

const PageLayout = styled.main`
    @media (min-width: 320px) and (max-width: 660px) {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
`;

export default PageLayout;