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

const SideNav: FunctionComponent<Props> = (props) => {
  const { activeSection } = useSections();

  return (
    <Stack className='fixed inset-0 max-w-web lg:hidden mx-auto z-40 pointer-events-none'>
      <Stack className='w-[100px] h-full justify-center sticky top-0 left-0 space-y-[10px]'>
        {SECTIONS.map((section, i) =>
          i > 0 ? (
            <Link
              className='flex flex-row justify-between items-center transition hover:bg-slate-200 pl-4'
              href={`#${section}`}
              key={i}
            >
              <span
                className={classNames(
                  'font-black text-[16px] tracking-[-0.48px]',
                  activeSection === section ? 'text-gray-800' : 'text-gray-300'
                )}
              >
                {`0${i}`}
              </span>
              <div
                className={classNames(
                  'w-[3px] h-[40px]',
                  activeSection === section
                    ? 'bg-primary-400'
                    : 'bg-transparent'
                )}
              ></div>
            </Link>
          ) : null
        )}
      </Stack>
    </Stack>
  );
};

export default SideNav;
