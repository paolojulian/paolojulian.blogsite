import Uppercase from '@/app/custom-components/application-ui/landing-pages/with-fixed-menu/components/common/typography/uppercase';
import React, { FunctionComponent } from 'react';

interface Props {
  title: string;
  RightContent?: React.ReactNode;
}

const SectionHeading: FunctionComponent<Props> = ({
  RightContent = null,
  title,
}) => {
  return (
    <div className='border-b-2 border-slate-400 text-gray-700 flex justify-between p-2'>
      <Uppercase as='h2' type='wider'>
        {title}
      </Uppercase>
      <span>{RightContent}</span>
    </div>
  );
};

export default SectionHeading;
