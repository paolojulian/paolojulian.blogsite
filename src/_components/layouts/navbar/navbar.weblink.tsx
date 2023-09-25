import classNames from 'classnames';
import Link from 'next/link';
import { FunctionComponent } from 'react';

const WebLink: FunctionComponent<
  React.ComponentProps<typeof Link> & { isActive: boolean; name: string }
> = ({ isActive, name, ...props }) => {
  return (
    <li
      className={classNames(
        'flex flex-col justify-between items-center space-y-2',
        isActive ? 'text-gray-800' : 'text-gray-400 hover:text-red-400'
      )}
    >
      <Link {...props}>{name}</Link>
      <div
        className={classNames(
          'w-[10px] h-[1px]',
          isActive ? 'bg-gray-800' : 'bg-transparent'
        )}
      ></div>
    </li>
  );
};

export default WebLink;
