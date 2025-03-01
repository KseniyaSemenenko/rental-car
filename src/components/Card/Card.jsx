import { Link } from 'react-router-dom';
import Button from '../Button/Button';
import css from './Card.module.css';
import { Icon } from '../Icon/Icon';
import { useDispatch, useSelector } from 'react-redux';
import { selectFavoriteCars } from '../../redux/favorite/selectors';
import { addToFavorite, removeFromFavorite } from '../../redux/favorite/slice';

export default function Card({ car }) {
  const {
    brand,
    model,
    year,
    rentalPrice,
    address,
    rentalCompany,
    type,
    mileage,
    img,
    description,
    id,
  } = car;

  const dispatch = useDispatch();
  const favoriteCars = useSelector(selectFavoriteCars);

  console.log('Favorite cars from Redux state: ', favoriteCars);

  const toggleFavorite = () => {
    console.log('Current favorites: ', favoriteCars);

    if (favoriteCars.includes(id)) {
      console.log(`Removing car with id: ${id} from favorites`);
      dispatch(removeFromFavorite(id));
    } else {
      console.log(`Adding car with id: ${id} to favorites`);
      dispatch(addToFavorite(id));
    }
    console.log(
      'Favorites in localStorage after toggle: ',
      localStorage.getItem('favoriteCars')
    );
  };

  const formatAddress = address.split(', ').slice(-2).join(' | ');
  const formatMileage = `${mileage
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ' ')} km`;

  return (
    <div className={css.wrapperCard}>
      <img src={img} alt={description} className={css.carImg} />
      <Icon
        id={favoriteCars.includes(id) ? 'icon-heart-fill' : 'icon-heart'}
        className={css.iconHeart}
        onClick={toggleFavorite}
      />
      <div className={css.brand}>
        <p>
          {brand}&nbsp;
          <span className={css.model}>{model}</span>, {year}
        </p>
        <p>${rentalPrice}</p>
      </div>
      <p className={css.details}>
        {formatAddress} | {rentalCompany} | <br />
        {type} | {formatMileage}
      </p>
      <Link to={`/catalog/${id}`}>
        <Button text="Read more" variant="readMore" />
      </Link>
    </div>
  );
}
