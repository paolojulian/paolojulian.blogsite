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
          'bg-white text-slate-700 min-h-screen',
          'relative'
        )}
      >
        <>
          <Navbar />
          {/* horizontal left margin */}
          <div className='fixed inset-0 pointer-events-none border-l md:border-l-[5px] lg:border-l-[10px] border-red-300 z-50'>
            {/* horizontal left divider */}
            <div className='md:border-l border-gray-400 xl:max-w-screen-lg 2xl:max-w-screen-xl fixed inset-0 mx-auto'></div>
          </div>
          <main className='mx-auto max-w-screen-lg 2xl:max-w-screen-xl px-4 md:px-12 flex-1 w-full pt-navbar'>
            {children}
          </main>
          <Footer />
        </>
      </Stack>
    </>
  );
}
