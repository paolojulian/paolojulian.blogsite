'use client';
import React, { FunctionComponent, useState } from 'react';
import { Formik } from 'formik';
import Stack from '@/_components/layouts/stack';
import TextInput from './text-input';
import { contactFormSchema } from '../../app/portfolio/_utils/schemas';
import { IContactForm } from '../../app/portfolio/_forms';
import FormControl from './form-control';
import CTAButton from '@/_components/form/cta-button';

export type ContactFormProps = {
  onSubmit?: (form: IContactForm) => Promise<void>;
  dark?: boolean;
  isLoading: boolean;
  isFinished: boolean;
};

const ContactForm: FunctionComponent<ContactFormProps> = ({
  onSubmit = () => Promise.reject(),
  dark = false,
  isLoading,
}) => {
  const [isSuccess, setIsSuccess] = useState(false);

  return (
    <Formik
      onSubmit={(form, actions) => {
        onSubmit(form).then(() => {
          setIsSuccess(true);
          actions.setSubmitting(false);
          actions.resetForm();

          setTimeout(() => {
            setIsSuccess(false);
          }, 2000);
        });
      }}
      initialValues={{
        name: '',
        email: '',
        text: '',
      }}
      validationSchema={contactFormSchema}
    >
      {({ values, touched, errors, handleSubmit, setFieldValue }) => (
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSubmit();
          }}
          className='relative md:px-4'
        >
          <Stack className='w-full space-y-8'>
            <Stack className='space-y-4'>
              <FormControl
                error={touched.name && errors.name ? errors.name : undefined}
              >
                <TextInput
                  onChange={(e) => setFieldValue('name', e.target.value)}
                  autoComplete='name'
                  name='name'
                  placeholder='name'
                  value={values.name}
                  isError={!!touched.name && !!errors.name}
                  variant={dark ? 'default-dark' : 'default'}
                />
              </FormControl>
              <FormControl
                error={touched.email && errors.email ? errors.email : undefined}
              >
                <TextInput
                  onChange={(e) => setFieldValue('email', e.target.value)}
                  autoComplete='email'
                  name='email'
                  placeholder='email'
                  type='email'
                  value={values.email}
                  isError={!!touched.email && !!errors.email}
                  variant={dark ? 'default-dark' : 'default'}
                />
              </FormControl>

              <FormControl
                error={touched.text && errors.text ? errors.text : undefined}
              >
                <TextInput
                  onChange={(e) => setFieldValue('text', e.target.value)}
                  placeholder='tell me about it'
                  value={values.text}
                  isError={!!touched.text && !!errors.text}
                  variant={dark ? 'default-dark' : 'default'}
                />
              </FormControl>
            </Stack>
            <CTAButton
              type='submit'
              isLoading={isLoading}
              variant={isSuccess ? 'success' : 'default'}
              loadingText='Sending...'
            >
              SEND
            </CTAButton>
          </Stack>
        </form>
      )}
    </Formik>
  );
};

export default ContactForm;
