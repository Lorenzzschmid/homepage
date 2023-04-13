import styled from "styled-components";

export const NavbarContainer = styled.nav`
    width: 100%;
    height: 80px;
    background-color: black;
    display: flex;
    flex-direction: column;
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
`

export const NavDroppedDownContainer = styled.div`

`;