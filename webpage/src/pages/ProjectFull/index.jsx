import React from 'react';
import { Subtitle, SubtitleSmall } from '../../styles/ui';
import {
  Container,
  TitleWrapper,
  TagWrapper,
  ProjectDetailWrapper,
  LinksContainer,
  LinkIcon,
  DescriptionWrapper,
  LearnedWrapper
  
} from './style';

import { BsGithub, BsLinkedin } from 'react-icons/bs';
import { GiDiploma } from 'react-icons/gi';
import { BiLinkAlt } from 'react-icons/bi';

const ProjectFull = () => {
  return (
    <Container>
      <TitleWrapper>
        <Subtitle>Lógica de Programação Essencial</Subtitle>
        <TagWrapper>
          <span>Curso</span>
          <span>Lógica</span>
        </TagWrapper>
      </TitleWrapper>

      <ProjectDetailWrapper>
        <img src="./images/activity01.jpg" alt="xxxx" />
        <SubtitleSmall>Links</SubtitleSmall>
        <LinksContainer>
          <div>
            <a href="#">
              <LinkIcon><BsLinkedin /></LinkIcon>  
              post do projeto
            </a>

            <a href="#">
              <LinkIcon><BsGithub /></LinkIcon>
              código fonte
            </a>
          </div>

          <div>
            <a href="#">
              <LinkIcon><BiLinkAlt /></LinkIcon>
              deploy
            </a>

            <a href="#">
              <LinkIcon><GiDiploma /></LinkIcon>
              certificado
            </a>
          </div>
        </LinksContainer>
      </ProjectDetailWrapper>

      <DescriptionWrapper>
        <SubtitleSmall>Descrição da atividade</SubtitleSmall>
        <p>Entendendo o que é lógica.</p>
      </DescriptionWrapper>

      <LearnedWrapper>
        <SubtitleSmall>O que aprendi</SubtitleSmall>
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
    </Container>
  )
}

export default ProjectFull;