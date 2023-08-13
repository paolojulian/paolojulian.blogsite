import React, { FunctionComponent } from 'react';
import Stack from '@/_components/layouts/stack';
import Row from '@/_components/layouts/row';
import Navbar from '@/_components/layouts/navbar';
import Footer from '@/_components/layouts/footer';

export type BlogsPageProps = {
  // no props
};

const BlogsPage: FunctionComponent<BlogsPageProps> = async (props) => {
  return (
    <>
      <Navbar />
      <main className='mx-auto max-w-screen-lg 2xl:max-w-screen-xl px-4 md:px-12 flex-1 w-full'>
        <div className='border-l border-slate-400'>
          <Stack
            className='h-full justify-center items-center text-slate-600 text-2xl font-medium'
            style={{
              minHeight: 'calc(100vh - 70px)',
            }}
          >
            coming soon...
          </Stack>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default BlogsPage;
