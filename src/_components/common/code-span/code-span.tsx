import { DATA_TEST } from '@/_components/common/code-span/code-span.constants';
import classNames from 'classnames';
import React, { FunctionComponent } from 'react';

interface Props {
  children: React.ReactNode;
  language: string;
}

const CodeSpan: FunctionComponent<Props> = ({ children, language }) => {
  return (
    <code
      className={classNames(
        'px-2.5 py-1.5 text-base font-medium rounded text-accent-700 bg-slate-800/10',
        'font-serif'
      )}
      data-testid={DATA_TEST.container}
      data-language={language}
    >
      {children}
    </code>
  );
};

export default CodeSpan;
