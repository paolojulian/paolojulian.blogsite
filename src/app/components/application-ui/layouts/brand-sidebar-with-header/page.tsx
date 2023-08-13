import React, { FunctionComponent } from 'react';
import BrandSidebarWithHeader from './_components/brand-sidebar-with-header';

export type BrandSidebarWithHeaderPageProps = {
  // no props
};

const BrandSidebarWithHeaderPage: FunctionComponent<
  BrandSidebarWithHeaderPageProps
> = (props) => {
  return <BrandSidebarWithHeader />;
};

export default BrandSidebarWithHeaderPage;
