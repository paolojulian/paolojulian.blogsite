import React, { FunctionComponent } from 'react';
import Stack from '@/_components/layouts/stack';
import ComponentList from './_components/component-list';
import Container from '@/_components/layouts/container';
import RightArrowIcon from '@/_components/icons/right-arrow-icon';

export type BlogsPageProps = {
  // no props
};

const BlogsPage: FunctionComponent<BlogsPageProps> = async (props) => {
  return (
    <>
      <Container className='min-h-screen pt-navbar pb-20 flex flex-col justify-center gap-8 xl:gap-20 z-10 relative'>
        <Stack className='text-5xl md:text-7xl font-medium'>
          <h1 className=''>
            {/* <span className='text-slate-400'>Explore my articles,</span> */}
            <span className='text-slate-800'>
              {/* <br /> */}
              <span className='text-gray-300'>Discover</span> a selection of
              <span className='text-gray-300'> beautifully designed</span>{' '}
              components and templates that will{' '}
              <span className='text-gray-300'>elevate your project</span>. With
              a strong emphasis on aesthetics and functionality, you can create
              a{' '}
              <span className='text-gray-300'>
                stunning and user-friendly experience
              </span>
              .
            </span>
          </h1>
        </Stack>
        <button className='flex flex-row w-fit gap-4 md:pl-4 text-xl items-center group'>
          <span className='transition-colors group-hover:text-red-400 text-base font-black tracking-widest'>
            BROWSE NOW
          </span>
          <RightArrowIcon className='text-red-400 transition-transform group-hover:translate-x-full' />
        </button>
      </Container>
      <Container>
        <Stack className='h-full  text-slate-600'>
          {/* content */}
          <ComponentList />
        </Stack>
      </Container>
    </>
  );
};

export default BlogsPage;
