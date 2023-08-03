import classNames from 'classnames';
import React, { FunctionComponent, InputHTMLAttributes } from 'react';

type Variants = 'default' | 'default-dark'

const colorVariants: Record<Variants, string> = {
  default: 'border-slate-400 focus:border-slate-800 text-slate-700',
  'default-dark': 'border-slate-400 focus:border-slate-50 text-slate-200 placeholder-slate-500'
}

export type TextInputProps = {
  variant?: Variants;
  isError?: boolean;
} & InputHTMLAttributes<HTMLInputElement>;

const TextInput: FunctionComponent<TextInputProps> = ({
  variant = 'default',
  isError,
  ...props
}) => {
  return (
    <input
      {...props}
      className={classNames(
        'transition focus:outline-none bg-inherit px-3 py-2 border-b',
        isError ? 'border-red-500' : colorVariants[variant]
      )}
    />
  );
};

export default TextInput;
