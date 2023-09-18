import React, { FunctionComponent } from 'react';
import { ReactMarkdown } from 'react-markdown/lib/react-markdown';
import remarkGfm from 'remark-gfm';
import AppHeading from '../common/app-heading';
import CodeBlock from './code-block';
import Link from 'next/link';

export type AppReactMarkdownProps = {
  children: React.ReactNode;
} & React.ComponentProps<typeof ReactMarkdown>;

function toKebabCase(text: string) {
  return text.replace(/\s+/g, '-').toLowerCase();
}

const AppReactMarkdown: FunctionComponent<AppReactMarkdownProps> = ({
  children,
}) => {
  return (
    <ReactMarkdown
      components={{
        h2: ({ children }) => (
          <AppHeading.H2 id={toKebabCase(children.toString())}>
            {children}
          </AppHeading.H2>
        ),
        h3: ({ children }) => (
          <AppHeading.H3 id={toKebabCase(children.toString())}>
            {children}
          </AppHeading.H3>
        ),
        h4: ({ children }) => (
          <AppHeading.H4 id={toKebabCase(children.toString())}>
            {children}
          </AppHeading.H4>
        ),
        p: ({ children }) => <p className='text-slate-600'>{children}</p>,
        ol: ({ children }) => (
          <ol
            style={{
              listStyle: 'auto',
              whiteSpace: 'initial',
              marginLeft: '20px',
            }}
          >
            {children}
          </ol>
        ),
        ul: ({ children }) => (
          <ul
            style={{
              listStyle: 'inside',
              whiteSpace: 'initial',
              marginLeft: '20px',
            }}
          >
            {children}
          </ul>
        ),
        li: ({ children }) => (
          <li className='text-slate-700 whitespace-normal'>{children}</li>
        ),
        a: ({ href, children }) => (
          <a href={href} className='text-red-500 font-medium'>
            {children}
          </a>
        ),
        img: ({ ...props }) => <img {...props} className='pt-4' />,
        strong: ({ children }) => (
          <strong className='font-medium'>{children}</strong>
        ),
        pre: ({ children }) => <>{children}</>,
        code: ({ children, className }) => (
          <CodeBlock className={className || ''}>{children}</CodeBlock>
        ),
      }}
      className='line-break'
    >
      {children}
    </ReactMarkdown>
  );
};

export default AppReactMarkdown;
