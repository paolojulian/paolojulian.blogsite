'use client';
import Container from '@/_components/layouts/container';
import useMenuContext from '@/_context/menu-provider/use-menu-context';
import { FunctionComponent } from 'react';
import MenuItem from './menu-item';

export const dataTestId = {
  container: 'menu-container',
};

interface Props {
  // no props
}

const Menu: FunctionComponent<Props> = () => {
  const { isOpen } = useMenuContext();

  return (
    <nav
      className={[
        'fixed bottom-0 left-0 bg-slate-950',
        'py-12 h-[400px] lg:h-1/2 w-full z-30',
        'duration-500',
        'ease-[cubic-bezier(0.45, 0.02, 0.09, 0.98)]',
        isOpen ? 'translate-y-0' : 'translate-y-full',
      ].join(' ')}
      data-testid={dataTestId.container}
    >
      <Container
        className={[
          'max-w-screen-2xl mx-auto w-full',
          'grid grid-cols-2 lg:grid-cols-4 gap-4 text-white transition duration-500',
          'ease-[cubic-bezier(0.45,0.02,0.09,0.98)]',
          isOpen ? 'scale-100 translate-y-0' : 'scale-75 -translate-y-[120%]',
          isOpen ? 'opacity-100' : 'opacity-0',
          isOpen ? '' : 'pointer-events-none',
        ].join(' ')}
      >
        <MenuItem
          title='About'
          description='All about me, my work, and my tech stack.'
          link='/'
        />
        <MenuItem
          title='Articles'
          description='Things I wrote during my journey.'
          link='/blogs'
        />
        <MenuItem
          title='Components'
          description='Custom components I personally designed.'
          link='/components'
        />
        <MenuItem
          title='Contact'
          description='Getting in touch, socials, emails and more.'
          link='/contact'
        />
      </Container>
    </nav>
  );
};

export default Menu;
