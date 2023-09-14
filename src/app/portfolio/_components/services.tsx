'use client';
import React, { FunctionComponent } from 'react';
import Stack from '@/_components/layouts/stack';
import { SECTIONS } from '@/app/portfolio/_context/sections-context';
import classNames from 'classnames';
import SectionHeading from '@/app/portfolio/_components/common/section-heading';
import Row from '@/_components/layouts/row';
import Image from 'next/image';
import RightArrowIcon from '@/_components/icons/right-arrow-icon';

interface Props {
  // No Props
}

const ServicesSection: FunctionComponent<Props> = (props) => {
  return (
    <section
      id={SECTIONS[2]}
      className='bg-white flex flex-row flex-1 max-w-[1268px] px-[50px] mx-auto w-full z-10'
    >
      <Stack className='py-[50px] w-full space-y-[50px]'>
        <div className='text-left'>
          <SectionHeading number={2} section='services'></SectionHeading>
        </div>
        <Stack className='py-[50px] space-y-[20px]'>
          <Row className='space-x-[10px] items-center border-y border-slate-300'>
            <p className='px-[9px] flex justify-center items-center text-[16px] tracking-[4px]'>
              02.1
            </p>
            <Row className='w-[500px] justify-center items-center text-center'>
              <p className='text-[24px] tracking-[6px] uppercase flex-1'>
                DESIGN
              </p>
            </Row>
            <Row className='flex-1 justify-center items-center py-[40px]'>
              <p className='text-slate-500 text-[20px]'>
                {`With  a passion for UI and UX design, I strive to create visually appealing interfaces that aim to provide an intuitive user experience. My process, from wireframe to UI-ready design, is guided by a basic understanding of user needs, aimed at improving their product interaction.`}
              </p>
            </Row>
          </Row>
          <Row className='space-x-[10px] items-center border-b border-slate-300'>
            <p className='px-[9px] flex justify-center items-center text-[16px] tracking-[4px]'>
              02.2
            </p>
            <Row className='w-[500px] justify-center items-center text-center'>
              <p className='text-[24px] tracking-[6px] uppercase flex-1'>
                DEVELOP
              </p>
            </Row>
            <Row className='flex-1 justify-center items-center py-[40px]'>
              <p className='text-slate-500 text-[20px]'>
                {`I offer comprehensive web and hybrid-mobile development services, handling both the front-end and back-end of your system. I use the latest technologies like Next.js, React-Native, Contentful, and Node.js to create SEO ready, responsive and dynamic systems that meet your specific needs and specifications.`}
              </p>
            </Row>
          </Row>
          <Row className='space-x-[10px] items-center border-b border-slate-300'>
            <p className='px-[9px] flex justify-center items-center text-[16px] tracking-[4px]'>
              02.3
            </p>
            <Row className='w-[500px] justify-center items-center text-center'>
              <p className='text-[24px] tracking-[6px] uppercase flex-1'>
                DEPLOY
              </p>
            </Row>
            <Row className='flex-1 justify-center items-center py-[40px]'>
              <p className='text-slate-500 text-[20px]'>
                {`I ensure that once your website is ready, it’s properly hosted and accessible to users on the internet. I handle everything from setting up servers and managing databases to ensuring security protocols are in place. I also perform routine maintenance and updates to keep your site running smoothly.`}
              </p>
            </Row>
          </Row>
        </Stack>
      </Stack>
    </section>
  );
};

export default ServicesSection;
