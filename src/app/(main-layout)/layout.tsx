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
    <div className='font-sans text-slate-700'>
      <Navbar variant='default-bordered' />
      <div className='flex flex-row w-full'>
        <main
          className={classNames(
            'text-slate-700 bg-white',
            'flex flex-col relative',
            '2xl:max-w-screen-2xl w-full mx-auto', // margins
            'px-0', // spacing
            'border-l md:border-l-4 lg:border-l-8 border-primary-300'
          )}
        >
          {children}
        </main>
      </div>
      <FooterSection />
    </div>
  );
}