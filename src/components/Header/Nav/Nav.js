import React, { useState } from 'react'; 
import styled from 'styled-components'; 

const Nav = () => {
    const [showNav, setShowNav] = useState(false); 

    const handleNavToggle = () => {
        setShowNav(!showNav); 
    }

  return (
    <Nav>
        <Logo>My Portfolio</Logo>
        <Burger onClick={handleNavToggle}>
            <MenuIcon />
            <MenuIcon />
            <MenuIcon />
        </Burger>
        <NavLinks show={showNav}>
            <NavLink href='#'>About</NavLink>
            <NavLink href='#'>Contact</NavLink>
            <NavLink href='#'>Projects</NavLink>
        </NavLinks>
    </Nav>
  )
}

export default Nav