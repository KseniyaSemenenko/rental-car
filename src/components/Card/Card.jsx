import { Link } from 'react-router-dom';
import Button from '../Button/Button';
import css from './Card.module.css';

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
  const formatAddress = address.split(', ').slice(-2).join(' | ');
  const formatMileage = `${mileage
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ' ')} km`;

  return (
    <div>
      <img src={img} alt={description} className={css.carImg} />
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
