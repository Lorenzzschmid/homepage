import React from 'react'
import { 
  NavLeftContainer, 
  NavRightContainer, 
  NavbarContainer, 
  NavInnerContainer, 
  NavDroppedDownContainer,
  NavLinkContainer,
} from '../Nav/Nav.Style'; 
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
  <NavbarContainer>
    <NavInnerContainer>
      <NavLeftContainer>
        <NavLinkContainer>
          <Link to='/'>Home</Link>

        </NavLinkContainer>

      </NavLeftContainer>
      <NavRightContainer></NavRightContainer>
    </NavInnerContainer>
    <NavDroppedDownContainer></NavDroppedDownContainer>
  </NavbarContainer>
  )
}

export default Nav