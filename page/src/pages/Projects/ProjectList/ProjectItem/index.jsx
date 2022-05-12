import { Link } from 'react-router-dom';

import { getTagLabel } from '../../../../utils/getTagLabel';
import { getTagColor } from '../../../../utils/getTagColor';

import {
  ProjectItemWrapper,
  ProjectDescriptionWrapper,
  TagWrapper,
  Tag
} from './style';

export function ProjectItem({ item }) {
  return (
    <ProjectItemWrapper key={item.id}>
      <Link to={`/projetos/${item.id}`}>
      <img src={`./src/assets/projects/${item.image}.jpg`} alt="" />
      <ProjectDescriptionWrapper>
        <h3>{item.activity}</h3>
        <TagWrapper>
          <Tag color={getTagColor(item.tags[0])}>{getTagLabel(item.tags[0])}</Tag>
          <Tag color={getTagColor(item.tags[1])}>{getTagLabel(item.tags[1])}</Tag>
        </TagWrapper>
      </ProjectDescriptionWrapper>
    </Link>
    </ProjectItemWrapper>
  )
}