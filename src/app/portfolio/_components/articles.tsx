'use client';
import React, { FunctionComponent } from 'react';
import Stack from '@/_components/layouts/stack';
import { SECTIONS } from '@/app/portfolio/_context/sections-context';
import SectionHeading from '@/app/portfolio/_components/common/section-heading';
import Row from '@/_components/layouts/row';
import RightArrowIcon from '@/_components/icons/right-arrow-icon';

interface Props {
  // No Props
}

const ArticlesSection: FunctionComponent<Props> = (props) => {
  return (
    <section
      id={SECTIONS[4]}
      className='bg-white flex flex-row flex-1 max-w-[1268px] px-[50px] mx-auto w-full z-10'
    >
      <Stack className='py-[50px] w-full space-y-[50px]'>
        <div className='text-left'>
          <SectionHeading number={4} section='latest articles'></SectionHeading>
        </div>
        <Row className='py-[50px] space-x-[20px]'>
          <Stack className='w-[300px] space-y-[10px]'>
            <div className='aspect-[380/360] w-full bg-primary-300/30'></div>
            <Stack>
              <p className='text-slate-400 text-[14px]'>2 months ago</p>
              <p className='uppercase text-[20px] text-slate-600 line-clamp-2'>
                REAL-LIFE APPLICATION OF DESIGN PATTERNS IN REACT
              </p>
            </Stack>
            <button className='flex flex-row text-primary-400 space-x-[10px]'>
              <span className='text-[14px]'>SEE MORE</span>
              <RightArrowIcon className='w-[24px] h-[24px]' />
            </button>
          </Stack>
          <Stack className='w-[300px] space-y-[10px]'>
            <div className='aspect-[380/360] w-full bg-primary-300/30'></div>
            <Stack>
              <p className='text-slate-400 text-[14px]'>2 months ago</p>
              <p className='uppercase text-[20px] text-slate-600 line-clamp-2'>
                REAL-LIFE APPLICATION OF DESIGN PATTERNS IN REACT
              </p>
            </Stack>
            <button className='flex flex-row text-primary-400 space-x-[10px]'>
              <span className='text-[14px]'>SEE MORE</span>
              <RightArrowIcon className='w-[24px] h-[24px]' />
            </button>
          </Stack>
          <Stack className='w-[300px] space-y-[10px]'>
            <div className='aspect-[380/360] w-full bg-primary-300/30'></div>
            <Stack>
              <p className='text-slate-400 text-[14px]'>2 months ago</p>
              <p className='uppercase text-[20px] text-slate-600 line-clamp-2'>
                REAL-LIFE APPLICATION OF DESIGN PATTERNS IN REACT
              </p>
            </Stack>
            <button className='flex flex-row text-primary-400 space-x-[10px]'>
              <span className='text-[14px]'>SEE MORE</span>
              <RightArrowIcon className='w-[24px] h-[24px]' />
            </button>
          </Stack>
        </Row>
      </Stack>
    </section>
  );
};

export default ArticlesSection;
