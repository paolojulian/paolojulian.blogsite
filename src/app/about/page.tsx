import SectionHeading from '@/_components/common/section-heading';
import Text from '@/_components/common/typography/text';
import Uppercase from '@/_components/common/typography/uppercase';
import Container from '@/_components/layouts/container';
import MenuProvider from '@/_context/menu-provider/menu-provider';
import Main from '@/app/(portfolio)/_components/partials/main';
import Menu from '@/app/(portfolio)/_components/partials/menu';
import MenuButton from '@/app/(portfolio)/_components/partials/menu-btn/menu-btn';
import classNames from 'classnames';
import { FunctionComponent } from 'react';

interface Props {
  // no props
}

const AboutPage: FunctionComponent<Props> = () => {
  return (
    <div>
      <MenuProvider>
        <Main>
          <Container className='max-w-screen-2xl w-full mx-auto min-h-screen bg-new-black py-8'>
            <SectionHeading title='paolojulian.dev - about' />

            {/* Landing */}
            <div className='py-10 lg:py-20 flex flex-col gap-10'>
              <h1 className='text-7xl md:text-9xl lg:text-8xl text-new-white leading-tight md:leading-tight text-center'>
                <Uppercase as='span'>
                  <span className='text-new-highlight'>K</span>EEP{' '}
                </Uppercase>
                <br className='block md:hidden' />
                <Uppercase as='span'>
                  <span className='text-new-highlight'>I</span>T{' '}
                </Uppercase>
                <Uppercase as='span'>
                  <span className='text-new-highlight'>S</span>IMPLE{' '}
                </Uppercase>
                <Uppercase as='span'>
                  <span className='text-new-highlight'>S</span>TUPID{' '}
                </Uppercase>
              </h1>

              <Text
                className={classNames(
                  'ml-auto lg:ml-[50%] text-new-highlight',
                  'max-w-[14.25rem] md:max-w-[31rem]',
                  'text-sm md:text-lg'
                )}
              >
                {`
                I embrace the “KISS” principle not only in programming but in my
                everyday life as well. It's about simplicity—minimalist style,
                fewer possessions, and prioritizing quality over quantity. I aim
                to free up mental space, allowing me to focus on the bigger
                picture, both in work and life.
                `}
              </Text>
            </div>
          </Container>
        </Main>
        <Menu />
        <MenuButton />
      </MenuProvider>
    </div>
  );
};

export default AboutPage;
