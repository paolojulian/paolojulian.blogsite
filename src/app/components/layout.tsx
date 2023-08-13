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
          'font-manrope',
          'bg-main text-slate-700 min-h-screen',
          'relative'
        )}
      >
        <>
          {children}
        </>
      </Stack>
    </>
  );
}
