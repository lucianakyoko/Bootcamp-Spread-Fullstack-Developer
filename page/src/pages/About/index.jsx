import { H1 } from "../../styles/ui";
import {
  AboutSection,
  AboutParagraph
} from './style';


export function About() {
  return (
    <AboutSection>
      <H1>Sobre o Bootcamp</H1>
      <AboutParagraph>
      O Bootcamp Spread Fullstack Developer é um programa gratuito para pessoas desenvolvedoras que querem começar sua jornada em desenvolvimento de software com uma base sólida em tecnologias essenciais em front-end quanto e back-end.
      </AboutParagraph>
    </AboutSection>

  );
}