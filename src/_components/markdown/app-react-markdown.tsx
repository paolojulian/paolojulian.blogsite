import React, { FunctionComponent } from 'react';
import { ReactMarkdown } from 'react-markdown/lib/react-markdown';
import AppHeading from '../common/app-heading';
import CodeBlock from '../common/code-block/code-block';
import ZoomableImage from '@/_components/images/zoomable-image';
import CodeSpan from '@/_components/common/code-span';

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
          <AppHeading.H2
            id={toKebabCase(children.toString())}
            className='font-bold'
          >
            {children}
          </AppHeading.H2>
        ),
        h3: ({ children }) => (
          <AppHeading.H3
            id={toKebabCase(children.toString())}
            className='font-bold'
          >
            {children}
          </AppHeading.H3>
        ),
        h4: ({ children }) => (
          <AppHeading.H4
            id={toKebabCase(children.toString())}
            className='font-bold'
          >
            {children}
          </AppHeading.H4>
        ),
        p: ({ children }) => <div className='leading-relaxed'>{children}</div>,
        ol: ({ children }) => (
          <ol
            className='whitespace-normal'
            style={{
              listStyle: 'auto',
              marginLeft: '20px',
            }}
          >
            {children}
          </ol>
        ),
        ul: ({ children }) => (
          <ul
            className='whitespace-normal'
            style={{
              listStyle: 'inside',
              marginLeft: '20px',
            }}
          >
            {children}
          </ul>
        ),
        li: ({ children }) => (
          <li className='text-slate-700 whitespace-normal'>
            {children}
          </li>
        ),
        a: ({ href, children }) => (
          <a href={href} className='text-red-500 font-medium'>
            {children}
          </a>
        ),
        img: ({ ...props }) => <ZoomableImage {...props}></ZoomableImage>,
        strong: ({ children }) => (
          <strong className='font-semibold'>{children}</strong>
        ),
        pre: ({ children }) => <CodeBlock>{children}</CodeBlock>,
        code: ({ children, className }) => (
          <CodeSpan language={className?.replace('language-', '') || ''}>
            {children}
          </CodeSpan>
        ),
      }}
      className='whitespace-pre-line'
    >
      {children}
    </ReactMarkdown>
  );
};

export default AppReactMarkdown;
