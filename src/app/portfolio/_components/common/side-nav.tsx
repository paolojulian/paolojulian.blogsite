'use client';
import Stack from '@/_components/layouts/stack';
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
    </Stack>
  );
};

export default SideNav;
