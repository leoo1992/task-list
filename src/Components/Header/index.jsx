/* eslint-disable no-unused-vars */
import styles from './Header.module.css';
import { useState, startTransition } from 'react';
import BurgButton from './SubComponents/BurgButton';
import NavLinks from './SubComponents/NavLinks';
import Logo from './SubComponents/Logo';

export default function Header() {
  const [isActive, setIsActive] = useState(false);

  const toggleNavbar = () => {
    startTransition(() => {
      setIsActive(!isActive);
    });
  };

  return (
    <nav className={styles.navbar}>
      <Logo />
      <NavLinks
        toggleNavbar={toggleNavbar}
        isActive={isActive}
      />
      <BurgButton toggleNavbar={toggleNavbar} />
    </nav>
  );
}
