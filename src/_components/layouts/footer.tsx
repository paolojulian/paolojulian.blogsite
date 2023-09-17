'use client';
import React, { FunctionComponent } from 'react';
import Stack from '@/_components/layouts/stack';
import Row from '@/_components/layouts/row';
import Image from 'next/image';
import Link from 'next/link';
import Fab from '@/_components/buttons/fab';
import LinkedinIcon from '@/_components/icons/linkedin-icon';
import MailIcon from '@/app/portfolio/_components/icons/mail-icon';
import PhoneIcon from '@/app/portfolio/_components/icons/phone-icon';
import AppCopyright from '@/_components/common/app-copyright';
import Container from '@/_components/layouts/container';
import ContactForm from '@/_components/form/contact-form';
import useContactForm from '@/app/portfolio/_hooks/useContactForm';

interface Props {
  // No Props
}

const FooterSection: FunctionComponent<Props> = (props) => {
  const {
    isLoading: isSubmittingContactForm,
    handleSubmit,
    isFinished,
  } = useContactForm();

  return (
    <section
      id={'#contact'}
      className='flex flex-row flex-1 w-full bg-slate-900 z-30 relative overflow-hidden'
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
      <Container className='pt-[150px] pb-[50px] flex flex-col w-full space-y-[50px] max-w-large mx-auto justify-center items-center'>
        <Container className='bg-white relative py-[50px] shadow-[0_4px_28px_rgba(0,0,0,0.25)] w-full md:max-w-[500px]'>
          <div className='aspect-square w-[20px] bg-primary-400 absolute left-0 top-0'></div>
          <Stack className='space-y-[50px]'>
            <h4 className='text-[48px] font-semibold tracking-[4.64px] leading-[60px] text-slate-800'>
              GET IN
              <br />
              TOUCH
            </h4>

            <ContactForm
              isLoading={isSubmittingContactForm}
              isFinished={isFinished}
              onSubmit={handleSubmit}
            />

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
        </Container>
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
      </Container>
    </section>
  );
};

export default FooterSection;
