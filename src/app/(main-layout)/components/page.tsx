import React, { FunctionComponent } from 'react';
import Stack from '@/_components/layouts/stack';
import ComponentList from './_components/component-list';

export type BlogsPageProps = {
  // no props
};

const BlogsPage: FunctionComponent<BlogsPageProps> = async (props) => {
  return (
    <>
      <div>
        <Stack className='h-full  text-slate-600 px-4 md:px-8 py-8 md:py-16'>
          {/* header */}
          <Stack className='space-y-2 pb-12 md:pb-24'>
            <div className='relative w-fit'>
              <h1 className='text-slate-800 text-5xl md:text-8xl font-capital w-full'>
                TAILWIND COMPONENTS
              </h1>
            </div>
            <p className='md:px-2 font-medium text-lg max-w-screen-sm'>
              Experience a collection of impeccably designed components and
              templates. Elevate your upcoming project with a foundation built
              on aesthetic excellence and optimal functionality.
            </p>
          </Stack>

          {/* content */}
          <ComponentList />
        </Stack>
      </div>
    </>
  );
};

export default BlogsPage;
