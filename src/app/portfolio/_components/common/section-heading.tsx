import React, { FunctionComponent, HtmlHTMLAttributes } from 'react';

export type SectionHeadingProps = {
  // No Props
} & HtmlHTMLAttributes<HTMLHeadingElement>;

const SectionHeading: FunctionComponent<SectionHeadingProps> = (props) => {
  return (
    <h2 className='font-medium text-base text-slate-500'>{props.children}</h2>
  );
};

export default SectionHeading;
