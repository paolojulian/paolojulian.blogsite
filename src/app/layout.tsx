import classNames from 'classnames';
import './globals.css';
import type { Metadata } from 'next';
import { Anton, Quicksand, Manrope } from 'next/font/google';

const quicksand = Quicksand({
  subsets: ['latin'],
  variable: '--font-manrope',
});
const manrope = Manrope({
  subsets: ['latin'],
  variable: '--font-manrope',
});
const anton = Anton({
  weight: '400',
  variable: '--font-anton',
  subsets: ['latin'],
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
      <body
        className={classNames(
          `${anton.variable} font-anton`,
          `${manrope.variable} font-manrope`,
          `${quicksand.variable} font-manrope`
        )}
      >
        {children}
      </body>
    </html>
  );
}
