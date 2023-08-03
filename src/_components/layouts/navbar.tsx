import Row from '@/_components/layouts/row';
import Link from 'next/link';
import React, { FunctionComponent } from 'react';

export type NavbarProps = {
  // no props
};

const Navbar: FunctionComponent<NavbarProps> = () => {
  return (
    <div className='bg-slate-900 sticky top-0 left-0 right-0 z-40'>
      <Row className='mx-auto max-w-screen-xl px-4 md:px-8 py-4 justify-between items-center'>
        <div className='select-none'>
          <Link href='/'>
            <span className='font-anton text-[24px] text-slate-400'>P</span>
          </Link>
        </div>
        <nav>
          <ul className='flex flex-row space-x-8 text-slate-400'>
            <li>
              <Link href='/blogs'>blogs</Link>
            </li>
            <li>
              <Link href='/blogs'>components</Link>
            </li>
            <li>
              <Link href='/blogs'>portfolio</Link>
            </li>
          </ul>
        </nav>
      </Row>
    </div>
  );
};

export default Navbar;
