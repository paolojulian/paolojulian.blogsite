import React, { FunctionComponent } from 'react';

export type AppTagProps = {
  tag: string;
} & React.HtmlHTMLAttributes<HTMLParagraphElement>;

const AppTag: FunctionComponent<AppTagProps> = ({ tag, ...props }) => {
  return (
    <p
      className='rounded-full py-[7px] px-[30px] bg-primary-300/30 border border-primary-300 text-slate-700'
      {...props}
    >
      {`#${tag}`}
    </p>
  );
};

export default AppTag;
