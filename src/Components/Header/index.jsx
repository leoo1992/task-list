/* eslint-disable no-unused-vars */
import styles from './Header.module.css';
import BurgButton from './SubComponents/BurgButton';
import NavLinks from './SubComponents/NavLinks';
import Logo from './SubComponents/Logo';
import HeaderScrollEffect from '../../utils/HeaderScrollEffect';
import { useHeaderState } from '../../Hooks/useHeaderState';

export default function Header() {
  const {
    isActive,
    toggleNavbar,
    isVisible,
    setIsVisible,
    prevScrollPos,
    setPrevScrollPos,
  } = useHeaderState();

  return (
    <>
      <HeaderScrollEffect
        prevScrollPos={prevScrollPos}
        setPrevScrollPos={setPrevScrollPos}
        setIsVisible={setIsVisible}
      />
      <nav className={`${styles.navbar} ${isVisible ? '' : styles.hidden}`}>
        <Logo />
        <NavLinks
          toggleNavbar={toggleNavbar}
          isActive={isActive}
        />
        <BurgButton toggleNavbar={toggleNavbar} />
      </nav>
    </>
  );
}
