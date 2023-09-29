import GlobalSearchModalItem, {
  GlobalSearchModalItemSkeleton,
} from '@/_components/partials/global-search-modal/components/global-search-modal-items/global-search-modal-item';
import { useAlgoliaSearch } from '@/_components/partials/global-search-modal/context/search-provider';
import React, { FunctionComponent } from 'react';

interface Props {
  // no props
}

const GlobalSearchModalItems: FunctionComponent<Props> = () => {
  const { data, isLoading, isError, keyword } = useAlgoliaSearch();

  if (isLoading) {
    return (
      <div className='flex flex-col gap-2 max-h-[500px] overflow-y-auto p-8'>
        <GlobalSearchModalItemSkeleton />
        <GlobalSearchModalItemSkeleton />
      </div>
    );
  }

  if (keyword === '') {
    return (
      <div className='flex flex-col gap-2 h-[500px] max-h-[500px] overflow-y-auto py-16 p-8 justify-center items-center'>
        <span className='text-gray-400 text-lg'>{'No recent searches'}</span>
      </div>
    );
  }

  if (isError) {
    return (
      <div className='flex flex-col gap-2 h-[500px] max-h-[500px] overflow-y-auto py-16 p-8 justify-center items-center'>
        <span className='text-red-500 italic'>
          {'Something went wrong. Please try again later.'}
        </span>
      </div>
    );
  }

  if (data.length === 0) {
    return (
      <div className='flex flex-col gap-2 h-[500px] max-h-[500px] overflow-y-auto py-16 p-8 justify-center items-center'>
        <span className='text-gray-400 text-lg'>{`No data for ${keyword}`}</span>
      </div>
    );
  }

  return (
    <div className='flex flex-col gap-2 max-h-[500px] overflow-y-auto p-8'>
      {data.map((item, i) => (
        <GlobalSearchModalItem
          datePublished={'Updated 13-Sep-2023'}
          title={item.parameters.title}
          slug={item.parameters.slug}
          description={item.parameters.description}
          key={i}
        />
      ))}
    </div>
  );
};

export default GlobalSearchModalItems;
