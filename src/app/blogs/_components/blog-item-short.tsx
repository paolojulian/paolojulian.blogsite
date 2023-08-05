import AppDate from '@/_components/common/app-date';
import Stack from '@/_components/layouts/stack';
import Link from 'next/link';
import React, { FunctionComponent } from 'react';
import { IBlogPost } from '../_contentful';
import Image from 'next/image';

export type BlogItemShortProps = {
  blogPost: IBlogPost;
};

const BlogItemShort: FunctionComponent<BlogItemShortProps> = ({ blogPost }) => {
  return (
    <Link className='snap-start' href={`/blogs/${blogPost.slug}`}>
      <div className='flex flex-col group relative w-[300px] border border-slate-400 overflow-hidden bg-main'>
        <div className='w-2 h-2 bg-red-500 absolute bottom-0 left-0'></div>
        <div className='relative w-[300px] h-[200px] bg-slate-50 overflow-hidden'>
          {/* image */}
          <Image
            alt={`${blogPost.title} banner`}
            src={blogPost.banner.url}
            layout='fill'
            objectFit='cover'
            objectPosition='center center'
          />
          {/* overlay */}
          <div className='absolute inset-0 bg-red-500/50 transition-transform -translate-x-full group-hover:translate-x-0'></div>
        </div>

        <Stack className='flex-1 h-full p-3 relative space-y-2'>
          <Stack>
            <p className='font-medium text-sm'>
              <AppDate dateTime='05-Jul-2023 09:00 AM' />
            </p>
            <h4 className='font-semibold text-base text-slate-700 line-clamp-1'>
              {blogPost.title}
            </h4>
          </Stack>
        </Stack>
      </div>
    </Link>
  );
};

export default BlogItemShort;
