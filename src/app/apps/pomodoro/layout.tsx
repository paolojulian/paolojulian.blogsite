import classNames from 'classnames';
import type { Metadata } from 'next';
import { Architects_Daughter } from 'next/font/google';

const font = Architects_Daughter({
  subsets: ['latin'],
  variable: '--font-comfortaa',
  weight: '400',
});

export const metadata: Metadata = {
  title: 'Pomodoro App | Paolo Julian',
  description: 'Pomodoro app of Paolo Julian',
};

export default function PortfolioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className={classNames(font.className, 'h-full text-new-white')}>{children}</div>;
}
