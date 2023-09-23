import { COLOR_VARIANTS, DATA_TEST, Variants } from './text-input.constants';
import classNames from 'classnames';
import React, { FunctionComponent, InputHTMLAttributes } from 'react';

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
        isError ? 'border-red-500' : COLOR_VARIANTS[variant]
      )}
      data-testid={DATA_TEST.container}
    />
  );
};

export default TextInput;
