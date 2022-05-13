import { useState } from "react";
import { H2 } from "../../styles/ui";
import { Filter } from "./Filter";
import { ProjectList } from './ProjectList';
import { ProjectSection, ProjectHeader } from './style';

export function Projects() {
  const [ categoryfilter, setCategoryfilter] = useState('');
  const [ tagfilter, setTagFilter] = useState('');
  return (
    <ProjectSection>
      <ProjectHeader>
        <H2>Projects</H2>
        <p>desenvolvidos durante o bootcamp</p>
      </ProjectHeader>

      <Filter 
        setTagFilter={setTagFilter} 
        setCategoryfilter={setCategoryfilter}
      />
      <ProjectList tagfilter={tagfilter} categoryfilter={categoryfilter}/>
    </ProjectSection>
  );
}