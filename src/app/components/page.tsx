import React, { FunctionComponent } from 'react';
import Stack from '@/_components/layouts/stack';
import Row from '@/_components/layouts/row';

export type BlogsPageProps = {
  // no props
};

const BlogsPage: FunctionComponent<BlogsPageProps> = async (props) => {
  return (
    <>
      <Stack
        className='h-full justify-center items-center text-slate-600 text-2xl font-medium'
        style={{
          minHeight: 'calc(100vh - 70px)',
        }}
      >
        coming soon...
      </Stack>
    </>
  );
};

export default BlogsPage;
