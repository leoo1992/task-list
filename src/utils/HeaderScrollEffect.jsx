import { useEffect } from 'react';

export default function HeaderScrollEffect({
  prevScrollPos,
  setPrevScrollPos,
  setIsVisible,
}) {
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      const isVisible = prevScrollPos > currentScrollPos;

      setPrevScrollPos(currentScrollPos);
      setIsVisible(isVisible);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [prevScrollPos]);
  return null;
}
