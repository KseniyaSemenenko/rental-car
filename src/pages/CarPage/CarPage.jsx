import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCarProfile } from '../../redux/catalog/operations';
import { useParams } from 'react-router-dom';

import { selectCarProfile } from '../../redux/catalog/selectors';
import CarProfile from '../../components/CarProfile/CarProfile';

import css from './CarPage.module.css';
import CarInfo from '../../components/CarInfo/CarInfo';
import FormCar from '../../components/FormCar/FormCar';

export default function CarPage() {
  const carProfile = useSelector(selectCarProfile);

  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCarProfile(id));
  }, [dispatch, id]);

  if (!carProfile) return <p>Loading...</p>;

  return (
    <div className={css.containerCarPage}>
      <div>
        <img className={css.imgCar} src={carProfile.img} alt="" />
        <FormCar />
      </div>
      <div className={css.textContainer}>
        <CarProfile carDetails={carProfile} />
        <CarInfo carDetails={carProfile} />
      </div>
    </div>
  );
}
