import classNames from 'classnames';
import './globals.css';
import type { Metadata } from 'next';
import { Anton, Quicksand } from 'next/font/google';

const quicksand = Quicksand({
  subsets: ['latin'],
  variable: '--font-quicksand',
});
const anton = Anton({ weight: '400', variable: '--font-anton', subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
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
          `${quicksand.variable} font-quicksand`
        )}
      >
        {children}
      </body>
    </html>
  );
}
