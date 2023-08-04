import React, { FunctionComponent } from 'react';

export type AppTagProps = {
  tag: string;
} & React.HtmlHTMLAttributes<HTMLParagraphElement>;

const AppTag: FunctionComponent<AppTagProps> = ({ tag, ...props }) => {
  return (
    <p className='uppercase font-semibold text-slate-700 italic' {...props}>
      {`//${tag}`}
    </p>
  );
};

export default AppTag;
