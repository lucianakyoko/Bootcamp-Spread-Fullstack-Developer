import React from 'react';
import Hero from './Hero';

import Social from '../../Social';
import Timeline from './Timeline';

import { PageWrapper, SocialBox} from './style';
import { Title } from '../../../styles/ui';

const Home = () => {
  return (
    <PageWrapper>
      <Hero />
      <SocialBox>
        <Title>Você pode me encontrar aqui:</Title>
        <Social />
      </SocialBox>
      <Timeline />

    </PageWrapper>
  )
}

export default Home