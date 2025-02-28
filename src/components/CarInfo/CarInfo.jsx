import { Icon } from '../Icon/Icon';
import css from './CarInfo.module.css';

export default function CarInfo({ carDetails }) {
  const {
    rentalConditions,
    accessories,
    functionalities,
    year,
    type,
    fuelConsumption,
    engineSize,
  } = carDetails;

  return (
    <div>
      <div className={css.wrapperInfo}>
        <h2 className={css.wrapperName}>Rental Conditions: </h2>
        <ul>
          {rentalConditions.map((item, index) => (
            <li key={index} className={css.listInfoItem}>
              <Icon id="icon-done" />
              <p>{item}</p>
            </li>
          ))}
        </ul>
      </div>
      <div className={css.wrapperInfo}>
        <h2 className={css.wrapperName}>Car Specifications:</h2>
        <ul>
          <li className={css.listInfoItem}>
            <Icon id="icon-year" />
            <p>Year: {year}</p>
          </li>
          <li className={css.listInfoItem}>
            <Icon id="icon-type-car" />
            <p>Type: {type}</p>
          </li>
          <li className={css.listInfoItem}>
            <Icon id="icon-fuel" />
            <p>Fuel Consumption: {fuelConsumption}</p>
          </li>
          <li className={css.listInfoItem}>
            <Icon id="icon-engine" />
            <p>Engine Size: {engineSize}</p>
          </li>
        </ul>
      </div>
      <div>
        <h2 className={css.wrapperName}>Accessories and functionalities:</h2>
        <ul>
          {[...accessories, ...functionalities].map((item, index) => (
            <li key={index} className={css.listInfoItem}>
              <Icon id="icon-done" />
              <p>{item}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
