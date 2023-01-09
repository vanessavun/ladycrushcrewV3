import styled from "styled-components";

export const AuthenticationContainer = styled.div`
    display: flex;
    width: 800px;
    justify-content: space-between;
    margin: 30px auto;

    @media screen and (max-width: 850px) {
        width: 100%;
        flex-direction: column;
        align-items: center;
        gap: 50px;
    }
`;