'use client';
import React, { FunctionComponent } from 'react';
import { AppProgressBar } from 'next-nprogress-bar';

interface Props {
  // no props
}

const ProgressBar: FunctionComponent<Props> = () => {
  return (
    <AppProgressBar
      height='3px'
      color='#1f2937'
      options={{ showSpinner: false, speed: 5000, easing: 'ease' }}
      shallowRouting
    />
  );
};

export default ProgressBar;
