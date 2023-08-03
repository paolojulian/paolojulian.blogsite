import Footer from '@/_components/layouts/footer';
import Navbar from '@/_components/layouts/navbar';
import classNames from 'classnames';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Paolo Julian',
  description: 'Paolo Vincent Julian portfolio website',
};

export default function PortfolioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div
      className={classNames(
        'relative flex flex-col',
        'font-manrope bg-main text-slate-700',
      )}
    >
      {children}
    </div>
  );
}
