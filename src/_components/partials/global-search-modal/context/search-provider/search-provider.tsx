'use client';
import algoliasearchClient from '@/_lib/algoliasearch-client';
import { IContentfulSearchItem } from '@/_lib/algoliasearch-client/algoliasearch-client.types';
import { createContext, useContext, useEffect, useState } from 'react';

const index = algoliasearchClient.initIndex('production');

interface IAlgoliaSearchProvider {
  data: any;
  keyword: string;
  setKeyword: (keyword: string) => void;
}

const AlgoliaSearchContext = createContext<IAlgoliaSearchProvider>({
  data: [],
  keyword: '',
  setKeyword: () => {},
});

export default function AlgoliaSearchProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [keyword, setKeyword] = useState('');
  const [data, setData] = useState<IContentfulSearchItem[]>([]);

  useEffect(() => {
    if (!keyword) return;

    const searchData = setTimeout(() => {
      index.search<IContentfulSearchItem>(keyword).then(({ hits }) => {
        setData(hits);
      });
    }, 300);

    return () => clearTimeout(searchData);
  }, [keyword]);

  return (
    <AlgoliaSearchContext.Provider value={{ data, keyword, setKeyword }}>
      {children}
    </AlgoliaSearchContext.Provider>
  );
}

export const useAlgoliaSearch = () => useContext(AlgoliaSearchContext);
