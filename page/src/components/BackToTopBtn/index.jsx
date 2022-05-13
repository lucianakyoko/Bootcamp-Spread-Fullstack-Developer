import { useEffect, useState } from 'react';
import { BsArrowUpCircleFill } from 'react-icons/bs';
import { Button } from './style';

export function BackToTopBtn() {
  const [backToTopBtn, setBackToTopBtn] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if(window.scrollY > 10 ) {
        setBackToTopBtn(true);
      } else {
        setBackToTopBtn(false);
      }
    })
  }, []);

  const scrollUp = () => {
    window.scroll({
      top: 0,
      behavior: "smooth"
    })
  }
  return (
    <>
      { 
      backToTopBtn && (
        <Button onClick={scrollUp}>
          <BsArrowUpCircleFill />
        </Button>
      )
      }
    </>
  );
}