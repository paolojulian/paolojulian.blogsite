import React, { FunctionComponent } from 'react';
import { Anton } from 'next/font/google';
import classNames from 'classnames';
import Stack from '@/_components/layouts/stack';
import Row from '@/_components/layouts/row';
import Link from 'next/link';
import FacebookIcon from './icons/facebook-icon';
import LinkedinIcon from './icons/linkedin-icon';
import EmailIcon from './icons/email-icon';

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
    <Stack className='flex-1 h-full'>
      <Stack className='flex-1'>
        <Stack className='flex-1 justify-center'>
          <p className='text-xl text-slate-500'>hello, I am</p>
          <Stack>
            <div className='w-fit relative'>
              <h1
                className={classNames(
                  antonFont.className,
                  'font-black text-[80px] md:text-[140px] leading-[1] tracking-wide w-fit'
                )}
              >
                <span className='text-slate-600 block md:inline'>PAOLO</span>
                <span className='text-slate-900 relative'>
                  <span>JULIAN</span>
                  <div className='absolute translate-y-1 top-1/2 -right-3 w-16 h-[3px] bg-red-400'></div>
                </span>
              </h1>
            </div>
            <p className='text-slate-600 text-base md:text-2xl tracking-[5px] md:tracking-[29.5px]'>
              SOFTWARE ENGINEER
            </p>
          </Stack>
        </Stack>

        <ol className='flex justify-end md:justify-normal space-x-4 md:space-x-10 py-3'>
          <li className='md:hover:text-red-400'>
            <Link
              href={'https://www.facebook.com/profile.php?id=100078321445396'}
              target='_blank'
            >
              <span className='hidden md:block'>facebook</span>
              <span className='block md:hidden'>
                <FacebookIcon />
              </span>
            </Link>
          </li>
          <li className='md:hover:text-red-400'>
            <Link href={'https://www.linkedin.com/in/pipz/'} target='_blank'>
              <span className='hidden md:block'>linkedin</span>
              <span className='block md:hidden'>
                <LinkedinIcon />
              </span>
            </Link>
          </li>
          <li className='md:hover:text-red-400'>
            <Link
              href={'mailto:paolojulian.personal@gmail.com'}
              target='_blank'
            >
              <span className='hidden md:block'>
                paolojulian.personal@gmail.com
              </span>
              <span className='block md:hidden'>
                <EmailIcon />
              </span>
            </Link>
          </li>
        </ol>
      </Stack>
    </Stack>
  );
};

export default HeroSection;
