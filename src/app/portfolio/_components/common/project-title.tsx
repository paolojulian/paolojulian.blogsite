import classNames from 'classnames';
import React, { FunctionComponent, HtmlHTMLAttributes } from 'react';

type Sizes = 'base' | 'lg';

const fontSizes: Record<Sizes, string> = {
  base: 'text-xl md:text-3xl',
  lg: 'text-3xl md:text-5xl',
};

export type ProjectTitleProps = {
  size?: Sizes;
} & HtmlHTMLAttributes<HTMLHeadingElement>;

const ProjectTitle: FunctionComponent<ProjectTitleProps> = ({
  size = 'base',
  ...props
}) => {
  return (
    <h3
      {...props}
      className={classNames('font-bold text-slate-800', fontSizes[size])}
    ></h3>
  );
};

export default ProjectTitle;
