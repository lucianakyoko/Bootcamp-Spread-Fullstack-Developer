import React, { useState } from 'react';
import { Subtitle } from '../../../styles/ui';
import Filters from './Filter';
import { Container, Header } from './style';

const Projects = () => {
  const [filter, setFilter] = useState(null);

  return (
    <Container>
      <Header>
        <Subtitle>Projetos</Subtitle>
        <p>desenvolvidos durante o Bootcamp</p>
      </Header>

      <Filters filter={filter} setFilter={setFilter}/>
    </Container>
  )
}

export default Projects;