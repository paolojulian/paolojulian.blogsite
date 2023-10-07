'use client';
import useMenuContext from '@/_context/menu-provider/use-menu-context';
import Text from '@/app/custom-components/application-ui/landing-pages/with-fixed-menu/components/common/typography/text';
import Uppercase from '@/app/custom-components/application-ui/landing-pages/with-fixed-menu/components/common/typography/uppercase';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FunctionComponent, useEffect, useState } from 'react';

export const dataTestId = {
  container: 'menu-item-container',
};

interface Props {
  title: string;
  description: string;
  link: string;
}

const MenuItem: FunctionComponent<Props> = ({ description, link, title }) => {
  const { setIsOpen } = useMenuContext();

  const pathname = usePathname();
  const [currentPathname, setCurrentPathname] = useState(pathname);

  useEffect(() => {
    if (currentPathname !== pathname) {
      setCurrentPathname(pathname);
      setIsOpen(false);
    }
  }, [pathname, currentPathname, setIsOpen]);

  return (
    <Link
      className={[
        'flex flex-col border border-slate-400 p-2 md:p-6 xl:p-12 gap-2',
        'cursor-pointer relative group',
        'hover:bg-slate-100/10',
      ].join(' ')}
      data-testid={dataTestId.container}
      href={link}
      role='button'
    >
      <div className='absolute left-0 top-0 w-4 transition-opacity opacity-0 group-hover:opacity-100 aspect-square bg-primary-300'></div>
      <Uppercase as='h3' className='text-base md:text-xl xl:text-2xl'>
        {title}
      </Uppercase>
      <Text className='hidden md:block text-base xl:text-lg text-slate-400'>
        {description}
      </Text>
    </Link>
  );
};

export default MenuItem;
