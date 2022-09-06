import React from 'react'
import {
    FooterContainer,
    FooterWrapper,
    SocialMedia,
    SocialMediaWrap,
    SocialLogo,
    Logo,
    WebsiteRights,
    SocialIcons,
    SocialIconLink
} from './FooterElements'
import logo from '../../images/logo.png'
import {FaFacebook} from 'react-icons/fa'
import {SiUdemy, SiGmail} from 'react-icons/si'

const Footer = () => {
  return (
    <>
      <FooterContainer>
        <FooterWrapper>
            <SocialMedia>
                <SocialMediaWrap>
                    <SocialLogo to="/home">
                        <Logo src={logo}/>
                    </SocialLogo>
                    <WebsiteRights>
                        MR. EXCEL Ⓒ {new Date().getFullYear()} All rights reserved.
                    </WebsiteRights>
                    <SocialIcons>
                        <SocialIconLink href="https://www.facebook.com/mr.excel.szkolenia" target="_blank" aria-label="Facebook"><FaFacebook /></SocialIconLink>
                        <SocialIconLink href="https://www.udemy.com/user/mr-excel-2/" target="_blank" aria-label="Udemy"><SiUdemy /></SocialIconLink>
                        <SocialIconLink href="mailto:mr.excel.szkolenia@gmail.com" target="_blank" aria-label="Gmail"><SiGmail /></SocialIconLink>
                    </SocialIcons>
                </SocialMediaWrap>
            </SocialMedia>
        </FooterWrapper>
      </FooterContainer>
    </>
  )
}

export default Footer
