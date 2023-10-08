import ScrollToElementBtn from '@/_components/common/scroll-to-element-btn';
import SectionHeading from '@/_components/common/section-heading';
import RightArrowIcon from '@/_components/icons/right-arrow-icon';
import Container from '@/_components/layouts/container';
import Stack from '@/_components/layouts/stack';
import { Metadata } from 'next';
import { FunctionComponent } from 'react';
import { getLatestBlogPosts } from './_api/blog-post';
import BlogItem from './_components/blog-item';

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
    <>
      <Container className='pt-12 pb-40 flex flex-col gap-8 xl:gap-8 z-10 relative'>
        <SectionHeading title='Articles' />
        <Stack className='text-5xl md:text-7xl font-medium xl:max-w-[70%] pt-12'>
          <h1 className='uppercase'>
            <span className='text-slate-400'>Explore my articles,</span>
            <span className='text-slate-800'>
              <br />
              crafted through both challenges and triumphs.
            </span>
          </h1>
        </Stack>
        <button className='flex flex-row w-fit gap-4 md:pl-4 text-xl items-center group'>
          <ScrollToElementBtn targetId='latest-articles'>
            <span className='transition-colors group-hover:text-red-400 text-base font-black tracking-widest'>
              BROWSE NOW
            </span>
          </ScrollToElementBtn>
          <RightArrowIcon className='text-red-400 transition-transform group-hover:translate-x-full' />
        </button>
      </Container>
      <Container id='latest-articles' className='mb-8'>
        <SectionHeading title='Latest' RightContent='01' />
        <div className='gap-8 py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
          {blogPosts.map((blogPost, i) => (
            <BlogItem blogPost={blogPost} key={i} />
          ))}
        </div>
      </Container>
    </>
  );
};

export default BlogsPage;
