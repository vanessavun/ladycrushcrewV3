import styled from 'styled-components';
import { SpinnerContainer } from '../spinner/spinner.styles';

export const BaseButton = styled.button`
    min-width: 165px;
    width: auto;
    height: 50px;
    letter-spacing: 0.5px;
    line-height: 50px;
    padding: 0 35px 0 35px;
    font-size: 15px;
    background-color: #89b0ae;
    color: black;
    text-transform: uppercase;
    font-family: 'Plus Jakarta Sans';
    font-weight: bolder;
    border: none;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;

    &:hover {
        background-color: white;
        color: #89b0ae;
        border: 1px solid #89b0ae;
    }
`;

export const GoogleSignInButton = styled(BaseButton)`
    background-color: #4285f4;
    color: white;

    &:hover {
        background-color: #357ae8;
        border: none;
    }
`;

export const InvertedButton = styled(BaseButton)`
    background-color: white;
    color: #89b0ae;
    border: 1px solid #89b0ae;

    &:hover {
    background-color: #89b0ae;
    color: black;
    border: none;
}
`;

export const ButtonSpinner = styled(SpinnerContainer)`
    width: 30px;
    height: 30px;
`;