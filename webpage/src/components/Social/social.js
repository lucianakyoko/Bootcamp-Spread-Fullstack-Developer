import {BsLinkedin, BsGithub} from 'react-icons/bs';

const social = [
  {
    "id":"link01",
    "site": "LinkedIn",
    "link": "https://lucianakyoko.com",
    "icon": "LK"
  },
  {
    "id":"link02",
    "site": "LinkedIn",
    "link": "https://www.linkedin.com/in/lucianakyoko",
    "icon": <BsLinkedin />
  },
  {
    "id":"link03",
    "site": "GitHub",
    "link": "https://github.com/lucianakyoko",
    "icon": <BsGithub />
  },

]


export const getSocial = () => {
  return social;
}