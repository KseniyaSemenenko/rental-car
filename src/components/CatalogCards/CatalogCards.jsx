import { useSelector } from 'react-redux';
import Card from '../Card/Card';
import { selectCars, selectTotalCars } from '../../redux/catalog/selectors';
import css from './CatalogCards.module.css';
import Button from '../Button/Button';
import { selectFavoriteCars } from '../../redux/favorite/selectors';

export default function CatalogCards({ handleLoadMore }) {
  const allCars = useSelector(selectCars);
  const favoriteCars = useSelector(selectFavoriteCars);
  const totalCars = useSelector(selectTotalCars);

  const isLoadMoreVisible = allCars.length < totalCars;

  return (
    <>
      <ul className={css.catalogList}>
        {allCars.length > 0 &&
          allCars.map(car => (
            <li key={car.id} className={css.catalogListItem}>
              <Card car={car} favoriteCars={favoriteCars} />
            </li>
          ))}
      </ul>
      {isLoadMoreVisible && (
        <Button onClick={handleLoadMore} text="Load more" variant="loadMore" />
      )}
    </>
  );
}
