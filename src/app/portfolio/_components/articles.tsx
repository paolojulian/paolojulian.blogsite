'use client';
import React, { FunctionComponent } from 'react';
import Stack from '@/_components/layouts/stack';
import { SECTIONS } from '@/app/portfolio/_context/sections-context';
import SectionHeading from '@/app/portfolio/_components/common/section-heading';
import { IBlogPost } from '@/app/blogs/_contentful';
import ArticleItem from '@/app/components/_components/articles/article-item';
import ArrowScrollBar from '@/app/blogs/_components/scrollbars/arrow-scrollbar';

interface Props {
  items: IBlogPost[];
}

const ArticlesSection: FunctionComponent<Props> = ({ items }) => {
  return (
    <section
      id={SECTIONS[4]}
      className='bg-white flex flex-row flex-1 max-w-main px-[50px] mx-auto w-full z-10'
    >
      <Stack className='pt-[150px] pb-[50px] w-full space-y-[25px]'>
        <div className='text-left'>
          <SectionHeading number={4} section='latest articles'></SectionHeading>
        </div>
        <ArrowScrollBar className='py-[50px] gap-[20px]'>
          {items.map((item, i) => (
            <ArticleItem key={i} article={item} />
          ))}
        </ArrowScrollBar>
      </Stack>
    </section>
  );
};

export default ArticlesSection;
