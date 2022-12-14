import styled from 'styled-components';
import {MdArrowForward, MdKeyboardArrowRight} from 'react-icons/md';

export const MainContainer = styled.div`
    background: #0c0c0c;
    display:flex;
    justify-content: center;
    align-items: center;
    padding: 0 30px;
    height: 940px;
    position: relative;
    z-index: 1;
    margin-top: -80px;

    &:before {
        content: "";
        position: absolute;
        top:0;
        right:0;
        bottom:0;
        left: 0;
        background: linear-gradient(180deg, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.6) 100%), linear-gradient(180deg, rgba(0,0,0,0.2) 0%, transparent 100%);
        z-index:2;
    }
`;

export const MainBg = styled.div`
    position: absolute;
    top:0;
    right:0;
    bottom:0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
`
export const VideoBg = styled.video`
    width: 100%;
    height: 100%;
    object-fit: cover;
    background: #232a34;
`

export const MainContent = styled.div`
    z-index: 3;
    max-width: 1200px;
    position: absolute;
    padding: 8px 24px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const MainH1 = styled.h1`
    color: #fff;
    font-size: 24px;
    text-align: center;

    @media screen and (max-width:768px) {
        font-size: 40px;
    }

    @media screen and (max-width:480px) {
        font-size: 32px;
    }
`;

export const MainP = styled.p`
    margin-top:24px;
    color: #fff;
    font-size: 22px;
    text-align: center;
    max-width: 768px;

    @media screen and (max-width:480px) {
        font-size: 18px;
    }
`;

export const MainBtnWrapper = styled.div`
    margin-top:32px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const ArrowForward = styled(MdArrowForward)`
    margin-left: 8px;
    font-size: 20px;
`;

export const ArrowRight = styled(MdKeyboardArrowRight)`
    margin-left: 8px;
    font-size: 20px;
`;

export const Logo = styled.img`
  height: auto;
  width: 100%;
  filter: invert(1%) sepia(1%) saturate(1%) hue-rotate(1deg) brightness(1000%) contrast(80%);
`;