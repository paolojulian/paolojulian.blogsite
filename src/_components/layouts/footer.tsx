'use client';
import useContactForm from '@/app/portfolio/_hooks/useContactForm';
import React, { FunctionComponent } from 'react';
import Stack from './stack';
import Link from 'next/link';
import ContactForm from '../form/contact-form';
import AppCopyright from '../common/app-copyright';

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
    <footer id="contact" className='bg-slate-900 w-full'>
      <div className='flex flex-col md:flex-row mx-auto max-w-screen-md relative'>
        <Stack className='space-y-6 relative border-r border-slate-400 py-8 md:pb-24 md:pt-8'>
          {/* left divider */}
          <div className='hidden md:block h-5/6 absolute bottom-4 left-0 border-l border-slate-400 z-0'></div>

          <div className='bg-slate-900 z-10'>
            <div className='md:-ml-4 px-8 md:px-0'>
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
              dark
            />
            {/* bottom divider */}
            <div className='hidden md:block w-[115%] absolute bottom-0 -left-4 right-0 border-b border-slate-400 z-0'></div>
          </div>
        </Stack>

        <Stack className='relative h-full justify-center flex-1 space-y-16 pt-0 md:pt-12 md:ml-24 pl-8 md:pl-6 md:border-l border-slate-400 py-12'>
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
              <Link
                className='transition-colors hover:text-red-400'
                href='mailto:paolojulian.personal@gmail.com'
              >
                paolojulian.personal@gmail.com
              </Link>
              <Link
                className='transition-colors hover:text-red-400'
                href='tel:09279488654'
              >
                (+63) 927 948 8564
              </Link>
            </Stack>
          </Stack>
          <footer>
            <span className='text-sm text-slate-500'>
              <AppCopyright />
            </span>
          </footer>
        </Stack>
      </div>
    </footer>
  );
};

export default Footer;
