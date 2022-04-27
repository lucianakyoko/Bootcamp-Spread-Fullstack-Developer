import React from 'react';
import { Title } from '../../../styles/ui';
import {
  ActiviesWrapper, 
  ActivityWrapper, 
  ActivityTitle, 
  ActivitySubtitle,
} from './style';

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
          </ActivityWrapper>
        ))}
      </ActiviesWrapper>
    </div>
  )
}

export default Timeline;