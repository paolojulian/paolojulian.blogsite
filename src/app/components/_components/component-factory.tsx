import React, { FunctionComponent } from 'react';
import { ComponentCategories } from '../types';
import ComponentCard from './component-card';

const MemoizedComponentCard = React.memo(ComponentCard);

export type ComponentFactoryProps = {
  category: ComponentCategories;
};

const ComponentFactory: FunctionComponent<ComponentFactoryProps> = ({
  category,
}) => {
  switch (category) {
    case 'application-ui':
      return (
        <>
          <MemoizedComponentCard
            title='Layouts'
            variantCount={5}
            href='components/application-ui/layouts'
          />
          <MemoizedComponentCard title='Text Input' variantCount={5} />
          <MemoizedComponentCard title='Text Area' variantCount={5} />
          <MemoizedComponentCard title='Buttons' variantCount={5} />
          <MemoizedComponentCard title='Layouts' variantCount={5} />
          <MemoizedComponentCard title='Text Input' variantCount={5} />
          <MemoizedComponentCard title='Text Area' variantCount={5} />
          <MemoizedComponentCard title='Buttons' variantCount={5} />
          <MemoizedComponentCard title='Layouts' variantCount={5} />
          <MemoizedComponentCard title='Text Input' variantCount={5} />
          <MemoizedComponentCard title='Text Area' variantCount={5} />
          <MemoizedComponentCard title='Buttons' variantCount={5} />
        </>
      );
    case 'marketing':
      return (
        <>
          <MemoizedComponentCard title='Hero' variantCount={5} />
          <MemoizedComponentCard title='Text Input' variantCount={5} />
          <MemoizedComponentCard title='Text Area' variantCount={5} />
          <MemoizedComponentCard title='Buttons' variantCount={5} />
          <MemoizedComponentCard title='Layouts' variantCount={5} />
          <MemoizedComponentCard title='Text Input' variantCount={5} />
          <MemoizedComponentCard title='Text Area' variantCount={5} />
          <MemoizedComponentCard title='Buttons' variantCount={5} />
          <MemoizedComponentCard title='Layouts' variantCount={5} />
          <MemoizedComponentCard title='Text Input' variantCount={5} />
          <MemoizedComponentCard title='Text Area' variantCount={5} />
          <MemoizedComponentCard title='Buttons' variantCount={5} />
        </>
      );
    case 'ecommerce':
      return (
        <>
          <MemoizedComponentCard title='Product' variantCount={5} />
          <MemoizedComponentCard title='Text Input' variantCount={5} />
          <MemoizedComponentCard title='Text Area' variantCount={5} />
          <MemoizedComponentCard title='Buttons' variantCount={5} />
          <MemoizedComponentCard title='Layouts' variantCount={5} />
          <MemoizedComponentCard title='Text Input' variantCount={5} />
          <MemoizedComponentCard title='Text Area' variantCount={5} />
          <MemoizedComponentCard title='Buttons' variantCount={5} />
          <MemoizedComponentCard title='Layouts' variantCount={5} />
          <MemoizedComponentCard title='Text Input' variantCount={5} />
          <MemoizedComponentCard title='Text Area' variantCount={5} />
          <MemoizedComponentCard title='Buttons' variantCount={5} />
        </>
      );
  }
};

export default ComponentFactory;
