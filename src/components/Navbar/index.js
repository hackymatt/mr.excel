import React, {useState, useEffect} from 'react'
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

    const [scrollNav, setScrollNav] = useState(false)

    const changeNav = () => {
        if(window.scrollY >=80) {
            setScrollNav(true)
        } else {
            setScrollNav(false)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', changeNav)
    }, [])

  return (
    <>
        <Nav scrollNav={scrollNav}>
            <NavbarContainer>
                <NavLogo 
                        to="home" 
                        smooth={true}
                        duration={500}
                        spy={true}
                        exact={true}>
                    <Logo src={LogoFile} />
                </NavLogo>
                <Hamburger onClick={toogle}>
                    <FaBars />
                </Hamburger>
                <NavMenu>
                    <NavItem>
                        <NavLinks 
                            to="about"
                            smooth={true}
                            duration={500}
                            spy={true}
                            exact={true}
                            activeClass="active">O mnie</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks 
                            to="offer"
                            smooth={true}
                            duration={500}
                            spy={true}
                            exact={true}>Oferta</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks 
                            to="course"
                            smooth={true}
                            duration={500}
                            spy={true}
                            exact={true}>Kursy</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks 
                            to="contact"
                            smooth={true}
                            duration={500}
                            spy={true}
                            exact={true}>Kontakt</NavLinks>
                    </NavItem>
                </NavMenu>
            </NavbarContainer>
        </Nav>
    </>
  )
}

export default Navbar;
