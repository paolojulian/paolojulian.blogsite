import { getPortfolioItems } from './portfolio/_api/portfolio-item';
import { getPortfolio } from './portfolio/_api/portfolio';
import { getLatestBlogPosts } from './blogs/_api/blog-post';
import Navbar from '@/_components/layouts/navbar';
import React from 'react';
import classNames from 'classnames';
import HeroSection from '@/app/portfolio/_components/hero';
import { SectionsProvider } from '@/app/portfolio/_context/sections-context';
import AboutSection from '@/app/portfolio/_components/about';
import ServicesSection from '@/app/portfolio/_components/services';
import ProjectsSection from '@/app/portfolio/_components/projects';
import ArticlesSection from '@/app/portfolio/_components/articles';
import SideNav from '@/app/portfolio/_components/common/side-nav';
import FooterSection from '@/_components/layouts/footer';

export default async function Home() {
  const [portfolioItems, portfolio, blogPosts] = await Promise.all([
    getPortfolioItems(),
    getPortfolio(),
    getLatestBlogPosts(),
  ]);

  return (
    <>
      <div className={classNames('font-sans bg-white text-slate-700')}>
        <SectionsProvider>
          {/* horizontal left margin */}
          <div className='fixed inset-0 pointer-events-none border-l md:border-l-[5px] lg:border-l-[10px] border-red-300 z-50'>
            {/* horizontal left divider */}
            <div className='md:border-l border-gray-400 xl:max-w-screen-lg 2xl:max-w-screen-xl fixed inset-0 mx-auto'></div>
          </div>

          <Navbar variant='default-bordered' />
          <SideNav />

          <main className='px-0 text-slate-700 flex flex-col xl:max-w-screen-lg 2xl:max-w-screen-xl mx-auto relative w-full'>
            <HeroSection />
            <AboutSection
              resumeUrl={portfolio.resume.url}
              about={portfolio.about}
            />
            <ServicesSection />
            <ProjectsSection items={portfolioItems} />
            <ArticlesSection items={blogPosts} />
          </main>

          <FooterSection />
          {/* <Footer /> */}
        </SectionsProvider>
      </div>
    </>
  );
}
