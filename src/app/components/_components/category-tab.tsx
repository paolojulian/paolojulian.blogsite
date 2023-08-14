import Stack from '@/_components/layouts/stack';
import classNames from 'classnames';
import React, { FunctionComponent } from 'react';
import { ComponentCategories } from '../types';

export type CategoryTabProps = {
  onClick: (category: ComponentCategories) => void;
  title: string;
  description: string;
  category: ComponentCategories;
  isActive?: boolean;
};

const CategoryTab: FunctionComponent<CategoryTabProps> = ({
  onClick,
  title,
  description,
  category,
  isActive = false,
}) => {
  return (
    <Stack
      className={classNames(
        'space-y-1 flex-1 select-none py-6 px-3 border-t',
        isActive
          ? 'border-red-400 pointer-events-none'
          : ' border-slate-300 hover:border-slate-500 hover:bg-slate-400/10'
      )}
      role='button'
      onClick={() => onClick(category)}
    >
      <h2
        className={classNames(
          'font-semibold text-lg',
          isActive && 'text-red-400'
        )}
      >
        {title}
      </h2>
      <p className='text-sm'>{description}</p>
    </Stack>
  );
};

export default CategoryTab;
