import AppCopyright from '@/_components/common/app-copyright';
import SectionHeading from '@/_components/common/section-heading';
import Container from '@/_components/layouts/container';
import Stack from '@/_components/layouts/stack';
import Main from '@/_components/partials/main';
import Menu from '@/_components/partials/menu';
import MenuButton from '@/_components/partials/menu-btn';
import MenuProvider from '@/_context/menu-provider';
import ContactForm from '@/app/contact/_components/contact-form';
import Link from 'next/link';
import { FunctionComponent } from 'react';

interface Props {
  // no props
}

const ContactPage: FunctionComponent<Props> = () => {
  return (
    <>
      <MenuProvider>
        <Main>
          <div className='font-sans'>
            <Stack className='min-h-screen'>
              <Container className='mx-auto w-full max-w-screen-2xl pt-6 lg:pt-12'>
                <SectionHeading title='Contact' />
                <div className='flex flex-col lg:flex-row py-16 md:py-32 bg-white gap-16 2xl:gap-32 justify-between lg:items-center w-full'>
                  {/* Heading */}
                  <Stack className='gap-6 md:gap-16'>
                    <Stack className='text-4xl md:text-7xl font-medium uppercase'>
                      <div className='text-slate-400'>Get in touch.</div>
                      <div className='text-slate-800'>
                        Let&lsquo;s work
                        <br />
                        together.
                      </div>
                    </Stack>

                    <div className='flex flex-row flex-wrap text-slate-400 gap-6 md:gap-14'>
                      <Stack className='flex-1 w-[300px]'>
                        <p className='mb-1 text-slate-700'>Contact</p>
                        <p>paolovincentarch@gmail.com</p>
                        <p>(+63)9279488654</p>
                      </Stack>
                      <Stack className='flex-1 w-[300px]'>
                        <p className='mb-1 text-slate-700'>Address</p>
                        <p>Baguio City, Philippines</p>
                        <p>2600</p>
                      </Stack>
                    </div>
                    <div className='flex flex-row flex-wrap text-slate-400'>
                      <Stack>
                        <p className='mb-1 text-slate-700'>Socials</p>
                        <Link href='https://www.linkedin.com/in/pipz/'>
                          Linkedin
                        </Link>
                      </Stack>
                    </div>
                  </Stack>

                  <Stack className='flex-1 gap-6 md:gap-12 justify-end max-w-2xl md:min-w-[450px]'>
                    <h3 className='text-4xl text-slate-700 font-medium'>
                      Tell me about your project
                    </h3>
                    <ContactForm />
                  </Stack>
                </div>
                <div className='border-t border-slate-200 w-full py-8 text-slate-400'>
                  <AppCopyright />
                </div>
              </Container>
            </Stack>
          </div>
        </Main>
        <Menu />
        <MenuButton />
      </MenuProvider>
    </>
  );
};

export default ContactPage;
