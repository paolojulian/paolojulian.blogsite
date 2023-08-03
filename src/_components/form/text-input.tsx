import classNames from 'classnames';
import React, { FunctionComponent, InputHTMLAttributes } from 'react';

export type TextInputProps = {
  isError?: boolean;
} & InputHTMLAttributes<HTMLInputElement>;

const TextInput: FunctionComponent<TextInputProps> = ({
  isError,
  ...props
}) => {
  return (
    <input
      {...props}
      className={classNames(
        'transition focus:outline-none bg-inherit px-3 py-2 border-b',
        isError ? 'border-red-500' : 'border-slate-400 focus:border-slate-800'
      )}
    />
  );
};

export default TextInput;
