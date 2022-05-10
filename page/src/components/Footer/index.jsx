import { BsSuitHeartFill, BsLinkedin, BsGithub } from 'react-icons/bs'
import {
  FooterWrapper,
  FooterText,
  IconsWrapper,
  Icon
} from './style';


export function Footer() {
  const icons = [
    {
      id: 'icons1',
      site: 'LinkedIn',
      href: 'https://www.linkedin.com/in/lucianakyoko',
      icon: <BsLinkedin />
    },
    {
      id: 'icons2',
      site: 'GiHub',
      href: 'https://github.com/lucianakyoko',
      icon: <BsGithub />
    }
  ]
  return(
    <FooterWrapper>
      <FooterText>
        Desined and developed with <BsSuitHeartFill /> by 
        <a 
          href='https://lucianakyoko.com'
          rel="noopener noreferrer" 
          target="_blank"
        >
          Luciana Kyoko
        </a>
      </FooterText>
 
      <IconsWrapper>
        {icons.map(item => (
          <li key={item.id}>
            <Icon 
              href={item.href} 
              rel="noopener noreferrer" 
              target="_blank"
            >
              {item.icon}
            </Icon>
          </li>
        ))}
      </IconsWrapper>
    </FooterWrapper>
  );
}