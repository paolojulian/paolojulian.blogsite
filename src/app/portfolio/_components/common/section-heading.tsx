import React, { FunctionComponent, HtmlHTMLAttributes } from 'react';

export type SectionHeadingProps = {
  // No Props
} & HtmlHTMLAttributes<HTMLHeadingElement>;

const SectionHeading: FunctionComponent<SectionHeadingProps> = (props) => {
  return (
    <h2 className='md:-ml-4 text-base text-slate-400'>
      {props.children}
    </h2>
  );
};

export default SectionHeading;
