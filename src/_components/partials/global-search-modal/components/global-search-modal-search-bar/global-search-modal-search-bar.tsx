import { useAlgoliaSearch } from '../../context/search-provider';
import DATA_TEST from './global-search-modal-search-bar.constants';
import React, { FunctionComponent } from 'react';
import Row from '@/_components/layouts/row';
import classNames from 'classnames';
import SearchIcon from '@/_components/icons/search-icon';

interface Props {
  // no props
}

const GlobalSearchModalSearchBar: FunctionComponent<Props> = () => {
  const { keyword, setKeyword } = useAlgoliaSearch();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setKeyword(e.target.value);
  };

  return (
    <Row className='items-center justify-between relative'>
      <label className='hidden' htmlFor='globalSearch'>
        Search
      </label>
      <div className='absolute left-6 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400'>
        <SearchIcon />
      </div>
      <input
        id='globalSearch'
        className={classNames(
          'pl-16 p-6 rounded-t-xl w-full',
          'border-slate-400 focus:outline-none focus:ring focus:border-slate-800'
        )}
        value={keyword}
        onChange={handleChange}
        placeholder='Search...'
        data-testid={DATA_TEST.container}
      />
      <button
        className={classNames(
          'absolute top-1/2 -translate-y-1/2 right-6',
          'rounded-lg',
          'px-4 py-2 border border-slate-300 md:hover:bg-slate-50 text-slate-400 w-fit h-fit'
        )}
      >
        Esc
      </button>
    </Row>
  );
};

export default GlobalSearchModalSearchBar;
