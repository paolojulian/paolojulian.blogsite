'use client';
import useMenuContext from '@/_context/menu-provider/use-menu-context';
import React, { FunctionComponent, useRef } from 'react';

interface Props {
  children: React.ReactNode;
}

const Main: FunctionComponent<Props> = ({ children }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { isOpen } = useMenuContext();

  return (
    <div
      ref={containerRef}
      className={[
        'flex-1 motion-reduce:transition-none',
        'ease-[cubic-bezier(0.45,0.02,0.09,0.98)]',
        'duration-500 relative',
        'bg-new-black',
        'flex flex-col',
        'h-auto w-screen overflow-x-hidden min-h-screen',
        isOpen ? 'pointer-events-none overflow-hidden' : '',
        isOpen
          ? '-translate-y-[400px] md:-translate-y-[500px]'
          : 'translate-y-0',
      ].join(' ')}
    >
      {children}
    </div>
  );
};

export default Main;
