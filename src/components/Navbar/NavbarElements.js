import styled from 'styled-components'
import { Link as LinkRouter } from 'react-router-dom'
import { Link as LinkScroll } from 'react-scroll'

export const Nav = styled.nav`
    background: #000;
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
    position: sticky;
    top: 0;
    z-index: 10;

    @media screen and (max-width: 768px) {
        transition: 0.8s all ease;
    }
`;

export const NavbarContainer = styled.div`
    display: flex;
    justify-content: space-between;
    height: 80px;
    width: 100%;
    z-index: 1;
    padding: 24px 24px;

    @media screen and (max-width:768px) {
        justify-content: center;
    }
`;

export const NavLogo = styled(LinkScroll)`
    color: #fff;
    display: flex;
    justify-self: flex-start;
    cursor: pointer;
    font-size: 1.5rem;
    align-items: center;
    margin-right: 25px;
    font-weight: bold;
    text-decoration: none;

`;

export const Hamburger = styled.div`
    display: none;
    
    @media screen and (max-width:768px) {
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%, 60%);
        font-size: 1.8rem;
        cursor: pointer;
        color: rgb(2, 116, 56);
    }
`;

export const NavMenu = styled.div`
    display: flex;
    align-items: center;
    list-style: none;
    text-align: center;

    @media screen and (max-width:768px) {
        display: none;
    }
`;

export const NavItem = styled.li`
    height: 80px;
`;

export const NavLinks = styled(LinkScroll)`
    color: #fff;
    display: flex;
    justify-content: space-around;
    align-items: center;
    text-decoration: none;
    cursor: pointer;
    padding: 0 1 rem;
    height: 100%;
    margin-right: 50px;
    margin-left: 50px;
    // font-weight: bold;

    &:hover {
        // color: rgb(2, 116, 56);
        border-bottom: 1px solid rgb(2, 116, 56);
        transition: 0.2s ease-in-out;
    }
`;

export const NavBtn = styled.nav`
    display: flex;
    align-items: center;
    margin-left: 25px;

    @media screen and (max-width:768px) {
        display: none;
    }

`;

export const NavBtnLink = styled(LinkRouter)`
    border-radius: 50px;
    background: rgb(2, 116, 56);
    white-space: nowrap;
    padding: 10px 22px;
    color: #fff;
    font-size: 16px;
    outline: none;
    border: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;

    &:hover {
        transition: all 0.2s ease-in-out;
        background: #01bf71;
        color: #fff;
    }    

`;

export const Logo = styled.img`
  height: 100%;
  width: auto;
  filter: invert(1%) sepia(1%) saturate(1%) hue-rotate(1deg) brightness(1000%) contrast(80%);
`;