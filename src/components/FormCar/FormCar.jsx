import Button from '../Button/Button';
import css from './FormCar.module.css';
import { Formik, Form, Field, ErrorMessage } from 'formik';

import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { RentalCarSchema } from '../../validation/schemas';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const initialValues = {
  name: '',
  email: '',
  date: null,
  comment: '',
};

export default function FormCar() {
  const handleSubmit = (values, actions) => {
    console.log(values);
    toast.success('Car successfully rented!');
    actions.resetForm();
  };

  return (
    <div className={css.formContainer}>
      <h2 className={css.formName}>Book your car now</h2>
      <p className={css.formSubname}>
        Stay connected! We are always ready to help you.
      </p>
      <Formik
        initialValues={initialValues}
        validationSchema={RentalCarSchema}
        onSubmit={handleSubmit}
      >
        {({ setFieldValue, values }) => (
          <Form className={css.formWrapper}>
            <Field
              type="text"
              name="name"
              className={css.formField}
              placeholder="Name*"
            />
            <ErrorMessage className={css.error} name="name" component="span" />
            <Field
              type="email"
              name="email"
              className={css.formField}
              placeholder="Email*"
            />
            <ErrorMessage className={css.error} name="email" component="span" />

            <DatePicker
              selected={values.date}
              onChange={date => setFieldValue('date', date)}
              dateFormat="dd-MM-yyyy"
              className={css.formField}
              placeholderText="Booking date"
            />
            <Field
              as="textarea"
              rows="2"
              name="comment"
              placeholder="Comment"
              className={css.formField}
              style={{ resize: 'none', marginBottom: '8px' }}
            />
            <Button type="submit" text="Send" variant="send" />
          </Form>
        )}
      </Formik>
    </div>
  );
}
