import styled from 'styled-components';
import {Link} from 'react-router-dom';

export const Logo = styled.img`
    max-width: 100%;
    width: 70px;
`

export const NavigationContainer = styled.div`
    height: 80px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding: 5px;

    @media screen and (max-width: 600px) {
        padding: 0;
        height: fit-content;
        align-items: center;
    }
`

export const LogoContainer = styled(Link)`
    height: 100%;
`

export const NavLinks = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    font-weight: bold;
    text-align: center;

    @media screen and (max-width: 600px) {
        padding: 2px;
    }
`

export const NavLink = styled(Link)`

    padding: 0 5px;
    cursor: pointer;
    &:hover {
        color: #89b0ae;
    }
    @media screen and (max-width: 600px) {
        font-size: small;
    }
`

export const ExtLink = styled.a`
    padding: 0 5px;
    cursor: pointer;
    &:hover {
        color: #89b0ae;
    }
    @media screen and (max-width: 600px) {
        font-size: small;
    }
`

