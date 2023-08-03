import AppDate from '@/_components/common/app-date';
import Row from '@/_components/layouts/row';
import Stack from '@/_components/layouts/stack';
import classNames from 'classnames';
import Link from 'next/link';
import React, { FunctionComponent } from 'react';
import { IBlogPost } from '../_contentful';
import RightArrowIcon from '@/_components/icons/right-arrow-icon';

export type BlogItemProps = {
  blogPost: IBlogPost;
};

const BlogItem: FunctionComponent<BlogItemProps> = ({ blogPost }) => {
  return (
    <Link href={`/blogs/${blogPost.slug}`}>
      <Row className='items-center group relative'>
        <div className='relative w-[400px] h-[300px] bg-slate-50 border-b border-l border-r border-slate-400 overflow-hidden'>
          {/* image */}
          {/* line */}
          <div className='absolute inset-0 bg-red-600/70 transition-transform -translate-x-full group-hover:translate-x-0'></div>
          <div className='absolute border-t border-slate-400 top-0 -left-4 w-[200%]'></div>
        </div>

        <Stack className='flex-1 h-full p-4 relative space-y-2'>
          <Stack>
            <p className='font-medium text-xl'>
              <AppDate dateTime='05-Jul-2023 09:00 AM' />
            </p>
            <h4 className='font-semibold lg:text-xl xl:text-2xl text-slate-700 line-clamp-1'>
              {blogPost.title}
            </h4>
          </Stack>

          <p className='line-clamp-3 text-slate-700'>{blogPost.description}</p>

          <Row className='justify-between items-end'>
            <span className='mt-2 font-medium text-sm text-red-400 flex flex-row space-x-2 items-center'>
              SEE MORE
              <span className='transition-transform translate-x-2 group-hover:translate-x-4'>
                <RightArrowIcon />
              </span>
            </span>
          </Row>
        </Stack>
        <div
          className={classNames(
            'absolute bottom-0 right-0 h-4/5 w-1/6 border-r border-b border-slate-400',
            'transition'
          )}
        ></div>
      </Row>
    </Link>
  );
};

export default BlogItem;
