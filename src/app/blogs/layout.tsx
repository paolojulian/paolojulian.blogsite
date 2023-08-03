import classNames from 'classnames';
import type { Metadata } from 'next';
import Row from '@/_components/layouts/row';
import NavIconButton from './_components/nav-icon-btn';
import HomeIcon from './_components/icons/home-icon';
import BloggerIcon from './_components/icons/blogger-icon';
import AppsIcon from './_components/icons/apps-icon';
import Stack from '@/_components/layouts/stack';
import Navbar from './_components/layouts/navbar';

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
          'font-quicksand',
          'bg-main text-slate-700 min-h-screen',
          'relative'
        )}
      >
        <>
          <Navbar />
          <main className='mx-auto max-w-screen-xl px-12 flex-1 w-full'>
            <div className='border-l border-slate-400'>{children}</div>
          </main>
        </>
      </Stack>
    </>
  );
}
