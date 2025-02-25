import { NavLink } from 'react-router-dom';

export default function Header() {
  return (
    <div>
      <NavLink>
        Rental<span>Car</span>
      </NavLink>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/catalog">Catalog</NavLink>
    </div>
  );
}
