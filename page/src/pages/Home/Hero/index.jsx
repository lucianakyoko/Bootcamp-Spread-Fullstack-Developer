import logoDio from '../../../assets/dioLogo.png';
import LogoBootcamp from '../../../assets/bootcampLogo.png'
import { H1 } from '../../../styles/ui';
import { HeroWrapper, ImageWrapper, BootcampLogoImg, DioLogoImg } from './style';

export function Hero() {
  return (
    <HeroWrapper>
      <ImageWrapper>
        <BootcampLogoImg src={LogoBootcamp} alt="Logo do Bootcamp" />
        <DioLogoImg src={logoDio} alt="Logo da Dio" />
      </ImageWrapper>
      <H1>Bootcamp spread fullstack developer</H1>
      <p>Esta página foi desenvolvido com a intenção de expor  todo o conhecimento adquirido durante o bootcamp oferecido pela <span>DIO - Digital Innovation One.</span></p>
    </HeroWrapper>
  );
}