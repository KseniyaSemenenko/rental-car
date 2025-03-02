import { Link } from 'react-router-dom';
import Button from '../Button/Button';
import css from './Card.module.css';
import { Icon } from '../Icon/Icon';
import { useDispatch } from 'react-redux';
import { addToFavorite, removeFromFavorite } from '../../redux/favorite/slice';

export default function Card({ car, favoriteCars }) {
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

  const toggleFavorite = () => {
    if (favoriteCars.includes(id)) {
      dispatch(removeFromFavorite(id));
    } else {
      dispatch(addToFavorite(id));
    }
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
