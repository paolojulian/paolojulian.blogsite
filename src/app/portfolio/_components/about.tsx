'use client';
import React, { FunctionComponent } from 'react';
import Stack from '@/_components/layouts/stack';
import { SECTIONS } from '@/app/portfolio/_context/sections-context';
import SectionHeading from '@/app/portfolio/_components/common/section-heading';
import Row from '@/_components/layouts/row';
import Image from 'next/image';
import RightArrowIcon from '@/_components/icons/right-arrow-icon';
import Link from 'next/link';

interface Props {
  resumeUrl: string;
}

const AboutSection: FunctionComponent<Props> = ({ resumeUrl }) => {
  return (
    <section
      id={SECTIONS[1]}
      className='bg-white flex flex-row flex-1 max-w-main px-[50px] mx-auto w-full z-10'
    >
      <Stack className='py-[150px] w-full space-y-[50px]'>
        <div className='text-left'>
          <SectionHeading number={1} section='about'></SectionHeading>
        </div>
        <Row className='space-x-[50px]'>
          <div className='relative aspect-[400/465] w-[400px] h-auto'>
            <div className='w-[30px] aspect-square bg-primary-400 absolute left-0 bottom-0 z-10'></div>
            <Image
              fill
              className='object-cover'
              src='/assets/portfolio/profile-image.png'
              alt='profile-picture'
            />
          </div>
          <Stack className='flex-1 text-right justify-end items-end space-y-[50px]'>
            <h3 className='text-[48px] tracking-[2.4px]'>WHO AM I?</h3>
            <p className='text-slate-500 text-[20px]'>
              {`With 6 years of experience as a Software Engineer, my focus is on
              Front-End Development. I'm passionate about coding and enjoy
              crafting engaging user experiences. I believe in simplicity over
              complexity for effective app and system development.`}
            </p>
            <Link
              href={resumeUrl}
              role='button'
              className='relative transition bg-primary-400 hover:bg-primary-500 py-[20px] pr-[37px] pl-[50px] text-white shadow-[0_4px_28px_rgba(0,0,0,0.12)]'
            >
              <Row className='space-x-[10px] tracking-[0.8px]'>
                <span>VIEW RESUME</span>
                <RightArrowIcon className='text-white' />
              </Row>
              <div className='w-[15px] aspect-square bg-white absolute left-0 top-0'></div>
            </Link>
          </Stack>
        </Row>
      </Stack>
    </section>
  );
};

export default AboutSection;
