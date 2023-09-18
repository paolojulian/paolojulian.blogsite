import classNames from 'classnames';
import type { Metadata } from 'next';
import Stack from '@/_components/layouts/stack';
import Navbar from '@/_components/layouts/navbar';
import Footer from '@/_components/layouts/footer';

export const metadata: Metadata = {
  title: 'Components | Paolo Julian',
  description: 'Components list of Paolo Julian',
};

export default function PortfolioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div
        className={classNames(
          'font-sans',
          'bg-white text-slate-700 h-full w-full',
          'relative'
        )}
      >
        <Navbar />
        <main className='max-w-screen-xl mx-auto px-4 lg:px-0 flex-1 w-full pt-navbar'>
          {children}
        </main>
        <Footer />
      </div>
    </>
  );
}
