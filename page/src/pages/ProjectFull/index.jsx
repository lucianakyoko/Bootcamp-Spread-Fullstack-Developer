import { H2, H3 } from "../../styles/ui";

import { BsGithub, BsLinkedin } from 'react-icons/bs';
import { GiDiploma } from 'react-icons/gi';
import { BiLinkAlt } from 'react-icons/bi';

import {
  ProjectFullSection,
  Header,
  TagsWrapper,
  ProjectContent,
  ImgAndLinksWrapper,
  LinksContainer,
  LinksWrapper,
  LinkIcon,
  DescriptionWrapper,
  LearnedWrapper
} from './style';

export function ProjectFull() {
  return(
    <ProjectFullSection>
      <Header>
        <H2>Projeto completo</H2>
        <TagsWrapper>
          <span>curso</span>
          <span>javaScript</span>
        </TagsWrapper>
      </Header>

      <ProjectContent>
        <ImgAndLinksWrapper>
          <img src="./src/assets/projects/activity01.jpg" alt="" />
          <LinksContainer>
            <H3>Links:</H3>
            <LinksWrapper>
              <a href="#">
                <LinkIcon><BsLinkedin/></LinkIcon>
                post do projeto
              </a>

              <a href="#">
                <LinkIcon><BsGithub/></LinkIcon>
                código fonte
              </a>

              <a href="#">
                <LinkIcon><BiLinkAlt/></LinkIcon>
                deploy
              </a>

              <a href="#">
                <LinkIcon><GiDiploma/></LinkIcon>
                certificado
              </a>
            </LinksWrapper>
          </LinksContainer>
        </ImgAndLinksWrapper>

        <DescriptionWrapper>
          <H3>Descrição:</H3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad molestiae explicabo recusandae cumque in? Nesciunt!</p>
        </DescriptionWrapper>

        <LearnedWrapper>
          <H3>O que aprendi:</H3>
          <ul>
            <li>O que é lógica</li>
            <li>Algoritmos e pseudo código</li>
            <li>Fluxograma, variáveis e constantes</li>
            <li>Tomadas de decisões e expressões</li>
            <li>Estrutura de repetição</li>
            <li>O que são linguagens de programação</li>
            <li>Desvios condicionais e Boas práticas em programação</li>
            <li>Laços de repetição em Portugol</li>
            <li>Aplicação prática com matrizes e vetores</li>
            
          </ul>
        </LearnedWrapper>
      </ProjectContent>
    </ProjectFullSection>
  );

}