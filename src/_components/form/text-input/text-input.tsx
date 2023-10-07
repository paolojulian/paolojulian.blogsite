import { DATA_TEST } from '@/_components/form/text-input/text-input.constants';
import classNames from 'classnames';
import React, {
  FunctionComponent,
  InputHTMLAttributes,
  useMemo,
  useState,
} from 'react';

type Variants = 'default' | 'default-dark';

const colorVariants: Record<Variants, string> = {
  default: 'border-gray-800 text-slate-700',
  'default-dark':
    'border-slate-600 focus:border-slate-50 text-slate-200 placeholder-slate-500',
};

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  id: string;
  label: string;
  name: string;
  variant?: Variants;
  isError?: boolean;
  testId?: string;
}

const TextInput: FunctionComponent<Props> = ({
  variant = 'default',
  testId = DATA_TEST.input,
  id,
  isError,
  label,
  name,
  value,
  onFocus = () => {},
  onBlur = () => {},
  ...props
}) => {
  const [isFocused, setIsFocused] = useState(!!value || props.autoFocus);

  const isFocusedComputed = useMemo(
    () => !!value || isFocused,
    [value, isFocused]
  );

  const handleFocus = (e: React.FocusEvent<HTMLInputElement>) => {
    onFocus(e);
    setIsFocused(true);
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    onBlur(e);
    setIsFocused(false);
  };

  return (
    <div
      className={classNames(
        'relative w-full group',
        'transition-colors bg-inherit border-b',
        isFocusedComputed
          ? 'border-opacity-100'
          : 'border-opacity-20 hover:border-opacity-50',
        isError ? 'border-red-500' : colorVariants[variant]
      )}
      data-testid={DATA_TEST.container}
    >
      {/* Top label (When text input is in focused state) */}
      <label
        className={classNames(
          'absolute left-3 top-0',
          'transition duration-200 pointer-events-none',
          'font-medium text-sm text-gray-600',
          isFocusedComputed ? 'scale-100 opacity-100' : 'scale-0 opacity-0'
        )}
        htmlFor={id}
        data-testid={DATA_TEST.label}
      >
        {label}
      </label>

      {/* Placeholder label (When textinput is not in focused state) */}
      <div
        className={classNames(
          'absolute bottom-2 left-2',
          'transition duration-200 pointer-events-none',
          'text-lg text-gray-400',
          isFocusedComputed ? 'scale-0 opacity-0' : 'scale-100 opacity-100'
        )}
      >
        {label}
      </div>

      <input
        {...props}
        id={id}
        name={name}
        value={value}
        className={classNames(
          'w-full px-3 pt-6 pb-2',
          'bg-inherit',
          'focus:outline-none transition-opacity',
          isFocusedComputed ? 'opacity-100' : 'opacity-0'
        )}
        onFocus={handleFocus}
        onBlur={handleBlur}
        data-testid={testId}
      />
    </div>
  );
};

export default TextInput;
