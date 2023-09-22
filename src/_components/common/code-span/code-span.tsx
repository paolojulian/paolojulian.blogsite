import classNames from 'classnames';
import React, { FunctionComponent } from 'react';

interface Props {
  children: React.ReactNode;
  language: string;
}

const CodeSpan: FunctionComponent<Props> = ({ children, language }) => {
  return (
    <code
      className={classNames('px-2 py-1 text-base rounded bg-slate-800/10')}
      data-language={language}
    >
      {children}
    </code>
  );
};

export default CodeSpan;
