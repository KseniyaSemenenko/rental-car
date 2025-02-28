import Button from '../../components/Button/Button';
import CatalogCards from '../../components/CatalogCards/CatalogCards';
import { useEffect } from 'react';
import { fetchAllCars } from '../../redux/catalog/operations';
import { useDispatch } from 'react-redux';
import css from './CatalogPage.module.css';

export default function CatalogPage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllCars());
  }, [dispatch]);

  return (
    <div className={css.catalogWrapper}>
      <Button text="Search" variant="search" />
      <CatalogCards />
      <Button text="Load more" variant="loadMore" />
    </div>
  );
}
