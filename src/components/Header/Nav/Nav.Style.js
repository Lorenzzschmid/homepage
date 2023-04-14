import styled from "styled-components";
import { Link } from 'react-router-dom';


export const NavbarContainer = styled.nav`
    width: 100%;
    height: ${(props) => (props.extendDropdown ? "100vh" : "80px")};
    background-color: #2B4061;
    display: flex;
    flex-direction: column;
    @media (min-width: 700px) {
        height: 80px;
    }
`;

export const NavLeftContainer = styled.div`
    flex: 70%;
    display: flex;
    align-items: center;
    padding-left: 5%;
`; 

export const NavRightContainer = styled.div`
    flex: 30%;
    display: flex;
    justify-content: flex-end;
    padding-right: 50px;
`; 

export const NavInnerContainer = styled.div`
    width: 100%;
    height: 80px;
    display: flex;
`;

export const NavLinkContainer = styled.div`
    display: flex;
    height: 100%;
    align-items: center;
    width: 30rem;
`

export const NavbarLink = styled(Link)`
    color: #AAC2E6;
    font-size: x-large;
    font-family: Arial, Helvetica, sans-serif;
    text-decoration: none;
    margin: 10px;
    @media (max-width: 700px) {
        display: none;
    }
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    :hover {
        background-color: #4C73AD;
        padding: 0;
    }
`
export const NavbarLinkExtended = styled(Link)`
    color: #AAC2E6;
    font-size: x-large;
    font-family: Arial, Helvetica, sans-serif;
    text-decoration: none;
    margin: 10px;
    `

export const Logo = styled.img`
    margin: 10px;
    max-width: 180px;
    height: auto;
    `;

export const OpenLinksButton = styled.button`
    width: 70px;
    height: 50px;
    background: none;
    border: none;
    color: #AAC2E6;
    font-size: 45px;
    cursor: pointer;
    @media (min-width: 700px) {
        display: none; 
    }
`;

export const NavDroppedDownContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    
    @media (min-width: 700px) {
        display: none; 
    }
`;