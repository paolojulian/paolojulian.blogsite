'use client';
import React, { FunctionComponent, useEffect } from 'react';
import algoliasearchClient from '@/_lib/algoliasearch-client';

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
  return <div className=''></div>;
};

export default GlobalSearchModal;
