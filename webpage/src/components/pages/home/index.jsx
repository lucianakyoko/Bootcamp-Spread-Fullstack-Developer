import React from 'react';
import Hero from './Hero';
import Social from '../../Social';

import { PageWrapper} from './style';

const Home = () => {
  return (
    <PageWrapper>
      <Hero />
      <Social />
    </PageWrapper>
  )
}

export default Home