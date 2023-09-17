'use client';
import React, { FunctionComponent } from 'react';
import Stack from '@/_components/layouts/stack';
import { SECTIONS } from '@/app/portfolio/_context/sections-context';
import SectionHeading from '@/app/portfolio/_components/common/section-heading';
import Row from '@/_components/layouts/row';
import Container from '@/_components/layouts/container';

const SERVICES = [
  {
    name: 'Design',
    description:
      'With  a passion for UI and UX design, I strive to create visually appealing interfaces that aim to provide an intuitive user experience. My process, from wireframe to UI-ready design, is guided by a basic understanding of user needs, aimed at improving their product interaction.',
  },
  {
    name: 'Develop',
    description:
      'I offer comprehensive web and hybrid-mobile development services, handling both the front-end and back-end of your system. I use the latest technologies like Next.js, React-Native, Contentful, and Node.js to create SEO ready, responsive and dynamic systems that meet your specific needs and specifications.',
  },
  {
    name: 'Deploy',
    description:
      'I ensure that once your website is ready, it’s properly hosted and accessible to users on the internet. I handle everything from setting up servers and managing databases to ensuring security protocols are in place. I also perform routine maintenance and updates to keep your site running smoothly.',
  },
];

interface Props {
  // No Props
}

const ServicesSection: FunctionComponent<Props> = (props) => {
  return (
    <section
      id={SECTIONS[2]}
      className='bg-white flex flex-row flex-1 w-full z-10'
    >
      <Container className='flex flex-col pt-[100px] md:pt-[150px] w-full gap-[10px] md:gap-[50px]'>
        <div className='text-left'>
          <SectionHeading number={2} section='services'></SectionHeading>
        </div>
        <Stack className='py-[50px]'>
          {SERVICES.map((service, i) => (
            <div
              className='flex flex-col lg:flex-row gap-[10px] py-[20px] md:py-[50px] md:items-center border-b first:border-y border-slate-300'
              key={i}
            >
              <p className='text-left text-[16px] tracking-[4px]'>
                {`02.${i + 1}`}
              </p>
              <Row className='w-full lg:w-[400px] lg:justify-center items-center lg:text-center'>
                <p className='text-[24px] tracking-[6px] uppercase flex-1'>
                  {service.name}
                </p>
              </Row>
              <Row className='flex-1 justify-center items-center'>
                <p className='text-slate-500 text-[16px] md:text-[20px]'>
                  {service.description}
                </p>
              </Row>
            </div>
          ))}
        </Stack>
      </Container>
    </section>
  );
};

export default ServicesSection;
