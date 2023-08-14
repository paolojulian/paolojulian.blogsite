import Footer from '@/_components/layouts/footer';
import Navbar from '@/_components/layouts/navbar';
import Stack from '@/_components/layouts/stack';
import Link from 'next/link';
import React, { FunctionComponent } from 'react';
import Row from '@/_components/layouts/row';
import RightArrowIcon from '@/_components/icons/right-arrow-icon';

export type ApplicationUILayoutsPageProps = {
  // no props
};

const ApplicationUILayoutsPage: FunctionComponent<
  ApplicationUILayoutsPageProps
> = (props) => {
  return (
    <>
      <Navbar />
      <main className='max-w-screen-xl mx-auto px-4 lg:px-0 flex-1 w-full'>
        <div className='border-l border-slate-400'>
          <Stack
            className='h-full text-slate-600 px-8 py-8 md:py-16'
            style={{
              minHeight: 'calc(100vh - 70px)',
            }}
          >
            {/* header */}
            <Stack className='space-y-4 pb-12 md:pb-24'>
              <div className='space-x-4'>
                <Link
                  href='/components'
                  className='md:hover:text-red-400 font-medium'
                >
                  Components
                </Link>
                <span>/</span>
                <span>Application UI</span>
              </div>
              <div className='relative w-fit'>
                <h1 className='font-anton pointer-events-none text-slate-800 text-5xl md:text-8xl w-full uppercase'>
                  Layouts
                </h1>
                <div className='absolute translate-y-2 md:translate-y-3 top-1/2 -right-4 w-16 h-[3px] bg-red-400 pointer-events-none'></div>
              </div>

              <Stack className='py-12 space-y-12'>
                <Stack className='space-y-4'>
                  <div className='flex flex-col md:flex-row justify-between md:items-center'>
                    <h2 className='text-bold text-lg'>
                      Branded sidebar with header
                    </h2>

                    <Link href='/components/application-ui/layouts/brand-sidebar-with-header'>
                      <Row className='items-center space-x-1 text-red-400 text-sm font-medium'>
                        <span>Full screen</span>
                        <RightArrowIcon />
                      </Row>
                    </Link>
                  </div>
                  <div className='overflow-hidden h-[600px] lg:h-auto lg:aspect-video relative rounded lg:rounded-2xl border border-slate-400'>
                    <iframe
                      src='/components/application-ui/layouts/brand-sidebar-with-header'
                      title='Branded sidebar with header'
                      className='w-full h-full'
                    />
                    {/* <BrandSidebarWithHeaderPage /> */}
                  </div>
                </Stack>
              </Stack>
            </Stack>
          </Stack>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default ApplicationUILayoutsPage;
