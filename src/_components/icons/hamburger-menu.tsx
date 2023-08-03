import React, { FunctionComponent } from 'react';

export type HamburgerMenuIconProps = {
  // no props
} & React.SVGAttributes<SVGElement>;

const HamburgerMenuIcon: FunctionComponent<HamburgerMenuIconProps> = (props) => {
  return (
    <svg
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <path
        d='M4 6H20M4 12H20M13 18H20'
        stroke='#94A3B8'
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
};

export default HamburgerMenuIcon;
