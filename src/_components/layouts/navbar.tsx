'use client';
import Row from '@/_components/layouts/row';
import Link from 'next/link';
import React, { FunctionComponent, useState } from 'react';
import HamburgerMenuIcon from '../icons/hamburger-menu';
import Stack from './stack';
import classNames from 'classnames';
import CloseIcon from '../icons/close-icon';
import { usePathname } from 'next/navigation';

type Variants = 'default' | 'light';

export type NavbarProps = {
  variant?: Variants;
};

const colorVariants: Record<Variants, string> = {
  default: 'bg-slate-900 text-slate-400',
  light: 'bg-main text-slate-600',
};

const borderVariants: Record<Variants, string> = {
  default: '',
  light: 'border-l border-slate-400',
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
          : 'hover:text-red-400 border-transparent'
      )}
    >
      <Link {...props}>{name}</Link>
    </li>
  );
};

const Navbar: FunctionComponent<NavbarProps> = ({ variant = 'default' }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  const pathname = usePathname();

  return (
    <>
      <div
        className={classNames(
          'sticky top-0 left-0 right-0 z-30',
          colorVariants[variant]
        )}
      >
        <Row
          className={classNames(
            '2xl:max-w-screen-xl max-w-screen-lg mx-auto px-4 md:px-8 py-4 justify-between items-center',
            borderVariants[variant]
          )}
        >
          <div className='select-none'>
            <Link href='/'>
              <span className='font-anton text-[24px]'>P</span>
            </Link>
          </div>
          <nav>
            <ul className='flex-row space-x-8 hidden md:flex'>
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
          'block md:hidden fixed inset-0 z-40 pointer-events-none overflow-hidden'
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
              className={classNames('font-anton text-[24px] text-transparent')}
            >
              P
            </span>
            <button>
              <CloseIcon onClick={handleToggleMenu} />
            </button>
          </Row>
          <nav className='w-full text-right p-4 flex flex-col space-y-2'>
            <ul className='flex-row space-x-8'>
              <li
                className={classNames(
                  'py-2',
                  'text-red-400 border-b border-red-400'
                )}
                onClick={handleToggleMenu}
              >
                <Link href='/blogs'>blogs</Link>
              </li>
              <li
                className={classNames(
                  'py-2',
                  'text-slate-400 border-b border-transparent'
                )}
                onClick={handleToggleMenu}
              >
                <Link href='/components'>components</Link>
              </li>
              <li
                className={classNames(
                  'py-2',
                  'text-slate-400 border-b border-transparent'
                )}
                onClick={handleToggleMenu}
              >
                <Link href='/portfolio'>portfolio</Link>
              </li>
            </ul>
          </nav>
        </Stack>
      </Stack>
    </>
  );
};

export default Navbar;
