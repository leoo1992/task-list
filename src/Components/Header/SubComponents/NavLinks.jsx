/* eslint-disable no-unused-vars */
import styles from '../Header.module.css';
import { NavLink } from 'react-router-dom';
import { RxPlusCircled, RxHome } from 'react-icons/rx';

export default function NavLinks({ toggleNavbar, isActive }) {
  return (
    <div className={`${styles.navLinks} ${isActive ? styles.active : ''}`}>
      <NavLink
        to="/"
        onClick={toggleNavbar}
        className={`${styles.links}`}
      >
        <RxHome
          size={18}
          color="white"
        />
        Home
      </NavLink>
      <NavLink
        to="/task"
        onClick={toggleNavbar}
        className={`${styles.links}`}
      >
        <RxPlusCircled
          size={20}
          color="white"
        />
        Add Task
      </NavLink>
    </div>
  );
}
