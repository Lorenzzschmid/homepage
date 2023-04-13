import React from 'react'
import { 
  NavLeftContainer, 
  NavRightContainer, 
  NavbarContainer, 
  NavInnerContainer, 
  NavDroppedDownContainer,
} from '../Nav/Nav.Style'; 

const Nav = () => {
  return (
  <NavbarContainer>
    <NavInnerContainer>
      <NavLeftContainer></NavLeftContainer>
      <NavRightContainer></NavRightContainer>
    </NavInnerContainer>
    <NavDroppedDownContainer></NavDroppedDownContainer>
  </NavbarContainer>
  )
}

export default Nav