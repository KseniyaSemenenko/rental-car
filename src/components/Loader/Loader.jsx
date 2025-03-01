import { BeatLoader } from 'react-spinners';
import css from './Loader.module.css';
export const Loader = () => {
  return (
      <div className={css.loaderWrapper}>
          <div className={css.loaderContainer}>
      <BeatLoader color="#0b44cd" />;
    </div></div>
  );
};
