'use client';
import React, { FunctionComponent, useEffect, useRef } from 'react';
import { Anton } from 'next/font/google';
import classNames from 'classnames';
import Stack from '@/_components/layouts/stack';
import Link from 'next/link';
import LinkedinIcon from './icons/linkedin-icon';
import DotGrid from '@/_components/common/dot-grid';
import PhoneIcon from './icons/phone-icon';
import MailIcon from './icons/mail-icon';

// const interFont = Inter({ subsets: ['latin'] });
const antonFont = Anton({ weight: '400', subsets: ['latin'] });

export type HeroSectionProps = {
  // No Props
};

let isScrolling = false;

const HeroSection: FunctionComponent<HeroSectionProps> = (props) => {
  const logoRef = useRef<HTMLHeadingElement>(null);
  const professionRef = useRef<HTMLParagraphElement>(null);
  const socialLinksRef = useRef<HTMLDivElement>(null);

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
      // let scroll = window.scrollY;
      // const logo = logoRef.current;
      // const profession = professionRef.current;
      // const socialLinks = socialLinksRef.current;

      // if (logo) {
      //   logo.style.transform = `translateY(${scroll * 0.8}px)`;
      // }

      // if (profession) {
      //   const opacity = 1 - Math.min(scroll / 200, 1);
      //   profession.style.transform = `translateY(${scroll * 0.7}px)`;
      //   profession.style.opacity = opacity.toFixed(2);
      // }

      // if (socialLinks) {
      //   const opacity = 1 - Math.min(scroll / 100, 1);
      //   socialLinks.style.transform = `translateY(${scroll * 0.7}px)`;
      //   socialLinks.style.opacity = opacity.toFixed(2);
      // }
    };

    if (window.innerWidth > 768) {
      window.addEventListener('scroll', handleScroll);
    }

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      {/* <div className='fixed w-3/5 h-screen right-0 top-24 overflow-hidden pointer-events-none'>
        <DotGrid gridGap={30} dotColor={'#374151'} /> */}
      <Stack className='flex-1 h-full'>
        <Stack className='flex-1'>
          <Stack className='flex-1 justify-center items-center text-center'>
            <Stack className='items-center space-y-4'>
              <div className='w-fit relative'>
                <h1
                  className={classNames(
                    antonFont.className,
                    'font-black text-[80px] md:text-[140px] leading-[1] tracking-wide w-fit -z-10 select-none'
                  )}
                  ref={logoRef}
                >
                  <span className='text-main/60 block md:inline'>PAOLO</span>
                  <span className='text-main relative'>
                    <span>JULIAN</span>
                  </span>
                </h1>
              </div>
              <p
                className='text-main/70 text-base md:text-xl tracking-widest'
                ref={professionRef}
              >
                SOFTWARE ENGINEER
              </p>
            </Stack>
          </Stack>

          <div
            className='flex flex-row justify-end md:justify-center space-x-4 md:space-x-4 py-8'
            ref={socialLinksRef}
          >
            <Link href={'https://www.linkedin.com/in/pipz/'} target='_blank'>
              <div className='rounded-full flex justify-center items-center transition-colors bg-main/90 hover:bg-red-300 h-12 w-12'>
                <LinkedinIcon className='fill-slate-800' />
              </div>
            </Link>

            <Link
              href={'mailto:paolojulian.personal@gmail.com'}
              target='_blank'
            >
              <div className='rounded-full flex justify-center items-center transition-colors bg-main/90 hover:bg-red-300 h-12 w-12'>
                <MailIcon className='fill-slate-800' />
              </div>
            </Link>

            <Link href={'tel:09279488654'} target='_blank'>
              <div className='rounded-full flex justify-center items-center transition-colors bg-main/90 hover:bg-red-300 h-12 w-12'>
                <PhoneIcon className='fill-slate-800' />
              </div>
            </Link>
          </div>
        </Stack>
      </Stack>
    </>
  );
};

export default HeroSection;
