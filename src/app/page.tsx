import { getPortfolioItems } from './portfolio/_api/portfolio-item';
import { getPortfolio } from './portfolio/_api/portfolio';
import { getLatestBlogPosts } from './blogs/_api/blog-post';
import Navbar from '@/_components/layouts/navbar';
import Row from '@/_components/layouts/row';
import BlogItemShort from './blogs/_components/blog-item-short';
import Footer from '@/_components/layouts/footer';
import React from 'react';
import classNames from 'classnames';
import HeroSection from '@/app/portfolio/_components/hero';
import { SectionsProvider } from '@/app/portfolio/_context/sections-context';

const MemoizedBlogItemShort = React.memo(BlogItemShort);

export default async function Home() {
  const [portfolioItems, portfolio, blogPosts] = await Promise.all([
    getPortfolioItems(),
    getPortfolio(),
    getLatestBlogPosts(),
  ]);

  return (
    <>
      <div
        className={classNames(
          'relative h-full',
          'font-main bg-white text-slate-700'
        )}
      >
        <SectionsProvider>
          <div className='fixed inset-0 pointer-events-none border-l-[10px] border-red-300 z-50'>
            <div className='border-l border-gray-400 max-w-7xl h-full w-full mx-auto'></div>
          </div>
          <Navbar variant='default-bordered' />

          <main className='px-0 text-slate-700 flex flex-col'>
            <HeroSection />
          </main>
          {/* <Footer /> */}
        </SectionsProvider>
      </div>
    </>
  );
}
