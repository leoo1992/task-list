/* eslint-disable no-unused-vars */
import { NavLink } from 'react-router-dom';
import styles from '../Header.module.css';

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
