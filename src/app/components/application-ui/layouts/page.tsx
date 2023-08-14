import Footer from '@/_components/layouts/footer';
import Navbar from '@/_components/layouts/navbar';
import Stack from '@/_components/layouts/stack';
import Link from 'next/link';
import React, { FunctionComponent } from 'react';
import BrandSidebarWithHeaderPage from './brand-sidebar-with-header/page';

export type ApplicationUILayoutsPageProps = {
  // no props
};

const ApplicationUILayoutsPage: FunctionComponent<
  ApplicationUILayoutsPageProps
> = (props) => {
  return (
    <>
      <Navbar />
      <main className='mx-auto max-w-screen-lg 2xl:max-w-screen-xl px-4 md:px-12 flex-1 w-full'>
        <div className='border-l border-slate-400'>
          <Stack
            className='h-full  text-slate-600 px-12 py-16'
            style={{
              minHeight: 'calc(100vh - 70px)',
            }}
          >
            {/* header */}
            <Stack className='space-y-4 pb-24'>
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
                  <h2 className='text-bold text-lg'>
                    Branded sidebar with header
                  </h2>
                  <div className='overflow-hidden aspect-video relative bg-gray-100 rounded-2xl'>
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
