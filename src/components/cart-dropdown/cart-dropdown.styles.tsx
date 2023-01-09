import styled from 'styled-components';

export const CartDropDownContainer = styled.div`
    position: absolute;
    width: 240px;
    height: 340px;
    display: flex;
    flex-direction: column;
    padding: 20px;
    border: 2px solid #89b0ae;
    background-color: white;
    top: 85px;
    right: 5px;
    z-index: 5;
    overflow-x: hidden;

    button {
        margin-top: auto;
    }
`

export const CartItems = styled.div`
    height: 240px;
    display: flex;
    flex-direction: column;
    overflow: auto;
`

export const EmptyMessage = styled.span`
    font-size: 18px;
    margin: 50px auto;
`

