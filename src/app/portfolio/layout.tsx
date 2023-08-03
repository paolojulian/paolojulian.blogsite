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
        'relative',
        'font-quicksand bg-main 2xl:max-w-screen-xl max-w-screen-lg mx-auto text-slate-700',
        'px-4 md:px-0'
      )}
    >
      {children}
    </div>
  );
}
