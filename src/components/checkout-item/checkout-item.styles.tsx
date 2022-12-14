import styled from 'styled-components';

export const CheckoutItemContainer = styled.div`
    width: 100%;
    display: flex;
    min-height: 100px;
    border-bottom: 1px solid darkgrey;
    padding: 15px 0;
    font-size: 20px;
    align-items: center;
`;

export const ImageContainer = styled.div`
    width: 23%;
    padding-right: 15px;

    img {
        max-width: 100%;
        width: 150px;
        height: 150px;
        object-fit: cover;
        object-position: center
    }
`;

export const CheckoutSpan = styled.span`
    width: 23%;
`

export const CheckoutQuantitySpan = styled.span`
    width: 23%;
    display: flex;
`;

export const QuantityArrow = styled.div`
    cursor: pointer;
`;

export const QuantityValue = styled.span`
    margin: 0 10px;
`;

export const RemoveButton = styled.div`
    padding-left: 12px;
    cursor: pointer;
`;