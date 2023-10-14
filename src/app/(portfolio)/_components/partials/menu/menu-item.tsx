'use client';
import Text from '@/_components/common/typography/text';
import Row from '@/_components/layouts/row';
import useMenuContext from '@/_context/menu-provider/use-menu-context';
import classNames from 'classnames';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FunctionComponent, useEffect, useState } from 'react';

export const dataTestId = {
  container: 'menu-item-container',
};

interface Props {
  imageUrls: {
    desktop: string;
    tablet: string;
    phone: string;
  };
  isActive: boolean;
  link: string;
  title: string;
}

const MenuItem: FunctionComponent<Props> = ({
  imageUrls,
  isActive,
  link,
  title,
}) => {
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
        'flex flex-col gap-1 md:gap-2',
        'cursor-pointer relative group',
        isActive ? 'pointer-events-none' : '',
      ].join(' ')}
      data-testid={dataTestId.container}
      href={link}
      role='button'
    >
      <Row className='items-center gap-2'>
        <span
          className={classNames(
            'aspect-square w-3 rounded-full',
            'transition',
            isActive
              ? 'bg-new-black opacity-100'
              : 'opacity-0 group-hover:opacity-100 bg-new-white'
          )}
        ></span>
        <Text
          as='h3'
          className={classNames(
            'text-sm md:text-lg text-new-black transition-transform',
            isActive ? '' : '-translate-x-4 group-hover:translate-x-0'
          )}
        >
          {title}
        </Text>
      </Row>
      <div className='relative aspect-[428/926] md:aspect-[744/1133] lg:aspect-[499/322] h-[220px] md:h-[300px] lg:h-[220px] shadow-default overflow-hidden rounded w-fit'>
        <div className='md:hidden'>
          <Image
            alt={title}
            className='object-fill object-center lg:group-hover:scale-105 duration-500'
            loading='lazy'
            fill
            sizes='33vw'
            src={imageUrls.phone}
          />
        </div>
        <div className='hidden md:block lg:hidden'>
          <Image
            alt={title}
            className='object-fill object-center lg:group-hover:scale-105 duration-500'
            loading='lazy'
            fill
            sizes='33vw'
            src={imageUrls.tablet}
          />
        </div>
        <div className='hidden lg:block'>
          <Image
            alt={title}
            className='object-fill object-center lg:group-hover:scale-105 duration-500'
            loading='lazy'
            fill
            sizes='33vw'
            src={imageUrls.desktop}
          />
        </div>
      </div>
    </Link>
  );
};

export default MenuItem;
