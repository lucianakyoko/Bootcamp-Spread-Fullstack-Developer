import { useState, useEffect } from 'react';
import bootcamps from '../../../datas/datas';

import { ProjectItem } from './ProjectItem'
import { ProjectListWrapper } from './style';


export function ProjectList({ categoryfilter}) {
  const [list, setList] = useState(bootcamps);

  
  useEffect(() => {
    const newList = bootcamps.filter(item => item.category === categoryfilter);
    setList(newList);
      
  }, [categoryfilter]);

  useEffect(() => {
    return setList(bootcamps)
  },[]);

  return(
    <div>
      <ProjectListWrapper>
         {[...list].reverse().map((item) => (
           <ProjectItem key={item.id} {...item}/>
         ))}
      </ProjectListWrapper>
    </div>
  );
} 



