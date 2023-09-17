'use client';
import Fab from '@/_components/buttons/fab';
import LinkedinIcon from '@/_components/icons/linkedin-icon';
import Stack from '@/_components/layouts/stack';
import MailIcon from '@/app/portfolio/_components/icons/mail-icon';
import PhoneIcon from '@/app/portfolio/_components/icons/phone-icon';
import {
  SECTIONS,
  useSections,
} from '@/app/portfolio/_context/sections-context';
import classNames from 'classnames';
import Link from 'next/link';
import React, { FunctionComponent } from 'react';

interface Props {
  // no props
}

const SideNav: FunctionComponent<Props> = () => {
  const { activeSection } = useSections();

  return (
    <Stack className='fixed inset-0 xl:max-w-screen-lg 2xl:max-w-screen-xl hidden lg:flex mx-auto'>
      <Stack className='max-w-[100px] w-full h-full justify-center sticky top-0 left-0 space-y-[10px] -translate-x-full'>
        {SECTIONS.map((section, i) => (
          <Link
            className='flex flex-row justify-between items-center transition pl-4 group w-full'
            href={`#${section}`}
            key={i}
          >
            <span
              className={classNames(
                'font-black text-[16px] tracking-[-0.48px]',
                activeSection === section
                  ? 'text-gray-800'
                  : 'text-gray-300 transition-colors group-hover:text-gray-700'
              )}
            >
              {`0${i}`}
            </span>
            <div
              className={classNames(
                'w-[3px] h-[40px]',
                activeSection === section ? 'bg-primary-400' : 'bg-transparent'
              )}
            ></div>
          </Link>
        ))}
      </Stack>

      <Stack className='absolute right-0 inset-y-0 translate-x-full hidden lg:flex pl-8'>
        <Stack className='w-[100px] h-full justify-center space-y-[15px] text-white'>
          <Link href='https://www.linkedin.com/in/pipz/'>
            <Fab size='sm'>
              <LinkedinIcon className='w-3.5 h-auto' />
            </Fab>
          </Link>
          <Link href='mailto:paolojulian.dev@gmail.com'>
            <Fab size='sm'>
              <MailIcon className='w-4 h-auto' />
            </Fab>
          </Link>
          <Link href='tel:09279488654'>
            <Fab size='sm'>
              <PhoneIcon className='w-4 h-auto' />
            </Fab>
          </Link>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default SideNav;
