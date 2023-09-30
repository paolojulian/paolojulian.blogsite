'use client';
import React, { FunctionComponent, useRef } from 'react';
import Stack from '@/_components/layouts/stack';
import Image from 'next/image';
import Container from '@/_components/layouts/container';
import classNames from 'classnames';
import { SECTIONS } from '@/app/(main-layout)/portfolio/_context/sections-context';
import useScrolledDown from '@/_hooks/use-scrolled-down';

interface Props {
  // No Props
}

const HeroSection: FunctionComponent<Props> = () => {
  const logoRef = useRef<HTMLHeadingElement>(null);
  const professionRef = useRef<HTMLParagraphElement>(null);
  const readMoreRef = useRef<HTMLDivElement>(null);

  const isScrolledDown = useScrolledDown();

  return (
    <>
      <div className='fixed inset-0 pointer-events-none '>
        <div className='h-full aspect-[880/1002] max-w-full absolute left-[100px] bottom-0 opacity-50 lg:pl-[100px]'>
          <Image
            className='object-cover object-right select-none'
            draggable={false}
            src='/assets/background.png'
            alt='background'
            fill
            priority
          />
        </div>
      </div>
      <section
        id={SECTIONS[0]}
        className='flex flex-row min-h-[calc(100vh-7rem)] flex-1 w-full justify-center'
      >
        <Container className='flex-1 flex flex-col justify-center md:items-center text-left md:text-center gap-5 max-w-screen-xl w-full relative'>
          <h1
            className='text-5xl font-medium tracking-wider lg:text-6xl xl:text-7xl md:tracking-widest md:leading-[4.5rem] uppercase'
            style={{
              willChange: 'transform',
            }}
            ref={logoRef}
          >
            <span>
              <span className='text-slate-300'>K</span>
              EEP
            </span>
            &nbsp;
            <span>
              <span className='text-slate-300'>I</span>T
            </span>
            &nbsp;
            <span>
              <span className='text-slate-300'>S</span>
              IMPLE
            </span>
            &nbsp;
            <span>
              <span className='text-slate-300'>S</span>
              TUPID
            </span>
          </h1>
          <div
            className='flex flex-col md:flex-row font-black text-[12px] tracking-[12.32px] uppercase md:items-center gap-2 md:gap-4 text-gray-400 font-sans pb-[4rem]'
            ref={professionRef}
          >
            <p>PAOLO JULIAN</p>
            <div className='h-[1px] md:h-[18px] w-full md:w-[2px] bg-primary-400'></div>
            <p>SOFTWARE ENGINEER</p>
          </div>

          <Stack
            ref={readMoreRef}
            className={classNames(
              'absolute left-1/2 -bottom-8 -translate-x-1/2 items-center z-30 transition-opacity duration-1000',
              isScrolledDown ? 'opacity-0' : 'opacity-100'
            )}
          >
            <Stack className='space-y-2 animate-bounce items-center'>
              <p className=''>Read more</p>
              <div className='w-[1px] h-[64px] bg-slate-600'></div>
            </Stack>
          </Stack>
        </Container>
      </section>
    </>
  );
};

export default HeroSection;
