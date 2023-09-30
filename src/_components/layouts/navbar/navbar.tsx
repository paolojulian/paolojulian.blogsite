'use client';
import Row from '@/_components/layouts/row';
import Link from 'next/link';
import React, { FunctionComponent, useState } from 'react';
import HamburgerMenuIcon from '../../icons/hamburger-menu';
import Stack from '../stack';
import classNames from 'classnames';
import CloseIcon from '../../icons/close-icon';
import { usePathname } from 'next/navigation';
import Container from '@/_components/layouts/container';
import WebLink from './navbar.weblink';
import { navbarItems } from './navbar.constants';
import GlobalSearchModal from '@/_components/partials/global-search-modal';
import useModal from '@/_hooks/use-modal';
import GlobalSearchBtn from '@/_components/common/global-search-btn';

interface Props {
  // no props
}

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

const Navbar: FunctionComponent<Props> = () => {
  const {
    isOpen: isGlobalSearchModalOpen,
    setIsOpen: setIsGlobalSearchModalOpen,
  } = useModal();

  const [isOpen, setIsOpen] = useState(false);

  const handleToggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  const handleClickGlobalSearchBtn = () => {
    setIsGlobalSearchModalOpen((prev) => !prev);
  };
  const handleCloseGlobalSearch = () => {
    setIsGlobalSearchModalOpen(false);
  };

  const pathname = usePathname();

  return (
    <>
      <div
        className={classNames(
          'w-full z-40 h-fit py-6',
          'border-l md:border-l-4 lg:border-l-8 border-primary-300',
          'font-medium'
        )}
      >
        <Container
          className={classNames(
            'justify-between items-center w-full mx-auto',
            'flex flex-row',
            'h-navbar',
            'relative',
            'bg-white text-gray-700'
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
            <ul className='flex-row space-x-8 hidden md:flex items-center'>
              {navbarItems.map((item, i) => (
                <WebLink
                  href={item.href}
                  isActive={item.isActive(pathname)}
                  name={item.name}
                  key={i}
                />
              ))}
              <GlobalSearchBtn onClick={handleClickGlobalSearchBtn} />
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
              {navbarItems.map((item, i) => (
                <MobileLink
                  key={i}
                  name={item.name}
                  href={item.href}
                  isActive={item.isActive(pathname)}
                  onClick={handleToggleMenu}
                />
              ))}
            </ul>
          </nav>
        </Stack>
      </Stack>
      <GlobalSearchModal
        isOpen={isGlobalSearchModalOpen}
        onClose={handleCloseGlobalSearch}
      />
    </>
  );
};

export default Navbar;
