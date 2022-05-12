import { ProjectItem } from './ProjectItem'
import { ProjectListWrapper } from './style';

export function ProjectList({ bootcamps }) {
  return(
    <div>
      <ProjectListWrapper>
         {[...bootcamps].reverse().map(item => (
           <ProjectItem item={item}/>
         ))}
      </ProjectListWrapper>
    </div>
  );
} 

