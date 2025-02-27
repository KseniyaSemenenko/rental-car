import Button from '../Button/Button';
// import css from './Card.module.css';

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
  } = car;
  const formatAddress = address.split(', ').slice(-2).join(' | ');
  const formatMileage = `${mileage
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ' ')} km`;

  return (
    <div>
      <img src={img} alt={description} />
      <p>
        {brand}
        <span>{model}</span>, {year}
      </p>
      <p>${rentalPrice}</p>
      <p>
        {formatAddress} | {rentalCompany} | <br />
        {type} | {formatMileage}
      </p>
      <Button text="Read more" variant="readMore" />
    </div>
  );
}
