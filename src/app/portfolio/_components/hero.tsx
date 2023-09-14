'use client';
import React, { FunctionComponent, useEffect, useRef } from 'react';
import Stack from '@/_components/layouts/stack';
import Link from 'next/link';
import Row from '@/_components/layouts/row';
import Image from 'next/image';
import LinkedinIcon from '@/_components/icons/linkedin-icon';
import Fab from '@/_components/buttons/fab';
import MailIcon from '@/app/portfolio/_components/icons/mail-icon';
import PhoneIcon from '@/app/portfolio/_components/icons/phone-icon';
import {
  SECTIONS,
  useSections,
} from '@/app/portfolio/_context/sections-context';
import classNames from 'classnames';

interface Props {
  // No Props
}

let isScrolling = false;

const HeroSection: FunctionComponent<Props> = (props) => {
  const logoRef = useRef<HTMLHeadingElement>(null);
  const professionRef = useRef<HTMLParagraphElement>(null);
  const socialLinksRef = useRef<HTMLDivElement>(null);
  const { activeSection } = useSections();

  useEffect(() => {
    const handleScroll = () => {
      if (!isScrolling) {
        isScrolling = true;
        requestAnimationFrame(() => {
          let scroll = window.scrollY;

          if (logoRef.current) {
            logoRef.current.style.transform = `translateY(${scroll * 0.8}px)`;
          }

          if (professionRef.current) {
            const opacity = 1 - Math.min(scroll / 200, 1);
            professionRef.current.style.transform = `translateY(${
              scroll * 0.7
            }px)`;
            professionRef.current.style.opacity = opacity.toFixed(2);
          }

          if (socialLinksRef.current) {
            const opacity = 1 - Math.min(scroll / 100, 1);
            socialLinksRef.current.style.transform = `translateY(${
              scroll * 0.7
            }px)`;
            socialLinksRef.current.style.opacity = opacity.toFixed(2);
          }

          isScrolling = false;
        });
      }
    };

    if (window.innerWidth > 768) {
      window.addEventListener('scroll', handleScroll);
    }

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section
      id='hero'
      className='flex flex-row min-h-screen flex-1 w-full justify-center pt-navbar border-l-[10px] border-red-300'
    >
      <Stack className='justify-center relative'>
        <Stack className='w-[100px] h-full justify-center sticky top-0 space-y-[10px]'>
          {SECTIONS.map((section, i) => (
            <Link
              className='flex flex-row justify-between items-center transition hover:bg-slate-200 pl-4'
              href={`#${section}`}
              key={i}
            >
              <span
                className={classNames(
                  'font-black text-[16px] tracking-[-0.48px]',
                  activeSection === section ? 'text-gray-800' : 'text-gray-300'
                )}
              >
                {`0${i}`}
              </span>
              <div
                className={classNames(
                  'w-[3px] h-[40px]',
                  activeSection === section
                    ? 'bg-primary-400'
                    : 'bg-transparent'
                )}
              ></div>
            </Link>
          ))}
        </Stack>
      </Stack>

      <div className='flex-1 flex flex-col justify-center items-center text-center gap-[20px] max-w-7xl w-full relative'>
        <div className='h-full aspect-[880/1002] absolute left-0 bottom-0'>
          <Image
            className='object-contain select-none'
            draggable={false}
            src='/assets/background.png'
            alt='background'
            fill
            priority
          />
        </div>

        <h1 className='text-[40px] tracking-[8px] leading-[72px]'>
          SIMPLIFY YOUR LIFE,
          <br />
          AMPLIFY YOUR HAPPINESS.
        </h1>
        <div className='flex flex-row font-black text-[12px] tracking-[12.32px] uppercase items-center space-x-4 text-gray-400'>
          <p>PAOLO JULIAN</p>
          <div className='h-[18px] w-[2px] bg-primary-400'></div>
          <p>SOFTWARE ENGINEER</p>
        </div>

        <Stack
          className='absolute left-1/2 bottom-0 -translate-x-1/2 items-center space-y-2'
          role='button'
        >
          <p className='animate-bounce'>Read more</p>
          <div className='w-[1px] h-[100px] bg-slate-600'></div>
        </Stack>
      </div>

      <Stack className='justify-center'>
        <Stack className='w-[100px] h-full justify-center space-y-[20px] text-white'>
          <Fab>
            <LinkedinIcon />
          </Fab>
          <Fab>
            <MailIcon />
          </Fab>
          <Fab>
            <PhoneIcon />
          </Fab>
        </Stack>
      </Stack>
    </section>
  );
};

export default HeroSection;
