import { getAllByLabelText } from '@testing-library/react';
import React from 'react';
import projectlist from '../../../../datas/datas.json';
import { getTags } from '../../../../datas/tags';

import { 
  ProjectsWapper, 
  ProjectItemWrapper,
  ProjectInfoWrapper,
  TagWrapper,
  Tag
} from './style';



const ProjectList = () => {
  const labels = getTags();
  
  function getLabel(projectTag) {
    const label = labels.find(item => item.id === projectTag)
    return label.label;
  }
  
  function getLabelColor(projectTag) {
    const color = labels.find(item => item.id === projectTag);
    return color.color;
  }

  return (
    <ProjectsWapper>
      {projectlist.map(project => (
        <ProjectItemWrapper key={project.id}>
          <img src={`./images/${project.image}.jpg`} alt="projeto 1" />
          <ProjectInfoWrapper>
            <h3>{project.activity}</h3>
            <TagWrapper>
              <Tag color={'red'}>
                {getLabel(project.tags[0])}
              </Tag>
              <Tag color={getLabelColor(project.tags[1])}>
                {getLabel(project.tags[1])}
              </Tag>
            </TagWrapper>
          </ProjectInfoWrapper>
        </ProjectItemWrapper>
      ))}
    </ProjectsWapper>
  )
}

export default ProjectList