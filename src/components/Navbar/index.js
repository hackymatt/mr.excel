import React from 'react'
import { FaBars} from 'react-icons/fa'
import {Nav, 
        NavbarContainer, 
        NavLogo, 
        Hamburger, 
        NavMenu, 
        NavItem, 
        NavLinks,
        Logo} from './NavbarElements'
import LogoFile from '../../images/logo.png'

const Navbar = ({toogle}) => {
  return (
    <>
        <Nav>
            <NavbarContainer>
                <NavLogo to="home">
                    <Logo src={LogoFile} />
                </NavLogo>
                <Hamburger onClick={toogle}>
                    <FaBars />
                </Hamburger>
                <NavMenu>
                    <NavItem>
                        <NavLinks to="about">O mnie</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="offer">Oferta</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="course">Kursy</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="contact">Kontakt</NavLinks>
                    </NavItem>
                </NavMenu>
            </NavbarContainer>
        </Nav>
    </>
  )
}

export default Navbar;
