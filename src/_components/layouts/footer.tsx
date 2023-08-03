'use client';
import ContactForm from '@/app/portfolio/_components/form/contact-form';
import useContactForm from '@/app/portfolio/_hooks/useContactForm';
import React, { FunctionComponent } from 'react';
import Stack from './stack';
import Link from 'next/link';

export type FooterProps = {
  // no props
};

const Footer: FunctionComponent<FooterProps> = () => {
  const {
    isLoading: isSubmittingContactForm,
    handleSubmit,
    isFinished,
  } = useContactForm();

  return (
    <footer className='bg-slate-900 w-full'>
      <div className='flex flex-col md:flex-row mx-auto max-w-screen-md relative'>
        <Stack className='space-y-6 relative border-r border-slate-400 py-24'>
          {/* left divider */}
          <div className='h-5/6 absolute bottom-4 left-0 border-l border-slate-400 z-0'></div>

          <div className='bg-slate-900 z-10'>
            <div className='md:-ml-4'>
              <p className='text-slate-400'>want to work with me?</p>
              <p className='uppercase text-slate-50 font-anton text-6xl'>
                CONTACT ME
              </p>
            </div>
          </div>
          <div className='relative'>
            <ContactForm
              onSubmit={handleSubmit}
              isLoading={isSubmittingContactForm}
              isFinished={isFinished}
            />
            {/* bottom divider */}
            <div className='w-[115%] absolute bottom-0 -left-4 right-0 border-b border-slate-400 z-0'></div>
          </div>
        </Stack>

        <Stack className='relative h-full justify-center flex-1 space-y-16 md:ml-24 pl-8 md:pl-6 md:border-l border-slate-400 py-12'>
          <Stack className='space-y-6 flex-1'>
            <Stack className='text-slate-400'>
              <h4 className='text-sm font-medium text-slate-500/70 mb-1'>
                availability
              </h4>
              <p>Monday - Friday</p>
              <p>9AM - 6PM</p>
              <p>Weekends</p>
              <p>Emails only</p>
            </Stack>
            <Stack className='text-slate-400'>
              <h4 className='text-sm font-medium text-slate-500/70 mb-1'>
                address
              </h4>
              <p>Upper Dagsian</p>
              <p>Baguio City</p>
              <p>Philippines</p>
              <p>2600</p>
            </Stack>
            <Stack className='text-slate-400'>
              <h4 className='text-sm font-medium text-slate-500/70 mb-1'>
                support
              </h4>
              <Link href='mailto:paolojulian.personal@gmail.com'>
                paolojulian.personal@gmail.com
              </Link>
              <Link href='tel:09279488654'>(+63) 927 948 8564</Link>
            </Stack>
          </Stack>
          <footer>
            <p className='text-sm text-slate-500'>
              Copyright @ 2017-2023 Paolo Vincent Julian.
              <br />
              All rights reserved.
            </p>
          </footer>
        </Stack>
      </div>
    </footer>
  );
};

export default Footer;
