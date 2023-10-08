'use client';
import SearchIcon from '@/_components/icons/search-icon';
import { useGlobalSearchModal } from '@/_context/global-search-provider/global-search-provider';
import { FunctionComponent } from 'react';

interface Props {
  // no props
}

const GlobalSearchButtonIcon: FunctionComponent<Props> = () => {
  const { setIsOpen: setIsGlobalSearchModalOpen } = useGlobalSearchModal();

  const handleClick = () => {
    setIsGlobalSearchModalOpen(true);
  };

  return (
    <>
      <button
        className='text-gray-700 lg:hover:text-red-400 lg:transition-colors'
        onClick={handleClick}
      >
        <SearchIcon />
      </button>
    </>
  );
};

export default GlobalSearchButtonIcon;
