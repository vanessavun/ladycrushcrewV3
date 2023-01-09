import styled from "styled-components";

export const AboutContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`


export const AboutBody = styled.div`
    width: 70%;
    display: flex;
    flex-direction: row;
    padding: 10px;
    @media screen and (max-width: 600px) {
        flex-direction: column;
    }
`

export const AboutDescription = styled.div`
    margin: 10px;
    padding: 10px;
    min-width: 300px;
    width: 100%;
`

export const AboutImg = styled.img`
    min-width: 200px;
    width: 300px;
    height: 600px;
    object-fit: cover;
    object-position: center;

`

export const AboutImgContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`