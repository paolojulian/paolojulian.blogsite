import type { Metadata } from 'next';

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
    <div className='max-w-screen-lg mx-auto mt-navbar relative w-full'>
      <div className='hidden md:block fixed inset-0 max-w-screen-lg mx-auto border-l border-slate-400 z-50 pointer-events-none'></div>
      {children}
    </div>
  );
}
