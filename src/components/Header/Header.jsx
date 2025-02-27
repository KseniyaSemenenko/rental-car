import { NavLink } from 'react-router-dom';
import css from './Header.module.css';
// import { ReactComponent as Logo } from '../../assets/logo.svg';

export default function Header() {
  return (
    <div className={css.header}>
      <NavLink className={css.logo} to="/">
        Logo{/* <Logo /> */}
      </NavLink>
      <div className={css.nav}>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/cars">Catalog</NavLink>
      </div>
    </div>
  );
}
