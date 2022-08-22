import React from 'react'
import { InfoContainer, InfoWrapper, InfoRow, Column1, Column2, TextWrapper, TopLine, Heading, SubTitle, ImgWrap, Img } from './InfoSectionElements'

const InfoSection = ({id, lightBackground, lightTextTopLine, lightTextHeadline, lightTextDescription, topline, headline, description, imgStart, img, alt}) => {
  return (
    <>
      <InfoContainer lightBg={lightBackground} id={id}>
        <InfoWrapper>
            <InfoRow imgStart={imgStart}>
                <Column1>
                    <TextWrapper>
                        <TopLine lightText={lightTextTopLine}>{topline}</TopLine>
                        <Heading lightText={lightTextHeadline}>{headline}</Heading>
                        <SubTitle lightText={lightTextDescription}>{description}</SubTitle>
                    </TextWrapper>
                </Column1>
                <Column2>
                    <ImgWrap>
                        <Img src={img} alt={alt}/>                        
                    </ImgWrap>
                </Column2>
            </InfoRow>
        </InfoWrapper>
      </InfoContainer>
    </>
  )
}

export default InfoSection
