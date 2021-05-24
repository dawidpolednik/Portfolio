import axios from 'axios';
import { Form, Formik, FormikProps } from 'formik';
import React, { FC } from 'react';
import * as Yup from 'yup';

import { DoubleAngle } from '../DoubleAngle/DoubleAngle';
import styles from './Contact.module.scss';
import { Error } from './Errors';
import Input from './Input';
import TextArea from './TextArea';

const errorMessages = [
  'To pole jest wymagane. Minimalna liczba znaków: 5',
  'Podany adres E-mail jest nieprawidłowy',
  'To pole jest wymagane. Minimalna liczba znaków: 10',
];

const SEND_DATA_URL = 'https://server-nodemailer.herokuapp.com/send';

const Contact: FC = () => {
  const initialValues: FormMailerValues = {
    name: '',
    email: '',
    message: '',
  };

  return (
    <section className={styles.container} id="contact">
      <div className={styles.contactHeader}>
        <h2 className={styles.contactTitle}>Kontakt</h2>
      </div>
      <div className={styles.contactBackground}>
        <div className={styles.contactSection}>
          <Formik
            initialValues={initialValues}
            validationSchema={Yup.object().shape({
              name: Yup.string().min(5).required(),
              email: Yup.string().email().required(),
              message: Yup.string().min(10).required(),
            })}
            onSubmit={async (
              values,
              { resetForm, setStatus, setErrors, setSubmitting }
            ) => {
              setStatus({ success: false });
              try {
                await axios.post<FormMailerValues>(SEND_DATA_URL, values);
                resetForm();
                setStatus({ success: 'Wiadomość została wysłana' });
              } catch (error) {
                setStatus({ error: 'Błąd podczas wysyłania wiadomości...' });
                setErrors(error);
              } finally {
                setSubmitting(false);
              }
            }}
            render={({
              errors,
              touched,
              values,
              handleChange,
              status,
            }: FormikProps<FormMailerValues>) => (
              <Form className={styles.contactForm}>
                {errors.name && (
                  <Error
                    touched={!!touched.name}
                    name={errors.name}
                    content={errorMessages[0]}
                  />
                )}
                <Input
                  name="name"
                  placeholder="Podaj imię i nazwisko"
                  value={values.name}
                  onChange={handleChange}
                />
                {errors.email && (
                  <Error
                    touched={!!touched.email}
                    name={errors.email}
                    content={errorMessages[1]}
                  />
                )}
                <Input
                  name="email"
                  placeholder="Wprowadź adres e-mail"
                  value={values.email}
                  onChange={handleChange}
                />
                {errors.message && (
                  <Error
                    touched={!!touched.message}
                    name={errors.message}
                    content={errorMessages[2]}
                  />
                )}

                <TextArea
                  name="message"
                  placeholder="Treść wiadomości..."
                  value={values.message}
                  onChange={handleChange}
                />
                <div className={styles.buttonsContainer}>
                  <input
                    className={styles.formButton}
                    type="reset"
                    value="Wyczyść formularz"
                  />
                  <input
                    className={styles.formButton}
                    type="submit"
                    value="Wyślij"
                  />
                </div>
                {status && (
                  <div className={styles.confirmationContainer}>
                    <p
                      className={
                        (status.success && styles.confirmationMessage) ||
                        (status.error && styles.errorMessage)
                      }
                    >
                      {status.success ? status.success : status.error}
                    </p>
                  </div>
                )}
              </Form>
            )}
          />
        </div>
        <DoubleAngle onUp={true} subPage="projects" />
      </div>
    </section>
  );
};

export default Contact;
