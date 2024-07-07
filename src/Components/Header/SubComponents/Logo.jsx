/* eslint-disable no-unused-vars */
import styles from '../Header.module.css';
import { NavLink } from 'react-router-dom';

export default function Logo({ toggleNavbar }) {
  return (
    <div className={styles.logo}>
      <NavLink
        to="/"
        onClick={toggleNavbar}
        className={styles.logo}
      >
        Task App
      </NavLink>
    </div>
  );
}
