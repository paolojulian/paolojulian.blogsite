import React, { FunctionComponent } from 'react';
import BlogItem from './_components/blog-item';
import Stack from '@/_components/layouts/stack';
import Row from '@/_components/layouts/row';
import { getLatestBlogPosts } from './_api/blog-post';
import { Metadata } from 'next';
import Container from '@/_components/layouts/container';
import RightArrowIcon from '@/_components/icons/right-arrow-icon';

export type BlogsPageProps = {
  // no props
};

export const metadata: Metadata = {
  title: 'Paolo Julian | Blog List',
  description:
    'Explore my latest blog posts and stay updated with our informative content. Discover insights, tips, and news on various topics.',
};

const BlogsPage: FunctionComponent<BlogsPageProps> = async (props) => {
  const blogPosts = await getLatestBlogPosts();

  return (
    <>
      {/* <div className='absolute top-0 right-0 w-[800px] h-[600px] bg-gray-800/30 rounded-bl-full'></div> */}
      <Container className='min-h-screen pt-navbar pb-20 flex flex-col justify-center gap-8 xl:gap-20 z-10 relative'>
        <Stack className='text-5xl md:text-8xl font-medium xl:max-w-[70%]'>
          <h1 className=''>
            <span className='text-slate-400'>Explore my articles,</span>
            <span className='text-slate-800'>
              <br />
              crafted through both challenges and triumphs.
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
      <Container className='mb-8'>
        <Row className='justify-between p-2 text-base text-slate-600 mb-4 border-b-2 border-slate-400'>
          <h2>LATEST ARTICLES</h2>
          <p>01</p>
        </Row>
        <Stack className='gap-12 py-12'>
          {blogPosts.map((blogPost, i) => (
            <BlogItem blogPost={blogPost} key={i} />
          ))}
        </Stack>
      </Container>

      {/* <div className='p-4 md:p-8 py-12 md:py-16 pb-16 md:pb-24'>
        <Stack className='space-y-12 md:space-y-16'>
          <Row className='justify-between'>
            <div className='relative'>
              <h1 className='text-slate-800 text-5xl md:text-8xl font-capital w-full'>
                ARTICLES
              </h1>
              <div className='absolute translate-y-2 md:translate-y-3 top-1/2 -right-4 w-16 h-[3px] bg-red-400 pointer-events-none'></div>
            </div>
          </Row>
          <Stack className='space-y-12 mx-auto max-w-screen-lg'>
            {blogPosts.map((blogPost, i) => (
              <BlogItem blogPost={blogPost} key={i} />
            ))}
          </Stack>
        </Stack>
      </div> */}
    </>
  );
};

export default BlogsPage;
