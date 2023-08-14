import Stack from '@/_components/layouts/stack';
import React, { FunctionComponent, useMemo } from 'react';

export type ComponentCardProps = {
  title: string;
  variantCount: number;
};

const ComponentCard: FunctionComponent<ComponentCardProps> = ({
  title,
  variantCount,
}) => {
  const variantCountText = useMemo(() => {
    if (variantCount > 1) {
      return `${variantCount} variants`;
    }

    return `${variantCount} variant`;
  }, [variantCount]);

  return (
    <Stack className='px-3 py-2 hover:bg-neutral-400/20 active:bg-neutral-400/30' role='button'>
      <div className='aspect-[12/7] rounded-lg bg-white mb-2'></div>
      <h4 className='font-semibold'>{title}</h4>
      <p className='text-sm text-slate-500'>{variantCountText}</p>
    </Stack>
  );
};

export default ComponentCard;
