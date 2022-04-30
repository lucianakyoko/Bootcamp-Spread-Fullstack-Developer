import React from 'react';
import Social from '../../components/Social';
import { Subtitle } from '../../styles/ui';
import { Container, Wrapper } from './style';

const About = () => {
  return (
    <Container>
      <Wrapper>
        <Subtitle>Sobre mim</Subtitle>
        <p>Criativa, autodidata e apaixonada pelo universo das tecnologias. Me sentir desafiada é o combustível para seguir aprendendo cada vez mais.</p>
        <p>Conheça meu portfólio para acompanhar o que tenho desenvolvido por aí</p>

        <Social />
      </Wrapper>

      <Wrapper>
        <Subtitle>Sobre o bootcamp</Subtitle>
        <p>O Bootcamp Spread Fullstack Developer é um programa gratuito para pessoas desenvolvedoras que querem começar sua jornada em desenvolvimento de software com uma base sólida em tecnoligias essenciais em front-end quanto em back-end</p>
      </Wrapper>
    </Container>
  )
}

export default About;