import Main from '@/app/(main-layout)/_components/main';
import MenuProvider from '@/app/(main-layout)/_context/menu-provider';
import About from '@/app/custom-components/application-ui/landing-pages/with-fixed-menu/components/partials/about';
import Articles from '@/app/custom-components/application-ui/landing-pages/with-fixed-menu/components/partials/articles';
import Footer from '@/app/custom-components/application-ui/landing-pages/with-fixed-menu/components/partials/footer';
import Hero from '@/app/custom-components/application-ui/landing-pages/with-fixed-menu/components/partials/hero/hero';
import Menu from '@/app/custom-components/application-ui/landing-pages/with-fixed-menu/components/partials/menu';
import MenuButton from '@/app/custom-components/application-ui/landing-pages/with-fixed-menu/components/partials/menu-btn/menu-btn';
import Tools from '@/app/custom-components/application-ui/landing-pages/with-fixed-menu/components/partials/tools';
import Work from '@/app/custom-components/application-ui/landing-pages/with-fixed-menu/components/partials/work';
import { FunctionComponent } from 'react';

interface Props {
  // no props
}

const LandingWorkArea: FunctionComponent<Props> = () => {
  return (
    <MenuProvider>
      <div className='font-sans text-gray-800'>
        <Main>
          <Hero />
          <About />
          <Work />
          <Tools />
          <Articles />
          <Footer />
        </Main>
        <Menu />
        <MenuButton />
      </div>
    </MenuProvider>
  );
};

export default LandingWorkArea;
