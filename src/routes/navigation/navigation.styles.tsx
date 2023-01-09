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
`

export const LogoContainer = styled(Link)`
    height: 100%;
`

export const NavLinks = styled.div`
    max-width: 50%;
    min-width: 400px;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    font-weight: bold;
`

export const NavLink = styled(Link)`
    margin: 0;
    padding: 0 5px;
    cursor: pointer;
    &:hover {
        color: #89b0ae;
    }
`

