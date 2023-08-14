import React, { FunctionComponent } from 'react';
import Stack from '@/_components/layouts/stack';
import Navbar from '@/_components/layouts/navbar';
import Footer from '@/_components/layouts/footer';
import ComponentList from './_components/component-list';

export type BlogsPageProps = {
  // no props
};

const BlogsPage: FunctionComponent<BlogsPageProps> = async (props) => {
  return (
    <>
      <Navbar />
      <main className='max-w-screen-xl px-4 md:px-12 flex-1 w-full'>
        <div className='border-l border-slate-400'>
          <Stack
            className='h-full  text-slate-600 px-12 py-16'
            style={{
              minHeight: 'calc(100vh - 70px)',
            }}
          >
            {/* header */}
            <Stack className='space-y-2 pb-24'>
              <div className='relative w-fit'>
                <h1 className='text-slate-800 text-5xl md:text-8xl font-anton w-full'>
                  TAILWIND COMPONENTS
                </h1>
                <div className='absolute translate-y-2 md:translate-y-3 top-1/2 -right-4 w-16 h-[3px] bg-red-400 pointer-events-none'></div>
              </div>
              <p className='px-2 font-medium text-lg max-w-screen-sm'>
                Experience a collection of impeccably designed components and
                templates. Elevate your upcoming project with a foundation built
                on aesthetic excellence and optimal functionality.
              </p>
            </Stack>

            {/* content */}
            <ComponentList />
          </Stack>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default BlogsPage;
