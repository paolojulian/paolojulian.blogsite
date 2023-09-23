'use client';
import React, { FunctionComponent } from 'react';
import TurnUpArrowIcon from '../icons/turn-up-arrow-icon';
import useScrolledDown from '@/_hooks/use-scrolled-down';
import classNames from 'classnames';
import ReactDOM from 'react-dom';
import usePortal from '@/_hooks/use-portal/use-portal';

export type ToTopFabProps = {
  // no props
};

const ToTopFab: FunctionComponent<ToTopFabProps> = (props) => {
  const handleClick = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const isScrolledDown = useScrolledDown(800);

  const portalRoot = usePortal('fixed');
  if (!portalRoot) {
    return;
  }

  return ReactDOM.createPortal(
    <div
      className={classNames(
        'fixed right-2 md:right-4 bottom-0',
        'transition-opacity',
        isScrolledDown ? 'opacity-100' : 'opacity-0'
      )}
      style={{ zIndex: 9999 }}
    >
      <button
        className='h-16 w-14 bg-red-400 md:hover:bg-red-300 active:scale-95 md:active:bg-red-500 flex justify-center items-center'
        style={{
          boxShadow: '0 4px 20px rgba(0,0,0,0.25)',
        }}
        onClick={handleClick}
      >
        <TurnUpArrowIcon className='w-6 h-6 stroke-main' />
      </button>
    </div>,
    portalRoot
  );
};

export default ToTopFab;
