import React, { FunctionComponent } from 'react';
import { Anton } from 'next/font/google';
import classNames from 'classnames';
import Stack from '@/_components/layouts/stack';
import Row from '@/_components/layouts/row';
import Link from 'next/link';
import FacebookIcon from './icons/facebook-icon';
import LinkedinIcon from './icons/linkedin-icon';
import EmailIcon from './icons/email-icon';
import DotGrid from '@/_components/common/dot-grid';
import PhoneIcon from './icons/phone-icon';
import MailIcon from './icons/mail-icon';

// const interFont = Inter({ subsets: ['latin'] });
const antonFont = Anton({ weight: '400', subsets: ['latin'] });

export type HeroSectionProps = {
  // No Props
};

const contactItems: {
  title: string;
  link: string;
  // icon: React.ReactNode
}[] = [
  {
    title: 'facebook',
    link: 'https://www.facebook.com/profile.php?id=100078321445396',
    // icon: FacebookIcon,
  },
  {
    title: 'linkedin',
    link: 'https://www.linkedin.com/in/pipz/',
    // icon: FacebookIcon
  },
  {
    title: 'paolojulian.personal@gmail.com',
    link: 'mailto:paolojulian.personal@gmail.com',
    // icon: () => FacebookIcon,
  },
];

const NavLink = ({
  name,
  ...props
}: React.ComponentProps<typeof Link> & { name: string }) => (
  <li className='md:hover:text-red-400'>
    <Link {...props}>{name}</Link>
  </li>
);

const HeroSection: FunctionComponent<HeroSectionProps> = (props) => {
  return (
    <>
      <div className='fixed w-3/5 h-screen right-0 top-24 -z-20 overflow-hidden pointer-events-none'>
        <DotGrid gridGap={30} dotColor={'#11182720'} />
      </div>
      <Stack className='flex-1 h-full'>
        <Stack className='flex-1'>
          <Stack className='flex-1 justify-center items-center text-center'>
            <Stack className='items-center'>
              <div className='w-fit relative'>
                <h1
                  className={classNames(
                    antonFont.className,
                    'font-black text-[80px] md:text-[140px] leading-[1] tracking-wide w-fit'
                  )}
                >
                  <span className='text-main/60 block md:inline'>PAOLO</span>
                  <span className='text-main relative'>
                    <span>JULIAN</span>
                    <div className='absolute translate-y-1 top-1/2 -right-3 w-16 h-[3px] bg-red-400'></div>
                  </span>
                </h1>
              </div>
              <p className='text-main/70 text-base md:text-xl tracking-widest'>
                SOFTWARE ENGINEER
              </p>
            </Stack>
          </Stack>

          <Row className='justify-end md:justify-center space-x-4 md:space-x-4 py-8'>
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
          </Row>
        </Stack>
      </Stack>
    </>
  );
};

export default HeroSection;
