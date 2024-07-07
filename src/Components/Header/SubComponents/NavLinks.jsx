/* eslint-disable no-unused-vars */
import styles from '../Header.module.css';
import { NavLink, useLocation } from 'react-router-dom';
import { RxPlusCircled } from 'react-icons/rx';

export default function NavLinks({ toggleNavbar, isActive }) {
  const location = useLocation();
  const isTaskRoute = location.pathname.includes('task');

  return (
    <div className={`${styles.navLinks} ${isActive ? styles.active : ''}`}>
      <NavLink
        to={isTaskRoute ? '/' : '/task'}
        onClick={toggleNavbar}
        className={styles.textDecoration}
      >
        <button className={styles.btn}>
          {!isTaskRoute && <RxPlusCircled size={25} />}
          <span className={styles.textButton}>
            {isTaskRoute ? 'Voltar' : 'Nova Tarefa'}
          </span>
        </button>
      </NavLink>
    </div>
  );
}
