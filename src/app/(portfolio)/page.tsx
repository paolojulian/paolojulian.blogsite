// import { getPortfolioItems } from './portfolio.backup/_api/portfolio-item';
// import { getPortfolio } from './portfolio.backup/_api/portfolio';
// import { getLatestBlogPosts } from './blogs/_api/blog-post';

import LinkedinIcon from '@/_components/icons/linkedin-icon';
import Logo from '@/_components/icons/logo';
import Container from '@/_components/layouts/container';
import Row from '@/_components/layouts/row';
import Stack from '@/_components/layouts/stack';
import MailIcon from '@/app/(main-layout)/portfolio.backup/_components/icons/mail-icon';
import PhoneIcon from '@/app/(main-layout)/portfolio.backup/_components/icons/phone-icon';

export default async function Home() {
  // const [portfolioItems, portfolio, blogPosts] = await Promise.all([
  //   getPortfolioItems(),
  //   getPortfolio(),
  //   getLatestBlogPosts(),
  // ]);

  return (
    <Row>
      <nav className='fixed left-0 top-0 w-28 py-10 flex flex-col justify-between h-screen items-center'>
        <Logo className='bg-new-black text-new-white w-6 h-6' />
        <Stack className='gap-4 w-full items-center'>
          <PhoneIcon className='w-6 h-6' />
          <MailIcon className='w-6 h-6' />
          <LinkedinIcon className='h-5 w-5' />
        </Stack>
      </nav>
      <main className='max-w-screen-2xl w-full mx-auto'>
        <Container></Container>
      </main>
    </Row>
  );
}
