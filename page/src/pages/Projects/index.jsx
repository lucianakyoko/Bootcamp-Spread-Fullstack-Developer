import bootcamps from "../../datas/datas";
import { H2 } from "../../styles/ui";
import { Filter } from "./Filter";
import { ProjectList } from './ProjectList';
import { ProjectSection, ProjectHeader } from './style';

export function Projects() {
  return (
    <ProjectSection>
      <ProjectHeader>
        <H2>Projects</H2>
        <p>desenvolvidos durante o bootcamp</p>
      </ProjectHeader>

      <Filter />
      <ProjectList bootcamps={bootcamps}/>
      
    </ProjectSection>
  );
}