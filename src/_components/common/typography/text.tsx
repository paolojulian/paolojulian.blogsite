import React, { FunctionComponent } from 'react';

interface Props {
  as?: keyof JSX.IntrinsicElements;
  children?: React.ReactNode;
  className?: string;
}

const Text: FunctionComponent<Props> = ({
  as: Element = 'p',
  children = null,
  className = '',
}) => {
  return (
    <Element className={['font-sans', className].join(' ')}>
      {children}
    </Element>
  );
};

export default Text;
