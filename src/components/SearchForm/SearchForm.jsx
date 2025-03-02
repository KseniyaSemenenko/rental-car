import { useDispatch, useSelector } from 'react-redux';
import Button from '../Button/Button';
import css from './SearchForm.module.css';
import { Formik, Form, Field } from 'formik';
import { useEffect } from 'react';
import { selectBrands } from '../../redux/catalog/selectors';
import FieldSelect from '../FieldSelect/FieldSelect';
import { fetchBrands } from '../../redux/catalog/operations';
import { setFilters } from '../../redux/filters/slice';

const initialValues = {
  brand: '',
  rentalPrice: '',
  minMileage: '',
  maxMileage: '',
};

const generatePriceRange = (start, end, step) => {
  let range = [];
  for (let i = start; i <= end; i += step) {
    range.push(i);
  }
  return range;
};

const priceRange = generatePriceRange(30, 200, 10);

export default function SearchForm() {
  const dispatch = useDispatch();
  const brands = useSelector(selectBrands);

  useEffect(() => {
    dispatch(fetchBrands());
  }, [dispatch]);

  const handleSubmit = (values, actions) => {
    dispatch(setFilters(values));
    actions.resetForm();
  };

  return (
    <div className={css.searchFormContainer}>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        {() => (
          <Form className={css.formWrapper}>
            <div>
              <label className={css.label}>Car brand</label>
              <Field
                name="brand"
                className={css.formField}
                component={FieldSelect}
                options={brands}
                placeholder="Choose a brand"
              />
            </div>
            <div>
              <label className={css.label}>Price/ 1 hour</label>
              <Field
                name="rentalPrice"
                className={css.formField}
                component={FieldSelect}
                options={priceRange}
                placeholder="Choose a price"
              />
            </div>
            <div>
              <label className={css.label}>Car mileage / km</label>
              <div className={css.mileageBlock}>
                <Field
                  type="text"
                  name="minMileage"
                  placeholder="From"
                  className={css.formFieldMile}
                />
                <Field
                  type="text"
                  name="maxMileage"
                  placeholder="To"
                  className={`${css.formFieldMile} ${css.right}`}
                />
              </div>
            </div>
            <Button text="Search" variant="search" type="submit" />
          </Form>
        )}
      </Formik>
    </div>
  );
}
