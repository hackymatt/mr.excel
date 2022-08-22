import React, {useState} from 'react'
import Video from '../../videos/video.mp4'
import { MainContainer, MainBg, VideoBg, MainContent, MainP, MainBtnWrapper, ArrowForward, ArrowRight, Logo } from './MainElements'
import {Button} from '../ButtonElement'
import LogoFile from '../../images/logo.png'

const Main = () => {

  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover)
  };

  return (
    <MainContainer id="home">
      <MainBg>
        <VideoBg autoPlay loop muted src={Video} type='video/mp4' />
      </MainBg>
      <MainContent>
        <Logo src={LogoFile} />
        <MainP>
            Rozpocznij swoją drogę w kierunku odkrycia potencjału Excela.
        </MainP>
        <MainBtnWrapper>
          <Button to="about" onMouseEnter={onHover} onMouseLeave={onHover} primary="true" dark="true">
            Sprawdź {hover ? <ArrowForward /> : <ArrowRight />}
          </Button>
        </MainBtnWrapper>
      </MainContent>
    </MainContainer>
  )
}

export default Main
