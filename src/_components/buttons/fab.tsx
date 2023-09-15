import classNames from 'classnames';
import React, { ButtonHTMLAttributes, FunctionComponent } from 'react';

type Themes = 'primary' | 'gray';

const THEMES: Record<Themes, string> = {
  primary: 'bg-primary-400 hover:bg-primary-500 transition-colors',
  gray: 'bg-gray-400 hover:bg-gray-500 transition-colors'
};

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  theme?: Themes;
}

const Fab: FunctionComponent<Props> = ({
  theme = 'primary',
  className,
  ...props
}) => {
  return (
    <button
      {...props}
      className={classNames(
        className,
        'w-[50px] h-[50px] rounded-full flex items-center justify-center',
        THEMES[theme]
      )}
    ></button>
  );
};

export default Fab;
