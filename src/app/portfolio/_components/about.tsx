'use client';
import Stack from '@/_components/layouts/stack';
import React, { FunctionComponent } from 'react';
import SectionHeading from './common/section-heading';
import TextHighlight from './common/text-highlight';
import CTAButton from './common/cta-button';
import Link from 'next/link';
import { IPortfolio } from '../_contentful';
import { ReactMarkdown } from 'react-markdown/lib/react-markdown';
import IntersectProvider from '@/_context/IntersectContext';
import classNames from 'classnames';

export type AboutSectionProps = {
  portfolio: IPortfolio;
};

const AboutSection: FunctionComponent<AboutSectionProps> = ({ portfolio }) => {
  return (
    <section id='about'>
      <Stack className='py-36 space-y-6'>
        <Stack className='space-y-12'>
          <SectionHeading>WHO AM I?</SectionHeading>

          <Stack className='space-y-12 xl:mx-24'>
            <IntersectProvider duration={700}>
              <div className={classNames('text-xl')}>
                <ReactMarkdown
                  components={{
                    strong: ({ children }) => (
                      <TextHighlight>{children}</TextHighlight>
                    ),
                  }}
                  className='line-break'
                >
                  {portfolio.about}
                </ReactMarkdown>
              </div>
            </IntersectProvider>

            <IntersectProvider duration={700}>
              <div className='flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4'>
                <Link href={'/portfolio#contact'}>
                  <span className='hidden md:block'>
                    <CTAButton size='lg' block={false}>
                      GET IN TOUCH
                    </CTAButton>
                  </span>
                  <span className='block md:hidden'>
                    <CTAButton size='lg'>GET IN TOUCH</CTAButton>
                  </span>
                </Link>
                <Link href={portfolio.resume.url} target='_blank'>
                  <span className='hidden md:block'>
                    <CTAButton size='lg' block={false} variant='secondary'>
                      VIEW CV
                    </CTAButton>
                  </span>
                  <span className='block md:hidden'>
                    <CTAButton size='lg' variant='secondary'>
                      VIEW CV
                    </CTAButton>
                  </span>
                </Link>
              </div>
            </IntersectProvider>
          </Stack>
        </Stack>
      </Stack>
    </section>
  );
};

export default AboutSection;
