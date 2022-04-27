import React from 'react';
import Hero from '../Home/Hero';

import Social from '../../components/Social';
import Timeline from '../Home/Timeline';

import { PageWrapper, SocialBox} from './style';
import { Title } from '../../styles/ui';

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