'use client';
import React, { FunctionComponent, useRef } from 'react';
import Stack from '@/_components/layouts/stack';
import Image from 'next/image';
import { SECTIONS } from '@/app/portfolio/_context/sections-context';
import Container from '@/_components/layouts/container';

interface Props {
  // No Props
}

let isScrolling = false;

const HeroSection: FunctionComponent<Props> = () => {
  const logoRef = useRef<HTMLHeadingElement>(null);
  const professionRef = useRef<HTMLParagraphElement>(null);
  const readMoreRef = useRef<HTMLDivElement>(null);

  // useLayoutEffect(() => {
  //   let timeout: number | null = null;
  //   const logoElement = logoRef.current;
  //   const professionElement = professionRef.current;
  //   const socialLinksElement = socialLinksRef.current;
  //   const readMoreElement = readMoreRef.current;

  //   const handleScroll = () => {
  //     if (timeout) {
  //       window.cancelAnimationFrame(timeout);
  //     }
  //     isScrolling = true;
  //     timeout = window.requestAnimationFrame(() => {
  //       let scroll = window.scrollY;

  //       if (logoElement) {
  //         const opacity = 1 - Math.min(scroll / 300, 1);
  //         logoElement.style.transform = `translateY(${scroll * 0.8}px)`;
  //         logoElement.style.opacity = opacity.toFixed(2);
  //       }

  //       if (professionElement) {
  //         const opacity = 1 - Math.min(scroll / 200, 1);
  //         // professionElement.style.transform = `translateY(${scroll * 0.7}px)`;
  //         professionElement.style.opacity = opacity.toFixed(2);
  //       }

  //       if (socialLinksElement) {
  //         const opacity = 1 - Math.min(scroll / 200, 1);
  //         // socialLinksElement.style.transform = `translateY(${scroll * 0.7}px)`;
  //         socialLinksElement.style.opacity = opacity.toFixed(2);
  //       }

  //       if (readMoreElement) {
  //         const opacity = 1 - Math.min(scroll / 200, 1);
  //         readMoreElement.style.opacity = opacity.toFixed(2);
  //       }

  //       isScrolling = false;
  //     });
  //   };

  //   if (window.innerWidth > 768) {
  //     window.addEventListener('scroll', handleScroll);
  //   }

  //   return () => {
  //     window.removeEventListener('scroll', handleScroll);
  //   };
  // }, []);

  return (
    <>
      <div className='fixed inset-0 xl:max-w-screen-lg 2xl:max-w-screen-xl mx-auto pointer-events-none pt-navbar'>
        <div className='h-full aspect-[880/1002] max-w-full absolute left-0 bottom-0'>
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
        className='flex flex-row min-h-screen flex-1 w-full justify-center'
      >
        <div className='hidden md:block w-[100px]'></div>
        <Container className='flex-1 flex flex-col justify-center md:items-center text-left md:text-center gap-[20px] max-w-screen-xl w-full relative'>
          <h1
            className='text-5xl tracking-wider md:text-5xl md:tracking-widest md:leading-[72px]'
            style={{
              willChange: 'transform',
            }}
            ref={logoRef}
          >
            <span>SIMPLIFY YOUR LIFE,</span>
            <br />
            <span>AMPLIFY YOUR HAPPINESS.</span>
          </h1>
          <div
            className='flex flex-col md:flex-row font-black text-[12px] tracking-[12.32px] uppercase md:items-center gap-2 md:gap-4 text-gray-400 font-sans'
            ref={professionRef}
          >
            <p>PAOLO JULIAN</p>
            <div className='h-[1px] md:h-[18px] w-full md:w-[2px] bg-primary-400'></div>
            <p>SOFTWARE ENGINEER</p>
          </div>

          <Stack
            ref={readMoreRef}
            className='absolute left-1/2 -bottom-8 -translate-x-1/2 items-center z-30'
          >
            <Stack className='space-y-2 animate-bounce items-center'>
              <p className=''>Read more</p>
              <div className='w-[1px] h-[100px] bg-slate-600'></div>
            </Stack>
          </Stack>
        </Container>

        {/* <div
          className='hidden md:flex justify-center flex-col'
          ref={socialLinksRef}
        >
          <Stack className='w-[100px] h-full justify-center space-y-[20px] text-white'>
            <Link href='https://www.linkedin.com/in/pipz/'>
              <Fab>
                <LinkedinIcon />
              </Fab>
            </Link>
            <Link href='mailto:paolojulian.dev@gmail.com'>
              <Fab>
                <MailIcon />
              </Fab>
            </Link>
            <Link href='tel:09279488654'>
              <Fab>
                <PhoneIcon />
              </Fab>
            </Link>
          </Stack>
        </div> */}
      </section>
    </>
  );
};

export default HeroSection;
