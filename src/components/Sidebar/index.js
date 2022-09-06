import React from 'react'
import { SidebarContainer, Icon, CloseIcon, SidebarWrapper, SidebarMenu, SidebarLink } from './SidebarElements'

const Sidebar = ({ isOpen, toogle }) => {
  return (
    <>
        <SidebarContainer isOpen={isOpen} onClick={toogle}>
            <Icon onClick={toogle}>
                <CloseIcon />
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink 
                        to="about"
                        smooth={true}
                        duration={500}
                        spy={true}
                        exact={true} 
                        onClick={toogle}>O mnie</SidebarLink>   
                    <SidebarLink 
                        to="offer"
                        smooth={true}
                        duration={500}
                        spy={true}
                        exact={true} 
                        onClick={toogle}>Oferta</SidebarLink> 
                    <SidebarLink 
                        to="course"
                        smooth={true}
                        duration={500}
                        spy={true}
                        exact={true} 
                        onClick={toogle}>Kursy</SidebarLink> 
                    <SidebarLink 
                        to="contact"
                        smooth={true}
                        duration={500}
                        spy={true}
                        exact={true} 
                        onClick={toogle}>Kontakt</SidebarLink> 
                </SidebarMenu>
            </SidebarWrapper>
        </SidebarContainer>
    </>
  )
}

export default Sidebar
