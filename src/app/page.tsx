import { getPortfolioItems } from './portfolio/_api/portfolio-item';
import { getPortfolio } from './portfolio/_api/portfolio';
import { getLatestBlogPosts } from './blogs/_api/blog-post';
import Navbar from '@/_components/layouts/navbar';
import Stack from '@/_components/layouts/stack';
import HeroSection from './portfolio/_components/hero';
import AboutSection from './portfolio/_components/about';
import ProjectsSection from './portfolio/_components/projects';
import Row from '@/_components/layouts/row';
import BlogItemShort from './blogs/_components/blog-item-short';
import Footer from '@/_components/layouts/footer';
import React from 'react';
import classNames from 'classnames';

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
          'font-inconsolata bg-main text-slate-700'
        )}
      >
        <Navbar variant='default-bordered' />

        <main className='px-0 text-slate-700'>
          <Stack className='md:px-0 xl:px-24 w-full relative bg-slate-900 min-h-screen pt-navbar'>
            <Stack className='flex-1 2xl:max-w-screen-xl max-w-screen-lg mx-auto w-full sm:border-l border-slate-400 px-4 md:px-8 2xl:px-24'>
              <HeroSection />
            </Stack>
          </Stack>
          <Stack className='2xl:max-w-screen-xl max-w-screen-lg mx-auto w-full sm:border-l border-slate-400 px-4 md:px-8 2xl:px-24 relative z-10'>
            <AboutSection portfolio={portfolio} />
            <ProjectsSection items={portfolioItems} />
            <div className='w-full border-b border-slate-400'></div>
            <div className='relative space-y-8 py-24 z-10'>
              <div className='hidden md:block absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-main to-transparent z-10'></div>
              <h3 className='font-anton text-slate-800 text-6xl'>
                LATEST ARTICLES
              </h3>
              <Stack className='space-y-2'>
                <Row className='space-x-1'>
                  <button className='border border-slate-500 bg-red-500 w-14 h-2'></button>
                  <button className='border border-slate-500 hover:bg-red-500/20 w-14 h-2'></button>
                  <button className='border border-slate-500 hover:bg-red-500/20 w-14 h-2'></button>
                </Row>
                <Stack className='space-y-8 w-full overflow-x-hidden relative'>
                  <Row className='space-x-4 overflow-auto md:overflow-hidden snap-x snap-mandatory'>
                    {blogPosts.map((blogPost, i) => (
                      <MemoizedBlogItemShort key={i} blogPost={blogPost} />
                    ))}
                  </Row>
                </Stack>
              </Stack>
            </div>
            <div className='hidden md:block absolute font-anton bottom-0 -left-1 text-stroke tracking-[9px] leading-[160px] text-[183px] z-0'>
              <p>IAM</p>
              <p>PAOLOJULIAN</p>
            </div>
          </Stack>
        </main>
        <Footer />
      </div>
    </>
  );
}
