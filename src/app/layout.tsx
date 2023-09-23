import classNames from 'classnames';
import './globals.css';
import type { Metadata } from 'next';
import { Anton, Lora, Outfit } from 'next/font/google';

const capital = Anton({
  weight: '400',
  variable: '--font-capital',
  subsets: ['latin'],
});
const serif = Lora({
  subsets: ['latin'],
  variable: '--font-serif',
  weight: ['400', '700'],
});
const sans = Outfit({
  subsets: ['latin'],
  variable: '--font-sans',
  weight: ['400', '600', '700'],
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
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <meta name='theme-color' content='#fffffff' />
        <link rel='icon' href='/favicon.ico' sizes='any' />
        <link rel='icon' href='/favicon.svg' type='image/svg+xml' />
        <link rel='apple-touch-icon' href='/apple-touch-icon.png' />
        <link rel='manifest' href='/site.webmanifest' />
      </head>
      <body
        className={classNames(
          `${capital.variable} font-capital`,
          `${serif.variable} font-serif`,
          `${sans.variable} font-sans`,
          'font-sans',
          'overflow-x-hidden max-w-screen'
        )}
      >
        {children}
        <div id='modal-root'></div>
        <div id='fixed'></div>
      </body>
    </html>
  );
}
