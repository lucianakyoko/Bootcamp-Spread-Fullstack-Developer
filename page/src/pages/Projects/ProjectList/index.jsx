import { getTags } from '../../../datas/tags';

import {
  ProjectListWrapper,
  ProjectItemWrapper,
  ProjectDescriptionWrapper,
  TagWrapper,
  Tag
} from './style';

export function ProjectList({ bootcamps }) {
  const getTagColor = (tagName) => {
    const tagColor = getTags().find(tag => tag.id === tagName);
    return tagColor.color;
  }

  const getTagLabel = (tagName) => {
    const tag = getTags().find(item => item.id === tagName);
    return tag.label;
  }

  return(
    <div>
      <ProjectListWrapper>
         {[...bootcamps].reverse().map(item => (
           <ProjectItemWrapper key={item.id}>
            <img src={`./src/assets/projects/${item.image}.jpg`} alt="" />
            <ProjectDescriptionWrapper>
              <h3>{item.activity}</h3>
              <TagWrapper>
                <Tag color={getTagColor(item.tags[0])}>{getTagLabel(item.tags[0])}</Tag>
                <Tag color={getTagColor(item.tags[1])}>{getTagLabel(item.tags[1])}</Tag>
              </TagWrapper>
            </ProjectDescriptionWrapper>
           </ProjectItemWrapper>
         ))}
      </ProjectListWrapper>
    </div>
  );
} 

