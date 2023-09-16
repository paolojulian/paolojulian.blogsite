'use client';
import React, { FunctionComponent } from 'react';
import Stack from '@/_components/layouts/stack';
import { SECTIONS } from '@/app/portfolio/_context/sections-context';
import Row from '@/_components/layouts/row';
import Image from 'next/image';
import TextInput from '@/_components/form/text-input';
import Link from 'next/link';
import Fab from '@/_components/buttons/fab';
import LinkedinIcon from '@/_components/icons/linkedin-icon';
import MailIcon from '@/app/portfolio/_components/icons/mail-icon';
import PhoneIcon from '@/app/portfolio/_components/icons/phone-icon';
import AppCopyright from '@/_components/common/app-copyright';

interface Props {
  // No Props
}

const FooterSection: FunctionComponent<Props> = (props) => {
  return (
    <section
      id={'#contact'}
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
      <Stack className='pt-[150px] pb-[50px] px-[50px] w-full space-y-[50px] max-w-large mx-auto justify-center items-center'>
        <div className='bg-white relative py-[50px] px-[50px] shadow-[0_4px_28px_rgba(0,0,0,0.25)] w-full lg:max-w-[500px]'>
          <div className='aspect-square w-[20px] bg-primary-400 absolute left-0 top-0'></div>
          <Stack className='space-y-[50px]'>
            <h4 className='text-[48px] font-semibold tracking-[4.64px] leading-[60px] text-slate-800'>
              GET IN
              <br />
              TOUCH
            </h4>
            <Stack className='space-y-[50px] min-w-[300px]'>
              <Stack className='space-y-[20px]'>
                <TextInput autoComplete='name' name='name' placeholder='name' />
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
            <Row className='justify-end space-x-[15px] text-white'>
              <Link href='https://www.linkedin.com/in/pipz/'>
                <Fab theme='gray'>
                  <LinkedinIcon />
                </Fab>
              </Link>
              <Link href='mailto:paolojulian.dev@gmail.com'>
                <Fab theme='gray'>
                  <MailIcon />
                </Fab>
              </Link>
              <Link href='tel:09279488654'>
                <Fab theme='gray'>
                  <PhoneIcon />
                </Fab>
              </Link>
            </Row>
          </Stack>
        </div>
        <div className='text-gray-500'>
          <AppCopyright />
        </div>

        {/* <Stack className='text-slate-500 text-[24px] space-y-[10px]'>
            <Link href={'#'}>ABOUT ME</Link>
            <Link href={'#'}>ARTICLES</Link>
            <Link href={'#'}>COMPONENTS</Link>
            <Link href={'#'}>APPS</Link>
          </Stack> */}

        {/* <Stack className='space-y-[40px] text-slate-400 items-end text-right flex-1'>
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
          </Stack> */}
      </Stack>
    </section>
  );
};

export default FooterSection;
