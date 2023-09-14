'use client';
import React, { FunctionComponent } from 'react';
import Stack from '@/_components/layouts/stack';
import { SECTIONS } from '@/app/portfolio/_context/sections-context';
import classNames from 'classnames';
import SectionHeading from '@/app/portfolio/_components/common/section-heading';
import Row from '@/_components/layouts/row';
import Image from 'next/image';
import RightArrowIcon from '@/_components/icons/right-arrow-icon';
import TextInput from '@/_components/form/text-input';
import Link from 'next/link';

interface Props {
  // No Props
}

const ContactSection: FunctionComponent<Props> = (props) => {
  return (
    <section
      id={SECTIONS[4]}
      className='flex flex-row flex-1 w-full bg-slate-900 z-40 relative overflow-hidden'
    >
      <div className='absolute bottom-0 inset-x-0 -z-10'>
        <div className='aspect-[2519/888] w-screen h-auto'>
          <Image
            className='object-fill object-bottom'
            src='/assets/portfolio/polygon-wave.png'
            alt='polygon-background'
            fill
          />
        </div>
      </div>
      <Stack className='py-[50px] px-[50px] w-full space-y-[50px] max-w-[1268px] mx-auto'>
        <Row className='py-[50px] space-x-[50px]'>
          <div className='bg-white relative py-[50px] px-[30px] shadow-[0_4px_28px_rgba(0,0,0,0.25)]'>
            <div className='aspect-square w-[20px] bg-primary-400 absolute left-0 top-0'></div>
            <Stack className='space-y-[50px]'>
              <h4 className='text-[48px] font-semibold tracking-[4.64px] leading-[60px] text-slate-800'>
                GET IN
                <br /> TOUCH
              </h4>
              <Stack className='space-y-[50px] min-w-[300px]'>
                <Stack className='space-y-[20px]'>
                  <TextInput
                    autoComplete='name'
                    name='name'
                    placeholder='name'
                  />
                  <TextInput
                    autoComplete='email'
                    name='email'
                    placeholder='email'
                  />
                  <TextInput
                    name='tell me about it'
                    placeholder='tell me about it'
                  />
                </Stack>
                <button className='rounded-full py-[15px] flex justify-center items-center bg-primary-400 text-white'>
                  SEND
                </button>
              </Stack>
            </Stack>
          </div>
          <Stack className='space-y-[40px] p-[40px] text-slate-400 justify-center'>
            <Stack>
              <h5 className='text-[24px] text-accent-300/60 mb-[10px]'>
                Availability
              </h5>
              <p>Monday - Friday</p>
              <p>9AM - 6PM</p>
            </Stack>
            <Stack>
              <h5 className='text-[24px] text-accent-300/60 mb-[10px]'>
                Contact
              </h5>
              <Link href='tel:09279488654'>+63 927 948 8654</Link>
              <Link href='mailto:paolojulian.dev@gmail.com'>
                paolojulian.dev@gmail.com
              </Link>
            </Stack>
            <Stack>
              <h5 className='text-[24px] text-accent-300/60 mb-[10px]'>
                Social
              </h5>
              <Link href='https://www.linkedin.com/in/pipz/'>linkedin</Link>
              <Link href='https://www.facebook.com/profile.php?id=100095657733002'>
                facebook
              </Link>
            </Stack>
          </Stack>
        </Row>
      </Stack>
    </section>
  );
};

export default ContactSection;
