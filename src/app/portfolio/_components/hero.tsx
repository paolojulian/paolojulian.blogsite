import React, { FunctionComponent } from 'react';
import { Anton } from 'next/font/google';
import classNames from 'classnames';
import Stack from '@/_components/layouts/stack';
import Row from '@/_components/layouts/row';
import Link from 'next/link';

// const interFont = Inter({ subsets: ['latin'] });
const antonFont = Anton({ weight: '400', subsets: ['latin'] });

export type HeroSectionProps = {
  // No Props
};

const contactItems: { title: string; link: string }[] = [
  {
    title: 'facebook',
    link: 'https://www.facebook.com/profile.php?id=100078321445396',
  },
  {
    title: 'linkedin',
    link: 'https://www.linkedin.com/in/pipz/',
  },
  {
    title: 'paolojulian.personal@gmail.com',
    link: 'mailto:paolojulian.personal@gmail.com',
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
    <Stack className='min-h-screen h-full py-10'>
      <Row className='justify-end'>
        <nav>
          <ul className='flex space-x-8'>
            <NavLink name='about' href='/portfolio#about' />
            <NavLink name='projects' href='/portfolio#projects' />
            <NavLink name='contact' href='/portfolio#contact' />
            <NavLink name='components' href='/blogs' />
            <NavLink name='blogs' href='/blogs' />
          </ul>
        </nav>
      </Row>

      <Stack className='flex-1'>
        <Stack className='flex-1 justify-center'>
          <p className='font-medium text-xl text-slate-500 -ml-4'>
            hello, I am
          </p>
          <Stack>
            <h1
              className={classNames(
                antonFont.className,
                'font-black text-[80px] lg:text-[96px] leading-[1] tracking-widest'
              )}
            >
              <span className='text-slate-700 block md:inline'>PAOLO</span>
              <span className='text-slate-900'>JULIAN</span>
            </h1>
            <p className='font-sans font-medium text-slate-600 text-lg lg:text-xl tracking-[5px] md:tracking-[22.5px] lg:tracking-[20.5px]'>
              SOFTWARE ENGINEER
            </p>
          </Stack>
        </Stack>

        <ol className='flex justify-between md:justify-normal md:space-x-10'>
          {contactItems.map((item) => (
            <NavLink
              href={item.link}
              key={item.title}
              name={item.title}
              target='_blank'
            />
          ))}
        </ol>
      </Stack>
    </Stack>
  );
};

export default HeroSection;
