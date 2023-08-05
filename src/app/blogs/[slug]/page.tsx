import Stack from '@/_components/layouts/stack';
import React, { FunctionComponent } from 'react';
import { getBlogPostBySlug, getLatestBlogPosts } from '../_api/blog-post';
import AppDate from '@/_components/common/app-date';
import AppReactMarkdown from '@/_components/markdown/app-react-markdown';
import Row from '@/_components/layouts/row';
import Link from 'next/link';
import LeftArrowIcon from '@/_components/icons/left-arrow-icon';
import Image from 'next/image';
import BlogItemShort from '../_components/blog-item-short';
import AppTag from '@/_components/common/app-tag';

export type BlogDetailsProps = {
  params: {
    slug: string;
  };
};

const BlogDetails: FunctionComponent<BlogDetailsProps> = async ({ params }) => {
  const [blogPost, latestBlogPosts] = await Promise.all([
    getBlogPostBySlug(params.slug),
    getLatestBlogPosts(),
  ]);

  return (
    <Stack className='relative'>
      <div className='p-4 md:p-8 z-10'>
        <Stack className='space-y-12 mb-24'>
          <Link href='/blogs'>
            <Row className='items-center space-x-2 text-red-400 font-semibold group'>
              <span className='group-hover:-translate-x-2 transition-transform'>
                <LeftArrowIcon />
              </span>
              <p>go to article list</p>
            </Row>
          </Link>
          {/* header */}
          <Stack className='relative pb-8 space-y-2'>
            <Row className='space-x-2'>
              <span className='text-slate-700 font-medium'>
                <AppDate dateTime={blogPost.sys.publishedAt} />
              </span>
              <address className='text-red-500 font-medium'>
                Paolo Vincent Julian
              </address>
            </Row>
            <h1 className='font-anton uppercase text-5xl md:text-7xl leading-tight text-slate-800'>
              {blogPost.title}
            </h1>
            <div className='absolute bottom-0 left-0 w-3/6 border-b border-slate-400'></div>
          </Stack>

          {/* content */}
          <Stack className='md:ml-24 space-y-12 pb-6 md:pb-12'>
            <Stack className='space-y-1 items-center'>
              <div className='h-[200px] sm:h-[300px] md:h-[400px] 2xl:h-[600px] w-full relative'>
                <Image
                  alt={`${blogPost.title} banner`}
                  layout='fill'
                  src={blogPost.banner.url}
                  style={{
                    objectPosition: 'center center',
                    objectFit: 'cover',
                  }}
                />
              </div>
              <p className='text-slate-500 text-sm md:text-base'>thumbnail</p>
            </Stack>

            <div className='border-b border-slate-400 pb-12 md:pb-24'>
              <AppReactMarkdown>{blogPost.content}</AppReactMarkdown>
            </div>

            <Row className='space-x-4 items-center'>
              <p className='text-slate-600'>tags:</p>
              <Row className='space-x-4 flex-wrap'>
                {blogPost.tags?.map((tag, i) => (
                  <AppTag key={i} tag={tag} />
                ))}
              </Row>
            </Row>

            <Link href='/blogs'>
              <Row className='items-center space-x-2 text-red-400 font-semibold group'>
                <span className='group-hover:-translate-x-2 transition-transform'>
                  <LeftArrowIcon />
                </span>
                <p>go to article list</p>
              </Row>
            </Link>
          </Stack>

          <div className='relative space-y-8'>
            <div className='hidden md:block absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-main to-transparent z-10'></div>
            <h3 className='font-anton text-6xl'>LATEST ARTICLES</h3>
            <Stack className='space-y-2'>
              <Row className='space-x-1'>
                <button className='border border-slate-500 bg-red-500 w-14 h-2'></button>
                <button className='border border-slate-500 hover:bg-red-500/20 w-14 h-2'></button>
                <button className='border border-slate-500 hover:bg-red-500/20 w-14 h-2'></button>
              </Row>
              <Stack className='space-y-8 w-full overflow-x-hidden relative'>
                <Row className='space-x-4 overflow-auto md:overflow-hidden snap-x snap-mandatory'>
                  {latestBlogPosts.map((blogPost, i) => (
                    <BlogItemShort key={i} blogPost={blogPost} />
                  ))}
                </Row>
              </Stack>
            </Stack>
          </div>
        </Stack>
      </div>
      <div className='hidden md:block absolute font-anton bottom-0 -left-1 text-stroke tracking-[9px] leading-[160px] text-[183px] z-0'>
        <p>IAM</p>
        <p>PAOLOJULIAN</p>
      </div>
    </Stack>
  );
};

export default BlogDetails;
