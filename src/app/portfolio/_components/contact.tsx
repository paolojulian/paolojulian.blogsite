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
      <Row
        className={classNames(
          'relative w-full max-w-screen-lg mx-auto h-fit mb-24'
        )}
      >
        {/* top divider */}
        <div className='absolute top-0 left-0 border-t border-slate-400 w-[105%]'></div>

        <Stack className='relative space-y-8 border-r border-slate-400 py-12 mr-12'>
          <div className='z-10 bg-main'>
            <SectionHeading>want to work with me?</SectionHeading>
            <h3
              className={classNames(
                'uppercase tracking-wide font-black text-[70px] leading-[1] -ml-4 pr-5 font-anton'
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
          <div className='absolute left-0 top-0 border-l border-slate-400 h-full z-0'></div>
          {/* bottom divider */}
          <div className='absolute bottom-12 -left-4 border-b border-slate-400 w-[108%]'></div>
        </Stack>

        <Stack className='relative h-full justify-center flex-1 space-y-16 ml-6 pl-6 border-l border-slate-400 py-12'>
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
      </Row>
    </section>
  );
};

export default ContactSection;
