'use client';
import React, { FunctionComponent, HtmlHTMLAttributes } from 'react';

interface Props extends HtmlHTMLAttributes<HTMLHeadingElement> {
  number: number;
  section: string;
}

const SectionHeading: FunctionComponent<Props> = ({ number, section }) => {
  return (
    <h2 className='text-[20px] text-slate-400 tracking-[6px]'>
      <span className='text-red-400'>{`0${number}`}</span>&nbsp;
      <span>{`//`}</span>&nbsp;
      <span className='uppercase'>{section}</span>
    </h2>
  );
};

export default SectionHeading;
