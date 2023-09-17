import classNames from 'classnames';
import styles from './cta-button.module.css';
import React, { ButtonHTMLAttributes, FunctionComponent } from 'react';

type Variants =
  | 'default'
  | 'default-dark'
  | 'secondary'
  | 'success'
  | 'transparent';
type Sizes = 'base' | 'lg';

export type CTAButtonProps = {
  isLoading?: boolean;
  variant?: Variants;
  size?: Sizes;
  block?: boolean;
  loadingText?: string;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const bgVariants: Record<Variants, string> = {
  default: classNames(
    'bg-red-400 md:hover:bg-slate-900 md:active:bg-slate-800 active:bg-red-600 active:scale-[0.98]',
    'text-slate-50'
  ),
  'default-dark': classNames(
    'bg-slate-200 md:hover:bg-red-400 md:active:bg-red-500 active:bg-red-600 active:scale-[0.98]',
    'text-slate-700 hover:text-slate-50'
  ),
  secondary:
    'bg-slate-900 md:hover:bg-slate-600 md:active:bg-slate-400 active:bg-slate-400 :scale-[0.98] text-slate-50',
  success: 'bg-emerald-600 text-slate-50',
  transparent:
    'bg-transparent md:hover:bg-slate-900 md:active:bg-slate-400 active:bg-slate-400 :scale-[0.98] text-slate-700 md:hover:text-slate-50',
};

const sizes: Record<Sizes, string> = {
  base: 'py-3',
  lg: 'py-4',
};

const CTAButton: FunctionComponent<CTAButtonProps> = ({
  loadingText = 'loading',
  variant = 'default',
  size = 'base',
  block = true,
  isLoading = false,
  children,
  ...props
}) => {
  return (
    <div
      className={classNames(
        'relative group p-1',
        isLoading ? 'pointer-events-none' : '',
        isLoading ? styles.wave : '',
        variant === 'success' ? 'pointer-events-none' : ''
      )}
    >
      <div className='absolute top-0 left-0 w-5/6 h-3/6 border-t border-l border-slate-400 pointer-events-none'></div>

      <button
        {...props}
        className={classNames(
          'transition-colors',
          sizes[size],
          block ? 'w-full px-5' : 'w-fit px-8 max-w-full',
          isLoading ? bgVariants['transparent'] : bgVariants[variant]
        )}
      >
        {variant === 'success' ? (
          <span className='text-slate-50 uppercase'>Success</span>
        ) : isLoading ? (
          <span className={styles['dots-animation']}>{loadingText}</span>
        ) : (
          children
        )}
      </button>
      <div className='absolute bottom-0 right-0 w-5/6 h-5/6 border-b border-r border-slate-400 pointer-events-none'></div>
    </div>
  );
};

export default CTAButton;
