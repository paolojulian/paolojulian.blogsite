import classNames from 'classnames';
import './globals.css';
import type { Metadata } from 'next';
import { Anton, Nunito, Outfit } from 'next/font/google';

const capital = Anton({
  weight: '400',
  variable: '--font-capital',
  subsets: ['latin'],
});
const main = Outfit({
  subsets: ['latin'],
  variable: '--font-main',
});

export const metadata: Metadata = {
  title: 'Paolo Vincent Julian',
  description: 'Website created by Paolo Vincent Julian',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <head>
        <link rel='icon' href='/favicon.ico' sizes='any' />
        <link rel='icon' href='/favicon.svg' type='image/svg+xml' />
        <link rel='apple-touch-icon' href='/apple-touch-icon.png' />
        <link rel='manifest' href='/site.webmanifest' />
        <meta name='theme-color' content='#ECE8E1' />
      </head>
      <body
        className={classNames(
          `${capital.variable} font-capital`,
          `${main.variable} font-main`
        )}
      >
        {children}
      </body>
    </html>
  );
}
