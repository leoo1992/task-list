/* eslint-disable no-unused-vars */
import styles from '../Header.module.css';
import { RxHamburgerMenu } from 'react-icons/rx';

export default function BurgButton({ toggleNavbar }) {
  return (
    <button
      className={styles.burger}
      onClick={toggleNavbar}
    >
      <RxHamburgerMenu
        size={18}
        color="white"
      />
    </button>
  );
}
