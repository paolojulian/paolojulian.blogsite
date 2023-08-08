import Stack from '@/_components/layouts/stack';
import React, { FunctionComponent } from 'react';
import SectionHeading from './common/section-heading';
import TextHighlight from './common/text-highlight';
import CTAButton from './common/cta-button';
import Link from 'next/link';
import { IPortfolio } from '../_contentful';
import { ReactMarkdown } from 'react-markdown/lib/react-markdown';

export type AboutSectionProps = {
  portfolio: IPortfolio;
};

const AboutSection: FunctionComponent<AboutSectionProps> = ({ portfolio }) => {
  return (
    <section id='about'>
      <Stack className='py-36 space-y-6'>
        <Stack className='space-y-2'>
          <SectionHeading>WHO AM I?</SectionHeading>
          <Stack className='space-y-12'>
            <div className='text-xl'>
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
            <div className='flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-8'>
              <Link href={'/portfolio#contact'}>
                <span className='hidden md:block'>
                  <CTAButton block={false}>let&lsquo;s talk</CTAButton>
                </span>
                <span className='block md:hidden'>
                  <CTAButton size='lg'>let&lsquo;s talk</CTAButton>
                </span>
              </Link>
              <Link href={portfolio.resume.url} target='_blank'>
                <span className='hidden md:block'>
                  <CTAButton block={false} variant='secondary'>
                    view cv
                  </CTAButton>
                </span>
                <span className='block md:hidden'>
                  <CTAButton size='lg' variant='secondary'>
                    view cv
                  </CTAButton>
                </span>
              </Link>
            </div>
          </Stack>
        </Stack>
      </Stack>
    </section>
  );
};

export default AboutSection;
