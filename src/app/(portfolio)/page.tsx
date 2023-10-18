import EnterAnimation from '@/_components/animations/enter-animation';
import Text from '@/_components/common/typography/text';
import Uppercase from '@/_components/common/typography/uppercase';
import LinkedinIcon from '@/_components/icons/linkedin-icon';
import Logo from '@/_components/icons/logo';
import PolygonBackground from '@/_components/images/polygon-background';
import Container from '@/_components/layouts/container';
import Row from '@/_components/layouts/row';
import Stack from '@/_components/layouts/stack';
import { getPortfolio } from '@/app/(main-layout)/_api/portfolio';
import { getPortfolioItems } from '@/app/(main-layout)/_api/portfolio-item';
import { getLatestBlogPosts } from '@/app/(main-layout)/blogs/_api/blog-post';
import MailIcon from '@/app/(main-layout)/portfolio.backup/_components/icons/mail-icon';
import PhoneIcon from '@/app/(main-layout)/portfolio.backup/_components/icons/phone-icon';
import HoverableTitle from '@/app/(portfolio)/_components/common/hoverable-title';
import GetInTouchBtn from '@/app/(portfolio)/_components/partials/get-in-touch-btn';
import ScrollDownToSeeMore from '@/app/(portfolio)/_components/partials/scroll-down-to-see-more';
import Image from 'next/image';

export default async function Home() {
  const [portfolioItems] = await Promise.all([
    getPortfolioItems(),
    getPortfolio(),
    getLatestBlogPosts(),
  ]);

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

      <main className='max-w-screen-2xl w-full mx-auto relative md:ml-12 lg:ml-auto min-h-screen'>
        <Container className='pt-60 lg:pt-52 relative min-h-screen'>
          <EnterAnimation delay={2} type='fade'>
            <ScrollDownToSeeMore />
          </EnterAnimation>

          <EnterAnimation delay={1} type='fade'>
            <div className='hidden md:block absolute bottom-0 right-0 p-4 lg:p-8'>
              <GetInTouchBtn />
            </div>
          </EnterAnimation>

          <Stack className='gap-24 lg:gap-20'>
            <EnterAnimation>
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
            </EnterAnimation>

            <EnterAnimation delay={0.5}>
              <Row className='justify-end'>
                <div className='md:w-1/2'>
                  <Text className='text-new-highlight text-sm md:text-base lg:text-lg w-56 md:w-64 lg:w-[28rem]'>
                    I built this website as my own{' '}
                    <span className='text-new-white'>personal space</span>,
                    where I express myself through various creations inspired by
                    my experiences and challenges, fostering a learning journey
                    we can embark on together.
                  </Text>
                  <div className='md:hidden'>
                    <GetInTouchBtn />
                  </div>
                </div>
              </Row>
            </EnterAnimation>
          </Stack>
        </Container>
        <Container className='py-12 md:py-24'>
          <Stack className='gap-8 md:gap-20'>
            <div className='border-b border-new-highlight text-new-highlight flex justify-between items-end md:p-2 w-full'>
              <Text className='text-new-highlight text-xl'>LATEST WORK</Text>
              <span></span>
            </div>

            <div className='w-full overflow-y-hidden overflow-x-auto pr-8 md:pr-0'>
              <div className='flex flex-row md:grid grid-cols-3 gap-6 w-fit md:w-full'>
                {portfolioItems.slice(0, 3).map((item) => (
                  <div className='group md:h-fit' key={item.name}>
                    <HoverableTitle textColor='white' title={item.name} />

                    <div className='relative aspect-[411/250] w-[300px] md:w-auto md:h-full mt-2'>
                      <div className='absolute bottom-0 left-0 w-full h-[90%] bg-new-highlight/60'></div>
                      <div className='absolute bottom-0 left-0 w-[97.5%] h-[95%] bg-new-highlight'></div>
                      <div className='h-full w-[95%]'>
                        <div className='bg-new-white h-full relative overflow-hidden'>
                          <Image
                            alt={item.name}
                            className='object-cover group-hover:scale-105 duration-200'
                            src={item.image.url}
                            fill
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Stack>
        </Container>
        <Container className='py-12 md:py-24'>
          <Stack className='gap-8 md:gap-20'>
            <div className='border-b border-new-highlight text-new-highlight flex justify-between items-end md:p-2 w-full'>
              <Text className='text-new-highlight text-xl'>TECH STACK</Text>
              <span></span>
            </div>

            <div className='flex flex-col gap-12 md:gap-0 md:flex-row w-full'>
              <div className='flex-1'>
                <Text className='text-new-highlight text-base md:text-xl max-w-[332px] xl:max-w-[555px]'>
                  {`
                  These are the tools I prefer to use as of now. However, my
                  journey is ongoing, and I remain open to learning and
                  exploring new tools in the future. It's important to remember
                  that these are just temporary preferences, and each is just a
                  tool in my creative arsenal.
                  `}
                </Text>
              </div>
              <div className='flex-1'>
                <Stack className='gap-12 lg:gap-20'>
                  <Stack className='gap-2'>
                    <Text
                      as='h4'
                      className='text-new-highlight text-sm font-bold'
                    >
                      FRONT-END
                    </Text>
                    <div className='text-new-white text-2xl leading-tight'>
                      <Text>Next.js</Text>
                      <Text>React.js</Text>
                      <Text>TailwindCSS</Text>
                      <Text>Typescript</Text>
                      <Text>GraphQL</Text>
                      <Text>Testing Library</Text>
                    </div>
                  </Stack>
                  <Stack className='gap-2'>
                    <Text
                      as='h4'
                      className='text-new-highlight text-sm font-bold'
                    >
                      BACK-END
                    </Text>
                    <div className='text-new-white text-2xl leading-tight'>
                      <Text>Node.js</Text>
                      <Text>AWS</Text>
                      <Text>Contentful</Text>
                      <Text>Websocket</Text>
                      <Text>GraphQL</Text>
                    </div>
                  </Stack>
                  <Stack className='gap-2'>
                    <Text
                      as='h4'
                      className='text-new-highlight text-sm font-bold'
                    >
                      UI/UX
                    </Text>
                    <div className='text-new-white text-2xl leading-tight'>
                      <Text>Figma</Text>
                    </div>
                  </Stack>
                </Stack>
              </div>
            </div>
          </Stack>
        </Container>
      </main>
    </Row>
  );
}
