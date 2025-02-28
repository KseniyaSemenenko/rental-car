import { Icon } from '../Icon/Icon';
import css from './CarProfile.module.css';

export default function CarProfile({ carDetails }) {
  const { brand, model, year, rentalPrice, address, mileage, description } =
    carDetails;

  const formatAddress = address.split(', ').slice(-2).join(', ');
  const formatMileage = `${mileage
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ' ')} km`;

  return (
    <div className={css.wrapper}>
      <div className={css.nameId}>
        <h1 className={css.brandCar}>
          {brand}&nbsp;
          {model}, {year}
        </h1>
        <p className={css.idCar}>Id: 9582</p>
      </div>
      <div className={css.nameId}>
        <p>
          <Icon id="icon-location" />
          {formatAddress}
        </p>
        <p>Mileage: {formatMileage}</p>
      </div>
      <p className={css.rentalPrice}>${rentalPrice}</p>
      <p>{description}</p>
    </div>
  );
}
