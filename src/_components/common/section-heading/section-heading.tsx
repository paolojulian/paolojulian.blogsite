import Uppercase from '@/_components/common/typography/uppercase';
import { FunctionComponent, ReactNode } from 'react';

interface Props {
  title: string;
  RightContent?: ReactNode;
}

const SectionHeading: FunctionComponent<Props> = ({
  RightContent = null,
  title,
}) => {
  return (
    <div className='border-b-2 border-slate-400 text-gray-700 flex justify-between items-end md:p-2'>
      <Uppercase as='h2' type='wider'>
        {title}
      </Uppercase>
      <span>{RightContent}</span>
    </div>
  );
};

export default SectionHeading;
