import classNames from 'classnames';
import React, { ButtonHTMLAttributes, FunctionComponent } from 'react';

type Themes = 'primary' | 'primary-outlined' | 'gray';

const THEMES: Record<Themes, string> = {
  primary: 'bg-primary-400 hover:bg-primary-500 group-hover/fab:bg-primary-500',
  'primary-outlined': 'border border-primary-400 bg-primary-300/30',
  gray: 'bg-gray-400 hover:bg-gray-500',
};

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  theme?: Themes;
}

const Fab: FunctionComponent<Props> = ({
  theme = 'primary',
  disabled = false,
  className,
  ...props
}) => {
  return (
    <button
      {...props}
      disabled={disabled}
      className={classNames(
        className,
        'w-[50px] h-[50px] rounded-full flex items-center justify-center shadow-[0_4px_28px_rgb(0,0,0,0.1)]',
        'transition-colors active:scale-95',
        disabled ? 'pointer-events-none bg-gray-300' : THEMES[theme]
      )}
    ></button>
  );
};

export default Fab;
