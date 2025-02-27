import Button from '../Button/Button';
import css from './Hero.module.css';

export default function Hero() {
  return (
    <div className={css.heroContainer}>
      <h1 className={css.title}>Find your perfect rental car</h1>
      <h2 className={css.subTitle}>
        Reliable and budget-friendly rentals for any journey
      </h2>
      <Button text="View Catalog" />
    </div>
  );
}
