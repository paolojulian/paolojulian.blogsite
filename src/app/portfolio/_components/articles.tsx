'use client';
import React, { FunctionComponent } from 'react';
import Stack from '@/_components/layouts/stack';
import { SECTIONS } from '@/app/portfolio/_context/sections-context';
import SectionHeading from '@/app/portfolio/_components/common/section-heading';
import Row from '@/_components/layouts/row';
import { IBlogPost } from '@/app/blogs/_contentful';
import ArticleItem from '@/app/components/_components/articles/article-item';

interface Props {
  items: IBlogPost[];
}

const ArticlesSection: FunctionComponent<Props> = ({ items }) => {
  return (
    <section
      id={SECTIONS[4]}
      className='bg-white flex flex-row flex-1 max-w-main px-[50px] mx-auto w-full z-10'
    >
      <Stack className='py-[50px] w-full space-y-[25px]'>
        <div className='text-left'>
          <SectionHeading number={4} section='latest articles'></SectionHeading>
        </div>
        <Row className='py-[50px] space-x-[20px]'>
          {items.map((item, i) => (
            <ArticleItem key={i} article={item} />
          ))}
        </Row>
      </Stack>
    </section>
  );
};

export default ArticlesSection;
