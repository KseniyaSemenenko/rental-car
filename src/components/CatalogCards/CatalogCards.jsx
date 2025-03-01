import { useSelector } from 'react-redux';
import Card from '../Card/Card';
import { selectCars } from '../../redux/catalog/selectors';
import css from './CatalogCards.module.css';
import Button from '../Button/Button';

export default function CatalogCards() {
  const allCars = useSelector(selectCars);

  return (
    <>
      <ul className={css.catalogList}>
        {allCars.length > 0 &&
          allCars.map(car => (
            <li key={car.id} className={css.catalogListItem}>
              <Card car={car} />
            </li>
          ))}
      </ul>
      <Button text="Load more" variant="loadMore" />
    </>
  );
}
