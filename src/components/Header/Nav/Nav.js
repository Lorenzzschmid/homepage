import React, {useState} from 'react'
import { 
  NavLeftContainer, 
  NavRightContainer, 
  NavbarContainer, 
  NavInnerContainer, 
  NavDroppedDownContainer,
  NavLinkContainer,
  NavbarLink,
  Logo,
  OpenLinksButton,
  NavbarLinkExtended,
} from '../Nav/Nav.Style'; 
import LogoImg from '../../../assets/logo.png'; 

const Nav = () => {

  const [ toggleOpen, setToggleOpen ] = useState(false); 

  return (
  <NavbarContainer extendDropdown={toggleOpen}>
    <NavInnerContainer>
      <NavLeftContainer>
        <NavLinkContainer>
          <NavbarLink to='/'>Home</NavbarLink>
          <NavbarLink to='/'>About</NavbarLink>
          <NavbarLink to='/'>Projects</NavbarLink>
          <NavbarLink to='/'>Contact</NavbarLink>
          <OpenLinksButton onClick={() => {
            setToggleOpen((curr) => !curr)
            }}>{toggleOpen ? <>&#10005;</> : <>&#8801;</>}</OpenLinksButton>
        </NavLinkContainer>

      </NavLeftContainer>
      <NavRightContainer>
        <Logo src={LogoImg}></Logo>
      </NavRightContainer>
    </NavInnerContainer>
    {toggleOpen && 
      <NavDroppedDownContainer>
          <NavbarLinkExtended to='/'>Home</NavbarLinkExtended>
            <NavbarLinkExtended to='/'>About</NavbarLinkExtended>
            <NavbarLinkExtended to='/'>Projects</NavbarLinkExtended>
            <NavbarLinkExtended to='/'>Contact</NavbarLinkExtended>
        </NavDroppedDownContainer>
    }
  </NavbarContainer>
  )
}

export default Nav