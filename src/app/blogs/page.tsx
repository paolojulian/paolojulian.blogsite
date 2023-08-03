import React, { FunctionComponent } from 'react';
import BlogItem from './_components/blog-item';
import Stack from '@/_components/layouts/stack';
import Row from '@/_components/layouts/row';
import { getLatestBlogPosts } from './_api/blog-post';

export type BlogsPageProps = {
  // no props
};

const BlogsPage: FunctionComponent<BlogsPageProps> = async (props) => {
  const blogPosts = await getLatestBlogPosts();

  return (
    <>
      <div className='p-4 md:p-8 py-12 md:py-24'>
        <Stack className='space-y-12 md:space-y-24'>
          <Row className='justify-between'>
            <div className='relative'>
              <h1 className='text-slate-800 text-5xl md:text-8xl font-anton w-full'>
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
      </div>
    </>
  );
};

export default BlogsPage;
