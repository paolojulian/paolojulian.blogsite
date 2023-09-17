'use client';
import Row from '@/_components/layouts/row';
import Link from 'next/link';
import React, { FunctionComponent, useState } from 'react';
import HamburgerMenuIcon from '../icons/hamburger-menu';
import Stack from './stack';
import classNames from 'classnames';
import CloseIcon from '../icons/close-icon';
import { usePathname } from 'next/navigation';
import Container from '@/_components/layouts/container';

type Variants = 'default' | 'default-bordered';

export type NavbarProps = {
  variant?: Variants;
  fixed?: boolean;
};

const colorVariants: Record<Variants, string> = {
  default: 'bg-white text-gray-700',
  'default-bordered': 'bg-white text-gray-700',
};

const borderVariants: Record<Variants, string> = {
  default: '',
  'default-bordered': 'sm:border-l border-slate-400',
};

const WebLink: FunctionComponent<
  React.ComponentProps<typeof Link> & { isActive: boolean; name: string }
> = ({ isActive, name, ...props }) => {
  return (
    <li
      className={classNames(
        'flex flex-col justify-between items-center space-y-2',
        isActive ? 'text-gray-800' : 'text-gray-400 hover:text-red-400'
      )}
    >
      <Link {...props}>{name}</Link>
      {isActive ? <div className='w-[10px] h-[1px] bg-gray-800'></div> : null}
    </li>
  );
};

const MobileLink: FunctionComponent<
  React.ComponentProps<typeof Link> & { isActive: boolean; name: string }
> = ({ isActive, name, ...props }) => {
  return (
    <li
      className={classNames(
        'py-2',
        'border-b',
        isActive
          ? 'text-red-400 border-red-400'
          : 'text-slate-400 border-transparent'
      )}
    >
      <Link {...props}>{name}</Link>
    </li>
  );
};

const Navbar: FunctionComponent<NavbarProps> = ({
  variant = 'default',
  fixed = false,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  const pathname = usePathname();

  return (
    <>
      <div
        className={classNames(
          'fixed top-0 inset-x-0 z-40',
          colorVariants[variant]
        )}
      >
        <Container
          className={classNames(
            'flex flex-row',
            'h-navbar',
            'justify-between items-center max-w-screen-lg xl:max-w-screen-xl w-full mx-auto',
            'relative'
          )}
        >
          <div className='absolute pointer-events-none inset-0'>
            <div className='max-w-7xl w-full h-full mx-auto'>&nbsp;</div>
          </div>

          <div className='select-none'>
            <Link href='/'>
              <span className='font-capital text-[24px]'>P</span>
            </Link>
          </div>
          <nav>
            <ul className='flex-row space-x-8 hidden md:flex'>
              <WebLink href='/' name='Home' isActive={pathname === '/'} />
              <WebLink
                href='/blogs'
                name='Articles'
                isActive={pathname === '/blogs'}
              />
              <WebLink
                href='/components'
                name='Components'
                isActive={pathname === '/components'}
              />
              <WebLink href='#contact' name='Contact Us' isActive={false} />
            </ul>
            <button className='block md:hidden' onClick={handleToggleMenu}>
              <HamburgerMenuIcon />
            </button>
          </nav>
        </Container>
      </div>

      <Stack
        className={classNames(
          'block md:hidden fixed inset-0 z-40 pointer-events-none overflow-hidden',
          isOpen ? 'backdrop-blur-sm' : ''
        )}
      >
        <div
          className={classNames(
            'absolute inset-0 bg-slate-900/50 z-0',
            isOpen
              ? 'opacity-1 pointer-events-auto'
              : 'pointer-events-none opacity-0'
          )}
          onClick={handleToggleMenu}
        ></div>
        <Stack
          className={classNames(
            'fixed top-0 bottom-0 right-0 w-4/6 bg-slate-900 overflow-hidden transition-transform z-10',
            isOpen
              ? 'pointer-events-auto translate-x-0'
              : 'pointer-events-none translate-x-full'
          )}
        >
          <Row className='justify-between items-center p-4'>
            <span
              className={classNames(
                'font-capital text-[24px] text-transparent'
              )}
            >
              P
            </span>
            <button>
              <CloseIcon onClick={handleToggleMenu} />
            </button>
          </Row>
          <nav className='w-full text-right p-4 flex flex-col space-y-2'>
            <ul className='flex-row space-x-8'>
              <MobileLink
                name='About'
                href='/'
                isActive={pathname === '/'}
                onClick={handleToggleMenu}
              />
              <MobileLink
                name='Articles'
                href='/blogs'
                isActive={pathname === '/blogs'}
                onClick={handleToggleMenu}
              />
              <MobileLink
                name='Components'
                href='/components'
                isActive={pathname === '/components'}
                onClick={handleToggleMenu}
              />
              <MobileLink
                name='Contact Us'
                href='/#contact'
                isActive={pathname === '/components'}
                onClick={handleToggleMenu}
              />
            </ul>
          </nav>
        </Stack>
      </Stack>
    </>
  );
};

export default Navbar;
