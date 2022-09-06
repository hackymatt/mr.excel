import styled from "styled-components";
import {Link} from 'react-scroll'

export const FooterContainer = styled.footer`
    background: #000;
`

export const FooterWrapper = styled.div`
    padding: 48px 24px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-width: 1100px;
    margin: 0 auto;
`

export const SocialMedia = styled.section`
    max-width: 1000px;
    width: 100%
`

export const SocialMediaWrap = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1100px;
    margin: 20px auto 0 auto;

    @media screen and (max-width:820px) {
        flex-direction: column;
    }
`

export const SocialLogo = styled(Link)`
    color: #fff;
    justify-self: start;
    cursor: pointer;
    text-decoration: none;
    display: flex;
    align-items: center;
    margin-bottom: 16px;
`
export const Logo = styled.img`
  height: 30px;
  width: 100%;
  filter: invert(1%) sepia(1%) saturate(1%) hue-rotate(1deg) brightness(1000%) contrast(80%);
`

export const WebsiteRights = styled.small`
    color: #fff;
    margin-bottom: 16px;
`

export const SocialIcons = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 240px;
`

export const SocialIconLink = styled.a`
   color: #fff;
   font-size: 24px; 
`
