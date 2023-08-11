'use client';
import React, { FunctionComponent } from 'react';
import TurnUpArrowIcon from '../icons/turn-up-arrow-icon';

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

  return (
    <div className='fixed right-4 bottom-4 z-50'>
      <button
        className='h-12 w-12 rounded-full bg-slate-800 md:hover:bg-red-400 active:scale-95 md:active:bg-red-500 flex justify-center items-center'
        style={{
          boxShadow: '0 4px 4px rgba(0,0,0,0.5)'
        }}
        onClick={handleClick}
      >
        <TurnUpArrowIcon className='w-6 h-6 stroke-main' />
      </button>
    </div>
  );
};

export default ToTopFab;
