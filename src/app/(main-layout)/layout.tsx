import classNames from 'classnames';
import type { Metadata } from 'next';
import Navbar from '@/_components/layouts/navbar';
import FooterSection from '@/_components/layouts/footer';

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
    <div
      className={classNames(
        'font-sans text-slate-700',
        'border-l md:border-l-4 lg:border-l-8 border-primary-300'
      )}
    >
      {/* <Navbar /> */}
      <div className='flex flex-row w-full max-w-screen-2xl mx-auto'>
        <main
          className={classNames(
            'text-slate-700 bg-white',
            'flex flex-col relative',
            'w-full',
            'px-0' // spacing
          )}
        >
          <div className='2xl:max-w-screen-2xl w-full mx-auto'>{children}</div>
        </main>
      </div>
      {/* <FooterSection /> */}
    </div>
  );
}
