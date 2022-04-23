import React from 'react';
import { getSocial } from './social';
import { Container, SocialIconWrapper, SocialLink } from './style';

const Social = () => {
  const social = getSocial();

  return (
    <Container>
      <SocialIconWrapper>
        {social.map(item => (
          <li key={item.id}>
            <SocialLink rel="noopener noreferrer" target="_blank">
              {item.icon}
            </SocialLink>
          </li>
        ))}

      </SocialIconWrapper>
    </Container>
  )
}

export default Social;