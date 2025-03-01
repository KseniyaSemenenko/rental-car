import { useDispatch, useSelector } from 'react-redux';
import Button from '../Button/Button';
import css from './SearchForm.module.css';
import { Formik, Form, Field } from 'formik';
import { useEffect, useId } from 'react';
import { selectBrands } from '../../redux/catalog/selectors';
import FieldSelect from '../FieldSelect/FieldSelect';
import { fetchBrands } from '../../redux/catalog/operations';

const initialValues = {
  brand: 'Choose a brand',
  price: 'Choose a price',
  mileageFrom: 'From ',
  mileageTo: 'To ',
};

export default function SearchForm() {
  const brandFieldId = useId();
  const priceFieldId = useId();
  const mileageFieldId = useId();

  const dispatch = useDispatch();
  const brands = useSelector(selectBrands);

  useEffect(() => {
    dispatch(fetchBrands());
  }, [dispatch]);

  const handleSubmit = (values, actions) => {
    console.log(values);
    actions.resetForm();
  };

  return (
    <div className={css.searchFormContainer}>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <Form className={css.formWrapper}>
          <div>
            <label htmlFor={brandFieldId} className={css.label}>
              Car brand
            </label>
            <Field
              name="brand"
              id={brandFieldId}
              className={css.formField}
              component={FieldSelect}
              options={brands}
              // placeholder="Choose a brand"
            />
          </div>
          <div>
            <label htmlFor={priceFieldId} className={css.label}>
              Price/ 1 hour
            </label>
            <Field
              name="price"
              id={priceFieldId}
              className={css.formField}
              component={FieldSelect}
              options={[10, 20, 30, 40, 50]}
              // placeholder="Choose a price"
            />
          </div>
          <div>
            <label htmlFor={mileageFieldId} className={css.label}>
              Car mileage / km
            </label>
            <div className={css.mileageBlock}>
              <Field
                type="text"
                id={mileageFieldId}
                name="mileageFrom"
                // placeholder="From"
                className={css.formFieldMile}
              />
              <Field
                type="text"
                id={mileageFieldId}
                name="mileageTo"
                // placeholder="To"
                className={`${css.formFieldMile} ${css.right}`}
              />
            </div>
          </div>
          <Button text="Search" variant="search" />
        </Form>
      </Formik>
    </div>
  );
}
