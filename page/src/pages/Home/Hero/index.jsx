import logoDio from '../../../assets/dioLogo.png';
import LogoBootcamp from '../../../assets/bootcampLogo.png';
import { Social } from '../../../components/Social';
import { H1 } from '../../../styles/ui';
import { HeroWrapper, Division, ImageWrapper, BootcampLogoImg, HeroParagraph, DioLogoImg } from './style';

export function Hero() {
  return (
    <HeroWrapper>
      <Division>
        <ImageWrapper>
          <BootcampLogoImg src={LogoBootcamp} alt="Logo do Bootcamp" />
          <DioLogoImg src={logoDio} alt="Logo da Dio" />
        </ImageWrapper>
        <H1>Bootcamp spread fullstack developer</H1>
        <HeroParagraph>Esta página foi desenvolvido com a intenção de expor  todo o conhecimento adquirido durante o bootcamp oferecido pela <span>DIO - Digital Innovation One.</span></HeroParagraph>
      </Division>
      
      <Social />
    </HeroWrapper>
  );
}