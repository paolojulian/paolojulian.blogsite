'use client';
import Row from '@/_components/layouts/row';
import Link from 'next/link';
import React, { FunctionComponent, useState } from 'react';
import HamburgerMenuIcon from '../icons/hamburger-menu';
import Stack from './stack';
import classNames from 'classnames';
import CloseIcon from '../icons/close-icon';
import { usePathname } from 'next/navigation';

export type NavbarProps = {
  // no props
};

const WebLink: FunctionComponent<
  React.ComponentProps<typeof Link> & { isActive: boolean; name: string }
> = ({ isActive, name, ...props }) => {
  return (
    <li
      className={classNames(
        'border-b',
        isActive
          ? 'text-red-400 border-red-400'
          : 'text-slate-400 hover:text-red-400 border-transparent'
      )}
    >
      <Link {...props}>{name}</Link>
    </li>
  );
};

const Navbar: FunctionComponent<NavbarProps> = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  const pathname = usePathname();

  return (
    <>
      <div className='bg-slate-900 sticky top-0 left-0 right-0 z-40'>
        <Row className='mx-auto max-w-screen-xl px-4 md:px-8 py-4 justify-between items-center'>
          <div className='select-none'>
            <Link href='/'>
              <span className='font-anton text-[24px] text-slate-400'>P</span>
            </Link>
          </div>
          <nav>
            <ul className='flex-row space-x-8 text-slate-400 hidden md:flex'>
              <WebLink
                href='/blogs'
                name='blogs'
                isActive={!!pathname?.match(/blogs/)}
              />
              <WebLink
                href='/components'
                name='components'
                isActive={!!pathname?.match(/components/)}
              />
              <WebLink
                href='/portfolio'
                name='portfolio'
                isActive={!!pathname?.match(/portfolio/)}
              />
            </ul>
            <button className='block md:hidden' onClick={handleToggleMenu}>
              <HamburgerMenuIcon />
            </button>
          </nav>
        </Row>
      </div>
      <Stack
        className={classNames(
          'fixed block md:hidden inset-0 bg-slate-900 z-50 overflow-hidden transition-transform',
          isOpen
            ? 'pointer-events-auto translate-x-0'
            : 'pointer-events-none translate-x-full'
        )}
      >
        <Row className='justify-between items-center p-4'>
          <Link href='/'>
            <span className='font-anton text-[24px] text-slate-400'>P</span>
          </Link>
          <button>
            <CloseIcon onClick={handleToggleMenu} />
          </button>
        </Row>
        <nav className='w-full text-right p-4 flex flex-col space-y-2'>
          <ul className='flex-row space-x-8 text-slate-400'>
            <li
              className={classNames(
                'py-2',
                'text-red-400 border-b border-red-400'
              )}
            >
              <Link href='/blogs'>blogs</Link>
            </li>
            <li
              className={classNames(
                'py-2',
                'text-slate-400 border-b border-transparent'
              )}
            >
              <Link href='/components'>components</Link>
            </li>
            <li
              className={classNames(
                'py-2',
                'text-slate-400 border-b border-transparent'
              )}
            >
              <Link href='/portfolio'>portfolio</Link>
            </li>
          </ul>
        </nav>
      </Stack>
    </>
  );
};

export default Navbar;
