import { useSelector } from 'react-redux';
import Card from '../Card/Card';
import { selectCars } from '../../redux/catalog/selectors';
// import css from './CatalogCards.module.css';

export default function CatalogCards() {
  const allCars = useSelector(selectCars);

  return (
    <ul>
      {allCars.length > 0 &&
        allCars.map(car => (
          <li key={car.id}>
            <Card car={car} />
          </li>
        ))}
    </ul>
  );
}
