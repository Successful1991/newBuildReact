import React from 'react';
import InputMask from 'react-input-mask';
import PropTypes from 'prop-types';
import { useFormik } from 'formik';
import * as yup from 'yup';
import {Button, TextField} from '@material-ui/core';
import i18next from "i18next";
import { formService } from '../../services/form.service';

import cn from 'classnames';
import css from './Form.module.scss';

const lang = 'uk';

const submitHandler = (form, values) => {
  formService.sendForm(values).then((resp) => {
  
  }).throw((err) => {
  
  });
};

export const CustomForm = () => {
  const i18n = i18next.createInstance();
  i18n.init({
    lng: lang,
    resources: {
      uk: {
        translation: {
          errors: {
            name: 'Ім\'я може містити тільки букви і тире',
            phone: '',
            email: 'Введите валидный email',
            required: 'Це поле є обов`язковим',
            network: 'Помилка з\'єднання',
            short: 'поле має містити принаймні 2 символів',
            long: 'поле має містити не більше 16 символів'
          },
          name: 'Ім’я:*',
          phone: '+38(___) ___ __ __',
          email: 'Email: *',
          message: 'Повідомлення',
          send: 'Надіслати',
          sending: 'Відправлення',
          
          successSendingTitle: 'Повідомлення надіслано',
          successSendingText: 'Дякуємо за звернення! Очікуйте на дзвінок з відділу продажів BEREG ' +
            'Residence. Бажаємо приємного дня та гарного настрою =)',
          
          failedSendingTitle: 'Сталася помилка',
          failedSendingText: 'Повідомлення не було відправлено через невідому помилку сервера.',
        },
      },
      ru: {
        translation: {
          errors: {
            name: '',
            phone: '',
            email: '',
            required: '',
            network: '',
            short: '',
            long: ''
          },
          name: '',
          phone: '+38(___) ___ __ __',
          email: 'Email: *',
          message: '',
          send: '',
          sending: '',
    
          success: '',
          successSendingTitle: '',
          successSendingText: '',
    
          failedSendingTitle: '',
          failedSendingText: '',
        },
      },
      en: {
        translation: {
          errors: {
            name: '',
            phone: '',
            email: '',
            required: '',
            network: '',
            short: '',
            long: ''
          },
          helper_name: '',
          helper_phone: '',
          helper_email: '',
    
          success: '',
          successSendingTitle: '',
          successSendingText: '',
    
          failedSendingTitle: '',
          failedSendingText: '',
        },
      }
    }
  });
  const validationSchema = yup.object({
    name: yup
      .string()
      .trim()
      .matches(/^[a-zа-я _]+$/gi, 'name')
      .required(i18n.t('errors.required'))
      .min(2, i18n.t('errors.short'))
      .max(25, i18n.t('errors.long')),
    phone: yup
      .string()
      .required(i18n.t('errors.required'))
      .min(18, i18n.t('errors.short'))
      .max(18, i18n.t('errors.long')),
    // email: yup
    //   .string()
    //   .email(i18n.t('errors.email'))
    //   .required(i18n.t('errors.required')),
  });

  const formik = useFormik({
    initialValues: {
      name: '',
      phone: '',
      message: '',
    },
    validationSchema,
    onSubmit: (values) => {
      // alert(JSON.stringify(values, null, 2));
      setTimeout(() => {
        formik.resetForm();
        console.log(values);
        return true;
      }, 10000)
    },
  });
  
  return (
    <div className={css.container}>
      <form onSubmit={formik.handleSubmit}>
        <TextField
          fullWidth
          name='name'
          label={i18n.t('name')}
          id='name'
          onChange={formik.handleChange}
          value={formik.values.name}
          error={formik.touched.name && Boolean(formik.errors.name)}
          helperText={formik.touched.name && formik.errors.name}
        />
        <InputMask
          mask="+38(999) 999 99 99"
          value={formik.values.phone}
          onChange={formik.handleChange}
          maskChar={null}
        >
          {(inputProps) =>
            <TextField
              name='phone'
              label={i18n.t('phone')}
              id='phone'
              onChange={formik.handleChange}
              value={formik.values.phone}
              error={formik.touched.phone && Boolean(formik.errors.phone)}
              helperText={formik.touched.phone && formik.errors.phone}
            {...inputProps} type="tel" fullWidth />}
        </InputMask>
        <TextField
          name='message'
          label={i18n.t('message')}
          id='message'
          onChange={formik.handleChange}
          value={formik.values.message}
        />
        <Button type="submit" disabled={formik.isSubmitting} variant="contained" color="primary" >
          {i18n.t('send')}</Button>
      </form>
    </div>
  );
};
