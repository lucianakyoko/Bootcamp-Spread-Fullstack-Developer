import { Link } from 'react-router-dom';

import { getCategoryLabel } from '../../../../utils/getLabel';
import { getCategoryColor } from '../../../../utils/getColor';

import {
  ProjectItemWrapper,
  ProjectDescriptionWrapper,
  TagWrapper,
  Tag
} from './style';

export function ProjectItem(props) {
  const {id, image, activity, tag, category} = props;
  return (
    <ProjectItemWrapper>
      <Link to={`/projetos/${id}`}>
      <img src={`/src/assets/projects/${image}.jpg`} alt="Screenshot do projeto" />
      <ProjectDescriptionWrapper>
        <h3>{activity}</h3>
        <TagWrapper>
          <Tag color={getCategoryColor(category)}>{getCategoryLabel(category)}</Tag>
        </TagWrapper>
      </ProjectDescriptionWrapper>
    </Link>
    </ProjectItemWrapper>
  )
}