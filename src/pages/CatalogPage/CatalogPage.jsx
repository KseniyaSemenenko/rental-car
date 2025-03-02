import CatalogCards from '../../components/CatalogCards/CatalogCards';
import { useEffect } from 'react';
import {
  fetchAllCars,
  loadMoreCars,
  setCurrentPage,
} from '../../redux/catalog/operations';
import { useDispatch, useSelector } from 'react-redux';
import css from './CatalogPage.module.css';
import {
  selectCurrentCards,
  selectError,
  selectLoading,
} from '../../redux/catalog/selectors';
import { Loader } from '../../components/Loader/Loader';
import SearchForm from '../../components/SearchForm/SearchForm';
import { selectFilters } from '../../redux/filters/selectors';

export default function CatalogPage() {
  const dispatch = useDispatch();
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);
  const filters = useSelector(selectFilters);
  const currentCards = useSelector(selectCurrentCards);

  useEffect(() => {
    dispatch(fetchAllCars({ page: 1, limit: currentCards, ...filters }));
  }, [dispatch, filters, currentCards]);

  const handleLoadMore = () => {
    dispatch((dispatch, getState) => {
      const state = getState();
      const nextPage = state.cars.currentPage + 1;
      const filters = state.filters;

      dispatch(setCurrentPage(nextPage));
      dispatch(
        loadMoreCars({
          page: nextPage,
          limit: state.cars.currentCards,
          ...filters,
        })
      );
    });
  };

  return (
    <div className={css.catalogWrapper}>
      <SearchForm />
      {loading && <Loader />}
      {error && <p>{error}</p>}
      <CatalogCards handleLoadMore={handleLoadMore} />
    </div>
  );
}
