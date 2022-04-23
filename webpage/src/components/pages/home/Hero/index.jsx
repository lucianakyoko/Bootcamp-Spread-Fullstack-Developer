import React from 'react';
import LogoBootcamp from '../../../../assets/images/bootcampLogo.png';
import LogoDio from '../../../../assets/images/dioLogo.png';
import { Title, ParagraphMedium } from '../../../../styles/ui';
import { Container, ImageWrapper, TitleWrapper, BootcampLogoImg, DioLogoImg } from './style';

const Hero = () => {
  return (
    <Container>
      <ImageWrapper>
        <BootcampLogoImg src={LogoBootcamp}/>
        <DioLogoImg src={LogoDio}/>
      </ImageWrapper>
      <TitleWrapper>
        <Title>Bootcamp</Title>
        <Title>Spread Fullstack Developer</Title>
      </TitleWrapper>
      <ParagraphMedium>Esta página foi desenvolvido com a intenção de expor  todo o conhecimento adquirido durante o bootcamp oferecido pela DIO - Digital Innovation One. </ParagraphMedium>
    </Container>
  )
}

export default Hero;