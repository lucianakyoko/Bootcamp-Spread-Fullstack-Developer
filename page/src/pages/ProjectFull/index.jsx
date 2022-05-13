import { useParams } from 'react-router-dom';
import { BackToTopBtn } from '../../components/BackToTopBtn';

import { BsGithub, BsLinkedin } from 'react-icons/bs';
import { GiDiploma } from 'react-icons/gi';
import { BiLinkAlt } from 'react-icons/bi';

import  bootcamps from '../../datas/datas';
import { getCategoryColor, getTagColor } from '../../utils/getColor';
import { getCategoryLabel, getTagLabel } from '../../utils/getLabel';

import { H2, H3 } from "../../styles/ui";
import {
  ProjectFullSection,
  Header,
  TagsWrapper,
  TagItem,
  ProjectContent,
  ImgAndLinksWrapper,
  LinksContainer,
  LinksWrapper,
  LinkIcon,
  DescriptionWrapper,
  LearnedWrapper
} from './style';

export function ProjectFull() {
  const { projectId } = useParams();
  const bootcamp = bootcamps.find(item => item.id === projectId);

  return(
    <ProjectFullSection>
      <Header>
        <H2>{bootcamp.activity}</H2>
        <TagsWrapper>
          <TagItem color={getCategoryColor(bootcamp.category)}>{getCategoryLabel(bootcamp.category)}</TagItem>
          <TagItem color={getTagColor(bootcamp.tag)}>{getTagLabel(bootcamp.tag)}</TagItem>
        </TagsWrapper>
      </Header>

      <ProjectContent>
        <ImgAndLinksWrapper>
          <img src={`/src/assets/projects/${bootcamp.image}.jpg`} alt={`Screenshot do projeto ${bootcamp.activity}`} />
          <LinksContainer>
            <H3>Links:</H3>
            <LinksWrapper>
              <a 
                href={bootcamp.post}
                rel="noopener noreferrer" 
                target="_blank"
              >
                <LinkIcon><BsLinkedin/></LinkIcon>
                post do projeto
              </a>

              <a 
                href={bootcamp.github}
                rel="noopener noreferrer" 
                target="_blank"
              >
                <LinkIcon><BsGithub/></LinkIcon>
                código fonte
              </a>

              <a 
                href={bootcamp.page}
                rel="noopener noreferrer" 
                target="_blank"
              >
                <LinkIcon><BiLinkAlt/></LinkIcon>
                deploy
              </a>

              <a 
                href={bootcamp.certificate}
                rel="noopener noreferrer" 
                target="_blank"
              >
                <LinkIcon><GiDiploma/></LinkIcon>
                certificado
              </a>
            </LinksWrapper>
          </LinksContainer>
        </ImgAndLinksWrapper>

        <DescriptionWrapper>
          <H3>Descrição:</H3>
          <p>{bootcamp.description}</p>
        </DescriptionWrapper>

        <LearnedWrapper>
          <H3>O que aprendi:</H3>
          <ul>
            {bootcamp.learned.map((item, index) => (
              <li key={index}>{item}</li>
            ))}     
          </ul>
        </LearnedWrapper>
      </ProjectContent>

      <BackToTopBtn />
    </ProjectFullSection>
  );

}