import classNames from 'classnames';
import React, { FunctionComponent, HtmlHTMLAttributes, useMemo } from 'react';

export type RowProps = {
  // No Props
} & HtmlHTMLAttributes<HTMLDivElement>;

const Row: FunctionComponent<RowProps> = ({
  children,
  className = '',
  ...props
}) => {
  return (
    <div className={classNames('flex flex-row', className)} {...props}>
      {children}
    </div>
  );
};

export default Row;
