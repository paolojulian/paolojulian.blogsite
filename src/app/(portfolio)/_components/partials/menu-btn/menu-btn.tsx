'use client';
import useMenuContext from '@/_context/menu-provider/use-menu-context';
import MenuCircularText from '@/app/(portfolio)/_components/partials/menu-btn/menu-circular-text';
import classNames from 'classnames';
import { FunctionComponent } from 'react';

export const dataTestId = {
  button: 'menu-btn__button',
  closeIcon: 'menu-btn__close-icon',
  hamburgerIcon: 'menu-btn__hamburger-icon',
};

interface Props {
  // no props
}

const MenuButton: FunctionComponent<Props> = () => {
  const { isOpen, setIsOpen } = useMenuContext();

  const handleClick = () => setIsOpen((prev) => !prev);

  return (
    <button
      onClick={handleClick}
      className={[
        'w-16 md:w-20 aspect-square rounded-full shadow-highBlur',
        'fixed left-1/2 bottom-6 lg:bottom-12 -translate-x-1/2',
        'transition-transform duration-500 z-50',
        'active:scale-90',
        'group',
        // isOpen ? 'bg-new-black' : 'bg-new-white',
      ].join(' ')}
      data-testid={dataTestId.button}
    >
      <div
        className={classNames(
          'absolute -left-5 -top-5',
          'transition-transform duration-500',
          'translate-y-6 translate-x-6 lg:group-hover:translate-x-0 lg:group-hover:translate-y-0',
          'scale-50 lg:group-hover:scale-100'
        )}
      >
        <MenuCircularText className='text-new-white' />
      </div>
      <div
        className={classNames(
          'w-16 md:w-20 aspect-square rounded-full absolute inset-0',
          'transition duration-500',
          'lg:group-hover:scale-105',
          isOpen ? 'bg-new-black' : 'bg-new-white'
        )}
      ></div>

      {/* <div className='flex flex-col justify-center items-center transition-opacity'>
        {isOpen ? (
          <CloseIcon
            className='w-8 h-8 text-new-white'
            data-testid={dataTestId.closeIcon}
          />
        ) : (
          <HamburgerMenuIcon
            className='w-8 h-8 text-new-black'
            data-testid={dataTestId.hamburgerIcon}
          />
        )}
      </div> */}
    </button>
  );
};

export default MenuButton;
