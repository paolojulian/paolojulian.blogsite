import EnterAnimation from '@/_components/animations/enter-animation';
import EnterAnimationList, {
  EnterAnimationListItem,
} from '@/_components/animations/enter-animation-list';
import GlobalSearchBtn, {
  GlobalSearchButtons,
} from '@/_components/common/global-search-btn';
import ScrollToElementBtn from '@/_components/common/scroll-to-element-btn';
import SectionHeading from '@/_components/common/section-heading';
import Uppercase from '@/_components/common/typography/uppercase';
import RightArrowIcon from '@/_components/icons/right-arrow-icon';
import Container from '@/_components/layouts/container';
import Row from '@/_components/layouts/row';
import Stack from '@/_components/layouts/stack';
import GlobalSearchProvider from '@/_context/global-search-provider';
import { Metadata } from 'next';
import { FunctionComponent } from 'react';
import { getLatestBlogPosts } from './_api/blog-post';
import BlogItem from './_components/blog-item';
import classNames from 'classnames';
import AppCopyright from '@/_components/common/app-copyright';

export type BlogsPageProps = {
  // no props
};

export const metadata: Metadata = {
  title: 'Paolo Julian | Blog List',
  description:
    'Explore my latest blog posts and stay updated with our informative content. Discover insights, tips, and news on various topics.',
};

const BlogsPage: FunctionComponent<BlogsPageProps> = async () => {
  const blogPosts = await getLatestBlogPosts();

  return (
    <GlobalSearchProvider>
      <Container
        className={classNames('max-w-screen-2xl mx-auto relative w-full pb-40')}
      >
        <section className='pt-6 md:pt-12 pb-40 flex flex-col gap-8 xl:gap-8 z-10 relative'>
          <SectionHeading
            title='PaoloJulian.dev - Articles'
            RightContent={
              <Row>
                <GlobalSearchButtons.icon />
              </Row>
            }
          />
          <Stack className='xl:max-w-[70%] pt-12'>
            <EnterAnimation>
              <Uppercase className='text-4xl md:text-7xl font-medium'>
                <span className='text-new-highlight'>Explore my articles,</span>
                <span className='text-new-white'>
                  <br />
                  crafted through both challenges and triumphs.
                </span>
              </Uppercase>
            </EnterAnimation>
          </Stack>

          <EnterAnimationList className='flex flex-col md:flex-row gap-4'>
            <EnterAnimationListItem>
              <ScrollToElementBtn targetId='latest-articles'>
                <div
                  className={classNames(
                    'flex flex-row items-center justify-center gap-4',
                    'w-full md:w-fit rounded-sm',
                    'py-4 pl-12 pr-10',
                    'bg-new-accent lg:hover:bg-new-white lg:transition-colors text-new-black'
                  )}
                >
                  <Uppercase className='text-lg'>Browse Now</Uppercase>
                  <RightArrowIcon />
                </div>
              </ScrollToElementBtn>
            </EnterAnimationListItem>
            <EnterAnimationListItem>
              <GlobalSearchBtn />
            </EnterAnimationListItem>
          </EnterAnimationList>
        </section>

        <section id='latest-articles' className='mb-8'>
          <SectionHeading title='Latest' RightContent='01' />
          <EnterAnimationList className='gap-8 py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
            {blogPosts.map((blogPost, i) => (
              <BlogItem blogPost={blogPost} key={i} />
            ))}
          </EnterAnimationList>
        </section>

        <footer className='border-t border-new-white w-full py-8 text-new-highlight'>
          <AppCopyright />
        </footer>
      </Container>
    </GlobalSearchProvider>
  );
};

export default BlogsPage;
