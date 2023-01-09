import styled from "styled-components";

export const ProductsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 10px;
  row-gap: 50px;
`

export const ShopHeader = styled.div`
    width: 80%;
    max-width: 700px;
    display: flex;
    flex-direction: column;
    padding-bottom: 20px;

    @media screen and (max-width: 600px) {
      font-size: small;
      width: 90%;
    }
`

export const ShopContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`