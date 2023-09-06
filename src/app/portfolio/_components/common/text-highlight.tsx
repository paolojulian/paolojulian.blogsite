import React, { FunctionComponent, HtmlHTMLAttributes } from 'react';

export type TextHighlightProps = {
  // No Props
} & HtmlHTMLAttributes<HTMLSpanElement>;

const TextHighlight: FunctionComponent<TextHighlightProps> = (props) => {
  return <span {...props} className='font-medium text-slate-800'></span>;
};

export default TextHighlight;
