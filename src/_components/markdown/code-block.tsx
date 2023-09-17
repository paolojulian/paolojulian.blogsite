'use client';
import classNames from 'classnames';
import { FunctionComponent, useState } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark as style } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import Stack from '../layouts/stack';
import Row from '../layouts/row';

export type CodeBlockProps = {
  children: any;
  className: string;
};

const CodeBlock: FunctionComponent<CodeBlockProps> = ({
  children,
  className,
}) => {
  const language = className.replace('language-', '');
  const [isCopied, setIsCopied] = useState(false);

  const copyToClipboard = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(children.toString().trim());
      setIsCopied(true);
      setTimeout(() => {
        setIsCopied(false);
      }, 1500);
    }
  };

  return (
    <>
      <div
        className={classNames(
          language === 'text' ? 'block' : 'hidden',
          'bg-slate-900 text-slate-50 font-normal px-2 py-2 text-base'
        )}
      >
        {children}
      </div>
      <Stack
        className={classNames(
          'overflow-hidden space-y-0',
          language === 'text' ? 'hidden' : 'flex'
        )}
      >
        <div className='w-full'>
          <Row
            className={classNames(
              'justify-between text-sm px-4 py-2 bg-slate-900 text-gray-50',
              language === 'no-copy' ? 'hidden' : 'flex'
            )}
            style={{
              backgroundColor: '#030712',
            }}
          >
            <span className='text-gray-300'>{language}</span>
            <button
              className={classNames(
                'transition-none md:transition-colors',
                isCopied
                  ? 'text-green-400'
                  : 'text-white md:text-white md:hover:text-primary-500 group'
              )}
              onClick={copyToClipboard}
            >
              <Row className='items-center space-x-2'>
                <svg
                  width='24'
                  height='24'
                  viewBox='0 0 215 215'
                  fill='none'
                  className={classNames('w-6 h-6', isCopied ? 'hidden' : '')}
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M147.317 116.468V158.263C147.317 193.093 133.385 207.024 98.5561 207.024H56.761C21.9317 207.024 8 193.093 8 158.263V116.468C8 81.639 21.9317 67.7073 56.761 67.7073H98.5561C133.385 67.7073 147.317 81.639 147.317 116.468Z'
                    stroke='currentColor'
                    strokeWidth='14.9268'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  />
                  <path
                    opacity='0.4'
                    d='M207.024 56.761V98.5561C207.024 133.385 193.093 147.317 158.263 147.317H147.317V116.468C147.317 81.639 133.385 67.7073 98.5561 67.7073H67.7073V56.761C67.7073 21.9317 81.639 8 116.468 8H158.263C193.093 8 207.024 21.9317 207.024 56.761Z'
                    stroke='currentColor'
                    strokeWidth='14.9268'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  />
                </svg>
                <svg
                  width='24'
                  height='24'
                  viewBox='0 0 215 215'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                  className={classNames(
                    'w-6 h-6',
                    isCopied ? 'block' : 'hidden'
                  )}
                >
                  <path
                    opacity='0.4'
                    d='M207.024 98.5561V56.761C207.024 21.9317 193.093 8 158.263 8H116.468C81.639 8 67.7073 21.9317 67.7073 56.761V67.7073H98.5561C133.385 67.7073 147.317 81.639 147.317 116.468V147.317H158.263C193.093 147.317 207.024 133.385 207.024 98.5561Z'
                    stroke='#4ade80'
                    strokeWidth='14.9268'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  />
                  <path
                    d='M147.317 158.263V116.468C147.317 81.639 133.385 67.7073 98.5561 67.7073H56.761C21.9317 67.7073 8 81.639 8 116.468V158.263C8 193.093 21.9317 207.024 56.761 207.024H98.5561C133.385 207.024 147.317 193.093 147.317 158.263Z'
                    stroke='#4ade80'
                    strokeWidth='14.9268'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  />
                  <path
                    d='M48.6018 137.364L68.0067 156.769L106.717 117.959'
                    stroke='#4ade80'
                    strokeWidth='14.9268'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  />
                </svg>

                {isCopied ? (
                  <span className='text-green-400'>copied!</span>
                ) : (
                  <span>copy</span>
                )}
              </Row>
            </button>
          </Row>
        </div>
        <SyntaxHighlighter
          language={language}
          style={{
            ...style,
            'pre[class*="language-"]': {
              ...style['pre[class*="language-"]'],
              margin: 0,
              borderRadius: 0,
            },
            'code[class*="language-"]': {
              ...style['code[class*="language-"]'],
              background: 'none',
            },
          }}
          customStyle={{
            fontSize: '14px'
          }}
        >
          {children as string}
        </SyntaxHighlighter>
      </Stack>
    </>
  );
};

export default CodeBlock;
