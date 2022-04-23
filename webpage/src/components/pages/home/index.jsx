import React from 'react';
import Hero from './Hero';
import Social from '../../Social';
import Timeline from './Timeline';

import { PageWrapper} from './style';

const Home = () => {
  return (
    <PageWrapper>
      <Hero />
      <Social />
      <Timeline />
    </PageWrapper>
  )
}

export default Home