import AppDate from '@/_components/common/app-date';
import LeftArrowIcon from '@/_components/icons/left-arrow-icon';
import Row from '@/_components/layouts/row';
import Stack from '@/_components/layouts/stack';
import Link from 'next/link';
import React, { FunctionComponent } from 'react';
import { IBlogPost } from '../../_contentful';
import Image from 'next/image';
import AppReactMarkdown from '@/_components/markdown/app-react-markdown';
import AppTag from '@/_components/common/app-tag';
import classNames from 'classnames';
import ToTopFab from '@/_components/common/to-top-fab';
import ArrowScrollBar from '@/app/(main-layout)/blogs/_components/scrollbars/arrow-scrollbar';
import ArticleItem from '@/app/(main-layout)/components/_components/articles/article-item';
import Container from '@/_components/layouts/container';

export type ArticleProps = {
  blogPost: IBlogPost;
  preview?: boolean;
  latestBlogPosts?: IBlogPost[];
};

const Article: FunctionComponent<ArticleProps> = ({
  blogPost,
  preview = false,
  latestBlogPosts = [],
}) => {
  return (
    <>
      <Container>
        <div className='z-10  '>
          <Stack className='space-y-12 mb-24'>
            <Link
              className={classNames(preview ? 'pointer-events-none' : '')}
              href='/blogs'
            >
              <Row className='items-center space-x-2 text-red-400 font-semibold group'>
                <span className='group-hover:-translate-x-2 transition-transform'>
                  <LeftArrowIcon />
                </span>
                <p>go to article list</p>
              </Row>
            </Link>

            {/* header */}
            <Stack className='relative space-y-8 py-4 lg:py-4'>
              <h1 className='text-6xl md:text-7xl xl:max-w-[70%] font-medium text-slate-800'>
                {blogPost.title}
              </h1>
            </Stack>

            <Row className='border-b-2 border-gray-400 justify-between p-2'>
              <span className='text-gray-400 md:text-lg italic inline'>
                {blogPost.sys.publishedAt !== blogPost.sys.firstPublishedAt
                  ? 'Updated '
                  : ' '}
                <AppDate dateTime={blogPost.sys.publishedAt} />
              </span>
              <address className='text-red-500 text-lg'>
                Paolo Vincent Julian
              </address>
            </Row>

            {/* content */}
            <Stack className='space-y-12 pb-6 md:pb-12 w-full max-w-screen-md mx-auto overflow-x-hidden'>
              <Stack className='space-y-1 items-center'>
                <div className='w-full relative'>
                  {blogPost.banner ? (
                    <Image
                      alt={`${blogPost.title} banner`}
                      src={blogPost.banner.url}
                      width={blogPost.banner.width}
                      height={blogPost.banner.height}
                      style={{
                        objectPosition: 'center center',
                        objectFit: 'cover',
                      }}
                      priority
                    />
                  ) : null}
                </div>
                <p className='text-slate-500 text-sm md:text-base line-clamp-1'>
                  thumbnail
                </p>
              </Stack>

              <div className='border-b border-slate-400 pb-12 md:pb-24 text-xl text-slate-600'>
                <AppReactMarkdown>{blogPost.content}</AppReactMarkdown>
              </div>

              <Row className='space-x-4 items-center'>
                <p className='text-slate-600'>tags:</p>
                <Row className='gap-4 flex-wrap'>
                  {blogPost.tags?.map((tag, i) => (
                    <AppTag key={i} tag={tag} />
                  ))}
                </Row>
              </Row>

              <Link
                className={classNames(preview ? 'pointer-events-none' : '')}
                href='/blogs'
              >
                <Row className='items-center space-x-2 text-red-400 font-semibold group'>
                  <span className='group-hover:-translate-x-2 transition-transform'>
                    <LeftArrowIcon />
                  </span>
                  <p>go to article list</p>
                </Row>
              </Link>
            </Stack>

            <div className='relative space-y-8'>
              <h3 className='font-capital text-6xl'>LATEST ARTICLES</h3>
              <ArrowScrollBar className='py-[50px] gap-[20px]'>
                {!preview
                  ? latestBlogPosts.map((item, i) =>
                      item.slug === blogPost.slug ? null : (
                        <ArticleItem key={i} article={item} />
                      )
                    )
                  : null}
              </ArrowScrollBar>
            </div>
          </Stack>
        </div>
        <ToTopFab />
      </Container>
    </>
  );
};

export default Article;
