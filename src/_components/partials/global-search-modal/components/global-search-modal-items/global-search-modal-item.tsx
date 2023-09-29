import Link from 'next/link';
import React, { FunctionComponent } from 'react';

interface Props {
  datePublished: string;
  title: string;
  description: string;
  slug: string;
}

const GlobalSearchModalItem: FunctionComponent<Props> = ({
  datePublished,
  title,
  description,
  slug,
}) => {
  return (
    <Link
      href={slug ? `/blogs/${slug}` : '#'}
      className='flex flex-col md:flex-row gap-6 items-center transition-colors hover:bg-red-200/20 p-4'
    >
      <div className='aspect-square w-[30%] h-auto bg-gray-200'></div>
      <div className='flex-1'>
        <p className='italic font-medium text-gray-400 text-sm'>
          {datePublished}
        </p>
        <h4 className='uppercase font-semibold text-xl line-clamp-3 text-gray-700'>
          {title}
        </h4>
        <p className='line-clamp-2 text-gray-600 text-base'>{description}</p>
      </div>
    </Link>
  );
};

export const GlobalSearchModalItemSkeleton = () => {
  return (
    <div className='flex flex-col md:flex-row gap-6 items-center p-4 animate-pulse'>
      <div className='aspect-square w-[30%] h-auto bg-gray-200'></div>
      <div className='flex-1 flex flex-col gap-4'>
        <div className='italic text-gray-400 text-sm h-4 w-[40%] bg-slate-100 rounded-full'></div>
        <div className='flex flex-col gap-2'>
          <div className='h-6 w-[100%] bg-slate-200 rounded-full'></div>
          <div className='h-6 w-[80%] bg-slate-200 rounded-full'></div>
        </div>
        <div className='flex flex-col gap-2'>
          <div className='h-4 w-[100%] bg-slate-100 rounded-full'></div>
          <div className='h-4 w-[40%] bg-slate-100 rounded-full'></div>
        </div>
      </div>
    </div>
  );
};

export default GlobalSearchModalItem;
