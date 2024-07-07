/* eslint-disable no-unused-vars */
import styles from './Header.module.css';
import { useState } from 'react';
import BurgButton from './SubComponents/BurgButton';
import NavLinks from './SubComponents/NavLinks';
import Logo from './SubComponents/Logo';
import { ToggleNavbar } from '../../utils/ToggleNavbar';

export default function Header() {
  const [isActive, setIsActive] = useState(false);
  const toggleNavbar = ToggleNavbar({ setIsActive, isActive });

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
