'use client';
import React, { FunctionComponent } from 'react';
import Stack from '@/_components/layouts/stack';
import { SECTIONS } from '@/app/portfolio/_context/sections-context';
import SectionHeading from '@/app/portfolio/_components/common/section-heading';
import Row from '@/_components/layouts/row';
import Image from 'next/image';
import RightArrowIcon from '@/_components/icons/right-arrow-icon';
import Link from 'next/link';
import { ReactMarkdown } from 'react-markdown/lib/react-markdown';
import classNames from 'classnames';
import Container from '@/_components/layouts/container';

interface Props {
  resumeUrl: string;
  about: string;
}

const AboutSection: FunctionComponent<Props> = ({ resumeUrl, about }) => {
  return (
    <section
      id={SECTIONS[1]}
      className='bg-white flex flex-row flex-1 max-w-main mx-auto w-full z-10'
    >
      <Container className='flex flex-col pt-[100px] md:pt-[150px] w-full gap-[50px]'>
        <div className='text-left'>
          <SectionHeading number={1} section='about'></SectionHeading>
        </div>
        <div className='flex flex-col md:flex-row gap-[50px] xl:gap-[100px]'>
          <div className='relative aspect-[400/465] w-full md:w-[250px] lg:w-[300px] 2xl:w-[400px]'>
            <div className='w-[15px] lg:w-[20px] 2xl:w-[30px] aspect-square bg-primary-400 absolute left-0 bottom-0 z-10'></div>
            <Image
              fill
              className='object-cover'
              src='/assets/portfolio/profile-image.png'
              alt='profile-picture'
            />
          </div>
          <Stack className='flex-1 text-left md:text-right md:justify-end md:items-end gap-[20px] md:gap-[50px]'>
            <h3 className='text-[32px] md:text-[48px] tracking-[1.6px] md:tracking-[2.4px]'>
              WHO AM I?
            </h3>
            <div
              className={classNames(
                'text-[16px] md:text-[20px] text-slate-500 font-normal'
              )}
            >
              <ReactMarkdown
                components={{
                  p: ({ children }) => (
                    <p className='tracking-wide text-slate-500'>{children}</p>
                  ),
                  strong: ({ children }) => (
                    <strong className='text-red-500 font-normal'>
                      {children}
                    </strong>
                  ),
                }}
                className='line-break'
              >
                {about}
              </ReactMarkdown>
            </div>
            <Link
              href={resumeUrl}
              role='button'
              className='relative w-fit transition bg-primary-400 hover:bg-primary-500 py-[20px] pr-[37px] pl-[50px] text-white shadow-[0_4px_28px_rgba(0,0,0,0.12)]'
            >
              <Row className='space-x-[10px] tracking-[0.8px]'>
                <span>VIEW RESUME</span>
                <RightArrowIcon className='text-white' />
              </Row>
              <div className='w-[15px] aspect-square bg-white absolute left-0 top-0'></div>
            </Link>
          </Stack>
        </div>
      </Container>
    </section>
  );
};

export default AboutSection;
