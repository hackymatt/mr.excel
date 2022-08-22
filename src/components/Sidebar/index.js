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
                    <SidebarLink to="about" onClick={toogle}>O mnie</SidebarLink>   
                    <SidebarLink to="offer" onClick={toogle}>Oferta</SidebarLink> 
                    <SidebarLink to="course" onClick={toogle}>Kursy</SidebarLink> 
                    <SidebarLink to="contact" onClick={toogle}>Kontakt</SidebarLink> 
                </SidebarMenu>
            </SidebarWrapper>
        </SidebarContainer>
    </>
  )
}

export default Sidebar
