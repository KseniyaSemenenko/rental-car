import { Link, NavLink } from 'react-router-dom';
import css from './Header.module.css';
import { Icon } from '../Icon/Icon';
import clsx from 'clsx';

const buildCssClasses = ({ isActive }) =>
  clsx(css.link, isActive && css.active);

export default function Header() {
  return (
    <div className={css.header}>
      <Link className={css.logo} to="/">
        <Icon id="icon-logo" width={102} />
      </Link>
      <div className={css.nav}>
        <NavLink className={buildCssClasses} to="/">
          Home
        </NavLink>
        <NavLink className={buildCssClasses} to="/catalog">
          Catalog
        </NavLink>
      </div>
    </div>
  );
}
