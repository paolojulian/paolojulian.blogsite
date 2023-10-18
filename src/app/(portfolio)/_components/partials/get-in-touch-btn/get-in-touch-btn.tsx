import Text from '@/_components/common/typography/text';
import React, { FunctionComponent } from 'react';

interface Props {
  // no props
}

const GetInTouchBtn: FunctionComponent<Props> = () => {
  return (
    <button className='text-new-black dark:text-new-white mt-4 font-medium text-lg'>
      <Text>Get in Touch</Text>
    </button>
  );
};

export default GetInTouchBtn;
