import AppCopyright from '@/_components/common/app-copyright';
import TextInput from '@/_components/form/text-input';
import RightArrowIcon from '@/_components/icons/right-arrow-icon';
import Container from '@/_components/layouts/container';
import Navbar from '@/_components/layouts/navbar';
import Row from '@/_components/layouts/row';
import Stack from '@/_components/layouts/stack';
import classNames from 'classnames';
import Link from 'next/link';
import React, { FunctionComponent } from 'react';

interface Props {
  // no props
}

const ContactPage: FunctionComponent<Props> = (props) => {
  return (
    <>
      <div className='font-sans'>
        <Navbar />
        <Stack className='border-l md:border-l-4 lg:border-l-8 border-primary-300 min-h-screen py-navbar'>
          <Container className='mx-auto w-full max-w-screen-2xl'>
            <div className='flex flex-col lg:flex-row py-32 bg-white gap-16 2xl:gap-32 justify-between lg:items-center w-full'>
              {/* Heading */}
              <Stack className='gap-16'>
                <Stack className='text-8xl font-medium'>
                  <div className='text-slate-400'>Get in touch.</div>
                  <div className='text-slate-800'>
                    Let&lsquo;s work
                    <br />
                    together.
                  </div>
                </Stack>

                <div className='flex flex-row flex-wrap text-slate-400 gap-14'>
                  <Stack className='flex-1 w-[300px]'>
                    <p className='mb-1 text-slate-700'>Contact</p>
                    <p>paolovincentarch@gmail.com</p>
                    <p>(+63)9279488654</p>
                  </Stack>
                  <Stack className='flex-1 w-[300px]'>
                    <p className='mb-1 text-slate-700'>Address</p>
                    <p>Baguio City, Philippines</p>
                    <p>2600</p>
                  </Stack>
                </div>
                <div className='flex flex-row flex-wrap text-slate-400'>
                  <Stack>
                    <p className='mb-1 text-slate-700'>Socials</p>
                    <Link href='#'>Linkedin</Link>
                    <Link href='#'>Finkedin</Link>
                  </Stack>
                </div>
              </Stack>

              <Stack className='flex-1 gap-12 justify-end max-w-2xl min-w-[450px]'>
                <h3 className='text-4xl text-slate-700 font-medium'>
                  Tell us about your project
                </h3>
                <Stack className='gap-8'>
                  <TextInput name='name' placeholder='Your name' />
                  <TextInput name='email' placeholder='Your email' />
                  <TextInput name='mobile' placeholder='Your contact number' />
                  <TextInput name='message' placeholder='Tell me about it' />
                </Stack>
                <button
                  className={classNames(
                    'transition-colors',
                    'bg-primary-400 md:hover:bg-primary-500 active:scale-95', // background
                    'text-xl text-white', // font
                    'py-3.5 pr-16 pl-20 ', // spacings
                    'text-xl w-fit flex flex-row items-center gap-2'
                  )}
                >
                  <span>SEND</span>
                  <RightArrowIcon />
                </button>
              </Stack>
            </div>
            <div className='border-t border-slate-200 w-full py-8 text-slate-400'>
              <AppCopyright />
            </div>
          </Container>
        </Stack>
      </div>
    </>
  );
};

export default ContactPage;
