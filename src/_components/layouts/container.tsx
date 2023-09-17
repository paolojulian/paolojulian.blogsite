import classNames from 'classnames';
import React, { FunctionComponent, HtmlHTMLAttributes } from 'react';

interface Props extends HtmlHTMLAttributes<HTMLDivElement> {
  // no props
}

const Container: FunctionComponent<Props> = ({ className, ...props }) => {
  return (
    <div
      {...props}
      className={classNames('px-[20px] lg:px-[50px]', className)}
    ></div>
  );
};

export default Container;
