import styled from "styled-components";

export const ProductsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 10px;
  row-gap: 50px;
`

export const ShopHeader = styled.div`
    width: 60%;
    max-width: 700px;
    display: flex;
    flex-direction: column;
    padding-bottom: 20px;
`

export const ShopContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`