'use client';
import React, { FunctionComponent, useEffect } from 'react';
import ReactDOM from 'react-dom';
import algoliasearchClient from '@/_lib/algoliasearch-client';
import usePortal from '@/_hooks/use-portal/use-portal';
import classNames from 'classnames';
import Stack from '@/_components/layouts/stack';
import Row from '@/_components/layouts/row';
import GlobalSearchModalSearchBar from '@/_components/partials/global-search-modal/components/global-search-modal-search-bar';

interface Props {
  // no props
}

const GlobalSearchModal: FunctionComponent<Props> = (props) => {
  // useEffect(() => {
  //   const index = algoliasearchClient.initIndex('production');
  //   index.search('Commit').then(({ hits }) => {
  //     console.log(hits);
  //   });
  // }, []);
  const modalRoot = usePortal('modal-root');

  if (modalRoot === null) {
    return null;
  }

  return ReactDOM.createPortal(
    <>
      <div
        className={classNames(
          'fixed inset-0 backdrop-blur-md z-50 flex justify-center items-center'
        )}
      >
        {/* Overlay */}
        <div
          className={classNames('fixed inset-0 bg-slate-800/20 -z-10')}
        ></div>

        {/* Card */}
        <Stack
          className={classNames(
            'bg-white rounded-xl max-w-screen-md w-full overflow-hidden',
            'shadow-highBlur-md'
          )}
        >
          <GlobalSearchModalSearchBar />
          <input placeholder='search' className='py-4 px-4 rounded-t-xl' />
          <Stack className='p-8 border-t border-slate-300'></Stack>
          <Row className='p-4 border-t border-slate-300 justify-end'>
            Search by algolia
          </Row>
        </Stack>
      </div>
    </>,
    modalRoot
  );
};

export default GlobalSearchModal;
