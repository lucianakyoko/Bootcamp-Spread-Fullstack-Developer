import {BsLinkedin, BsGithub} from 'react-icons/bs';
import { SocialWrapper, SocialParagraph, SocialListWrapper, SocialLink } from "./style";

export function Social() {
  const socialList = [
    {
      id: 'social1',
      site: 'Luciana Kyoko',
      href: 'https://lucianakyoko',
      icon: 'LK'
    },
    {
      id: 'social2',
      site: 'LinkedIn',
      href: 'https://www.linkedin.com/in/lucianakyoko',
      icon: <BsLinkedin />
    },
    {
      id: 'social3',
      site: 'GiHub',
      href: 'https://github.com/lucianakyoko',
      icon: <BsGithub />
    }
  ]

  return (
    <SocialWrapper>
      <SocialParagraph>Você pode me encontrar aqui:</SocialParagraph>
      <SocialListWrapper>
        {socialList.map(item => (
          <li key={item.id}>
            <SocialLink 
              title={`Ir para página ${item.site}`}
              href={item.href} 
              rel="noopener noreferrer" 
              target="_blank"
            >
              {item.icon}
            </SocialLink>
          </li>
        ))}
      </SocialListWrapper>
    </SocialWrapper>
  );
}