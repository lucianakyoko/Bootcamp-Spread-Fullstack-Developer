import React from 'react';
import { Title } from '../../../../styles/ui';
import {
  ActiviesWrapper, 
  ActivityWrapper, 
  LinksWrapper, 
  ActivityTitle, 
  ActivitySubtitle,
  Link
} from './style';

import { RiGithubFill, RiLinkM } from 'react-icons/ri';
import activities from '../../../datas/datas.json';


const Timeline = () => {
  return (
    <div>
      <Title>Timeline</Title>
      
      <ActiviesWrapper>
        {activities.map(item => (
          <ActivityWrapper key={item.id}>
            <ActivityTitle>{item.modulo}</ActivityTitle>
            <ActivitySubtitle>{item.activity}</ActivitySubtitle>
            <LinksWrapper>
              <Link href={item.github}>
                <RiGithubFill />
                código fonte
              </Link>
              <Link href={item.page}>
                <RiLinkM />
                link
              </Link>
            </LinksWrapper>
          </ActivityWrapper>
        ))}
      </ActiviesWrapper>
    </div>
  )
}

export default Timeline;