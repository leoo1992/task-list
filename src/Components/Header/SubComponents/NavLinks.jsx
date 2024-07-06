/* eslint-disable no-unused-vars */
import styles from '../Header.module.css';
import { NavLink } from 'react-router-dom';
import { RxPlusCircled } from 'react-icons/rx';

export default function NavLinks({ toggleNavbar, isActive }) {
  return (
    <div className={`${styles.navLinks} ${isActive ? styles.active : ''}`}>
      <NavLink
        to="/task"
        onClick={toggleNavbar}
        className={styles.textDecoration}
      >
        <button className={styles.btn}>
          <RxPlusCircled size={25} />
          <span className={styles.textButton}>Add Task</span>
        </button>
      </NavLink>
    </div>
  );
}
