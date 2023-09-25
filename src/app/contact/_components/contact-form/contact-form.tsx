'use client';
import CTAButton from '@/_components/form/cta-button';
import FormControl from '@/_components/form/form-control';
import TextInput from '@/_components/form/text-input';
import RightArrowIcon from '@/_components/icons/right-arrow-icon';
import Row from '@/_components/layouts/row';
import Stack from '@/_components/layouts/stack';
import useContactForm from '@/_hooks/use-contact-form';
import { contactFormSchema } from '@/app/(main-layout)/portfolio/_utils/schemas';
import { DATA_TEST } from '@/app/contact/_components/contact-form/contact-form.constants';
import { Formik } from 'formik';
import React, { FunctionComponent, useEffect, useState } from 'react';

interface Props {
  // No props
}

const ContactForm: FunctionComponent<Props> = () => {
  const { isLoading, handleSubmit } = useContactForm();

  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    if (isSuccess) {
      timeout = setTimeout(() => {
        setIsSuccess(false);
      }, 2000);
    }

    return () => {
      if (timeout) clearTimeout(timeout);
    };
  }, [isSuccess]);

  return (
    <Formik
      onSubmit={(form, actions) => {
        handleSubmit(form).then(() => {
          setIsSuccess(true);
          actions.setSubmitting(false);
          actions.resetForm();
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
          className='relative'
        >
          <Stack className='w-full space-y-12'>
            <Stack className='space-y-4'>
              <FormControl
                error={touched.name && errors.name ? errors.name : undefined}
              >
                <TextInput
                  onChange={(e) => setFieldValue('name', e.target.value)}
                  autoComplete='name'
                  name='name'
                  placeholder='Your name'
                  value={values.name}
                  isError={!!touched.name && !!errors.name}
                  data-testid={DATA_TEST.name}
                />
              </FormControl>
              <FormControl
                error={touched.email && errors.email ? errors.email : undefined}
              >
                <TextInput
                  onChange={(e) => setFieldValue('email', e.target.value)}
                  autoComplete='email'
                  name='email'
                  placeholder='Your email'
                  type='email'
                  value={values.email}
                  isError={!!touched.email && !!errors.email}
                  data-testid={DATA_TEST.email}
                />
              </FormControl>

              <FormControl
                error={touched.text && errors.text ? errors.text : undefined}
              >
                <TextInput
                  onChange={(e) => setFieldValue('text', e.target.value)}
                  placeholder='Tell me about it'
                  value={values.text}
                  isError={!!touched.text && !!errors.text}
                  data-testid={DATA_TEST.message}
                />
              </FormControl>
            </Stack>

            <CTAButton
              block={false}
              type='submit'
              size='lg'
              isLoading={isLoading}
              variant={isSuccess ? 'success' : 'default'}
              loadingText='Sending...'
              data-testid={DATA_TEST.submitBtn}
            >
              <Row className='items-center gap-3 pr-10 pl-12'>
                <span>SEND</span>
                <RightArrowIcon />
              </Row>
            </CTAButton>
          </Stack>
        </form>
      )}
    </Formik>
  );
};

export default ContactForm;
