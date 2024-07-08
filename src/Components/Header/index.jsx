/* eslint-disable no-unused-vars */
import styles from './Header.module.css';
import { useState, useEffect } from 'react';
import BurgButton from './SubComponents/BurgButton';
import NavLinks from './SubComponents/NavLinks';
import Logo from './SubComponents/Logo';
import { ToggleNavbar } from '../../utils/ToggleNavbar';
import HeaderScrollEffect from '../../utils/HeaderScrollEffect';

export default function Header() {
  const [isActive, setIsActive] = useState(false);
  const toggleNavbar = ToggleNavbar({ setIsActive, isActive });
  const [isVisible, setIsVisible] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(0);

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
