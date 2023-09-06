'use client';
import IntersectProvider, {
  IntersectContext,
} from '@/_context/IntersectContext';
import classNames from 'classnames';
import React, { FunctionComponent, HtmlHTMLAttributes } from 'react';

export type SectionHeadingProps = {
  // No Props
} & HtmlHTMLAttributes<HTMLHeadingElement>;

const SectionHeading: FunctionComponent<SectionHeadingProps> = (props) => {
  return (
    <h2 className='font-capital uppercase font-medium text-7xl text-slate-900'>
      {props.children}
    </h2>
  );
};

export default SectionHeading;
