// import { getPortfolioItems } from './portfolio.backup/_api/portfolio-item';
// import { getPortfolio } from './portfolio.backup/_api/portfolio';
// import { getLatestBlogPosts } from './blogs/_api/blog-post';

import Text from '@/_components/common/typography/text';
import Uppercase from '@/_components/common/typography/uppercase';
import LinkedinIcon from '@/_components/icons/linkedin-icon';
import Logo from '@/_components/icons/logo';
import PolygonBackground from '@/_components/images/polygon-background';
import Container from '@/_components/layouts/container';
import Row from '@/_components/layouts/row';
import Stack from '@/_components/layouts/stack';
import MailIcon from '@/app/(main-layout)/portfolio.backup/_components/icons/mail-icon';
import PhoneIcon from '@/app/(main-layout)/portfolio.backup/_components/icons/phone-icon';
import GetInTouchBtn from '@/app/(portfolio)/_components/get-in-touch-btn';
import ScrollDownToSeeMore from '@/app/(portfolio)/_components/scroll-down-to-see-more';

export default async function Home() {
  // const [portfolioItems, portfolio, blogPosts] = await Promise.all([
  //   getPortfolioItems(),
  //   getPortfolio(),
  //   getLatestBlogPosts(),
  // ]);

  return (
    <Row>
      <nav className='absolute md:fixed left-0 top-0 p-4 lg:p-10 flex flex-col justify-between h-screen items-center'>
        <Logo className='bg-new-black text-new-white w-6 h-6' />
        <Stack className='gap-6 lg:gap-4 w-full items-center'>
          <PhoneIcon className='w-[1.4rem] h-[1.4rem] scale-75 md:scale-100' />
          <MailIcon className='w-6 h-6 scale-75 md:scale-100' />
          <LinkedinIcon className='h-5 w-5 scale-75 md:scale-100' />
        </Stack>
      </nav>

      <div className='absolute right-0 top-0'>
        <PolygonBackground />
      </div>

      <main className='max-w-screen-2xl w-full mx-auto relative ml-4 md:ml-12 lg:ml-auto min-h-screen'>
        <Container className='pt-60 lg:pt-52 relative md:min-h-screen'>
          <ScrollDownToSeeMore />

          <div className='hidden md:block absolute bottom-0 right-0 p-4 lg:p-8'>
            <GetInTouchBtn />
          </div>

          <Stack className='gap-24 lg:gap-20'>
            <Uppercase
              as='h1'
              className='text-2xl md:text-4xl lg:text-7xl lg:leading-[normal]'
            >
              HELLO, I AM <span className='text-new-highlight'>PAOLO.</span>
              <br />
              A SOFTWARE ENGINEER
              <br />
              <span className='ml-10 md:ml-20'>WITH A FOCUS ON</span>
              <br />
              <span className='text-new-highlight'>FRONT-END</span>
              <br className='lg:hidden' />
              <span className='ml-10 md:ml-20 lg:ml-0'> DEVELOPMENT</span>
            </Uppercase>

            <Row className='justify-end'>
              <div className='md:w-1/2'>
                <Text className='text-new-highlight text-sm md:text-base lg:text-lg w-56 md:w-64 lg:w-[28rem]'>
                  I built this website as my own{' '}
                  <span className='text-new-white'>personal space</span>, where
                  I express myself through various creations inspired by my
                  experiences and challenges, fostering a learning journey we
                  can embark on together.
                </Text>
                <div className='md:hidden'>
                  <GetInTouchBtn />
                </div>
              </div>
            </Row>
          </Stack>
        </Container>
        <Container>
          <div className='h-screen'></div>
        </Container>
      </main>
    </Row>
  );
}
