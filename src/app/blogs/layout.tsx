import classNames from 'classnames';
import type { Metadata } from 'next';
import Stack from '@/_components/layouts/stack';
import Navbar from '../../_components/layouts/navbar';
import Footer from '@/_components/layouts/footer';

export const metadata: Metadata = {
  title: 'Blogs | Paolo Julian',
  description: 'Blog list of Paolo Julian',
};

export default function PortfolioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Stack
        className={classNames(
          'font-main',
          'bg-white text-slate-700 min-h-screen',
          'relative'
        )}
      >
        <>
          <Navbar />
          <main className='mx-auto max-w-screen-lg 2xl:max-w-screen-xl px-4 md:px-12 flex-1 w-full pt-navbar'>
            <div className='border-l border-slate-400'>{children}</div>
          </main>
          <Footer />
        </>
      </Stack>
    </>
  );
}
