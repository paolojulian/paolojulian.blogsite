'use client';
import React, { FunctionComponent } from 'react';
import SectionHeading from './common/section-heading';
import classNames from 'classnames';
import Stack from '@/_components/layouts/stack';
import Row from '@/_components/layouts/row';
import ContactForm from './form/contact-form';
import useContactForm from '../_hooks/useContactForm';
import { IPortfolio } from '../_contentful';

export type ContactSectionProps = {
  portfolio: IPortfolio;
};

const ContactSection: FunctionComponent<ContactSectionProps> = ({
  portfolio,
}) => {
  const {
    isLoading: isSubmittingContactForm,
    handleSubmit,
    isFinished,
  } = useContactForm();

  return (
    <section id='contact'>
      <div
        className={classNames(
          'flex flex-col md:flex-row relative w-full max-w-screen-lg mx-auto h-fit mb-24',
          'border-l md:border-l-0 border-slate-400'
        )}
      >
        {/* top divider */}
        <div className='block absolute top-0 left-0 border-t border-slate-400 w-[105%]'></div>

        <Stack className='relative space-y-8 md:border-r border-slate-400 py-12 md:mr-12'>
          <div className='z-10 bg-main px-8 md:px-0'>
            <SectionHeading>want to work with me?</SectionHeading>
            <h3
              className={classNames(
                'uppercase tracking-wide font-black text-[50px] md:text-[70px] leading-[1] md:-ml-4 pr-5 font-anton',
                'text-slate-800'
              )}
            >
              CONTACT ME
            </h3>
          </div>

          <ContactForm
            onSubmit={handleSubmit}
            isLoading={isSubmittingContactForm}
            isFinished={isFinished}
          />

          {/* left divider */}
          <div className='hidden md:block absolute left-0 top-0 border-l border-slate-400 h-full z-0'></div>
          {/* bottom divider */}
          <div className='hidden md:block absolute bottom-12 -left-4 border-b border-slate-400 w-[108%]'></div>
        </Stack>

        <Stack className='relative h-full justify-center flex-1 space-y-16 md:ml-6 pl-8 md:pl-6 md:border-l border-slate-400 py-12'>
          <Stack className='space-y-6 flex-1'>
            <Stack className='text-slate-600'>
              <h4 className='text-sm font-medium text-slate-500/70 mb-1'>
                availability
              </h4>
              {portfolio.availability.map((item, i) => (
                <p key={i}>{item}</p>
              ))}
            </Stack>
            <Stack className='text-slate-600'>
              <h4 className='text-sm font-medium text-slate-500/70 mb-1'>
                address
              </h4>
              {portfolio.address.map((item, i) => (
                <p key={i}>{item}</p>
              ))}
            </Stack>
            <Stack className='text-slate-600'>
              <h4 className='text-sm font-medium text-slate-500/70 mb-1'>
                support
              </h4>
              {portfolio.support.map((item, i) => (
                <p key={i}>{item}</p>
              ))}
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
    </section>
  );
};

export default ContactSection;
