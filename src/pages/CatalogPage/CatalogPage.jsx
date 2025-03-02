import CatalogCards from '../../components/CatalogCards/CatalogCards';
import { useEffect } from 'react';
import { fetchAllCars } from '../../redux/catalog/operations';
import { useDispatch, useSelector } from 'react-redux';
import css from './CatalogPage.module.css';
import { selectError, selectLoading } from '../../redux/catalog/selectors';
import { Loader } from '../../components/Loader/Loader';
import SearchForm from '../../components/SearchForm/SearchForm';

export default function CatalogPage() {
  const dispatch = useDispatch();
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchAllCars());
  }, [dispatch]);

  return (
    <div className={css.catalogWrapper}>
      <SearchForm />
      {loading && <Loader />}
      {error && <p>{error}</p>}
      <CatalogCards />
    </div>
  );
}
