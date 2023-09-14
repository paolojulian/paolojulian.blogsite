'use client';
import React, { FunctionComponent } from 'react';
import Stack from '@/_components/layouts/stack';
import { SECTIONS } from '@/app/portfolio/_context/sections-context';
import SectionHeading from '@/app/portfolio/_components/common/section-heading';
import Row from '@/_components/layouts/row';
import RightArrowIcon from '@/_components/icons/right-arrow-icon';

interface Props {
  // No Props
}

const ProjectsSection: FunctionComponent<Props> = (props) => {
  return (
    <section
      id={SECTIONS[3]}
      className='bg-white flex flex-row flex-1 max-w-[1268px] px-[50px] mx-auto w-full z-10'
    >
      <Stack className='py-[50px] w-full space-y-[50px]'>
        <div className='text-left'>
          <SectionHeading number={3} section='latest projects'></SectionHeading>
        </div>
        <Stack className='py-[50px]'>
          <Row className='justify-between items-center border-y border-slate-300 py-[25px]'>
            <div className='aspect-[380/360] h-full border border-primary-300/30'></div>
            <Stack className='flex-1 space-y-[10px] items-start max-w-[600px]'>
              <p className='text-[20px] tracking-[1.4px] text-slate-500'>01.</p>
              <p className='uppercase text-[32px] text-slate-700 tracking-[2.24px]'>
                LANDING PAGES
              </p>
              <p className='text-slate-500 text-[16px]'>
                A Floor Planner with Seat Reservation app is a versatile mobile
                and web-based application that caters to diverse needs,
                including planning and organizing seating arrangements for
                events, venues, parking lots, hotels, and other spaces. The app
                seamlessly combines the capabilities of a floor planner and a
                seat reservation system, making it an indispensable tool for
                event organizers, hospitality industry professionals, and
                facility managers.
              </p>
              <button className='flex flex-row justify-center items-center space-x-[10px] text-primary-400'>
                <span>SEE MORE</span>
                <RightArrowIcon />
              </button>
            </Stack>
          </Row>
          <Row className='justify-between items-center border-b border-slate-300 py-[25px]'>
            <div className='aspect-[380/360] h-full border border-primary-300/30'></div>
            <Stack className='flex-1 space-y-[10px] items-start max-w-[600px]'>
              <p className='text-[20px] tracking-[1.4px] text-slate-500'>02.</p>
              <p className='uppercase text-[32px] text-slate-700 tracking-[2.24px]'>
                BLOGSITE W/ HEADLESS CMS
              </p>
              <p className='text-slate-500 text-[16px]'>
                A Floor Planner with Seat Reservation app is a versatile mobile
                and web-based application that caters to diverse needs,
                including planning and organizing seating arrangements for
                events, venues, parking lots, hotels, and other spaces. The app
                seamlessly combines the capabilities of a floor planner and a
                seat reservation system, making it an indispensable tool for
                event organizers, hospitality industry professionals, and
                facility managers.
              </p>
              <button className='flex flex-row justify-center items-center space-x-[10px] text-primary-400'>
                <span>SEE MORE</span>
                <RightArrowIcon />
              </button>
            </Stack>
          </Row>
          <Row className='justify-between items-center border-b border-slate-300 py-[25px]'>
            <div className='aspect-[380/360] h-full border border-primary-300/30'></div>
            <Stack className='flex-1 space-y-[10px] items-start max-w-[600px]'>
              <p className='text-[20px] tracking-[1.4px] text-slate-500'>03.</p>
              <p className='uppercase text-[32px] text-slate-700 tracking-[2.24px]'>
                COMPONENT FACTORY
              </p>
              <p className='text-slate-500 text-[16px]'>
                A Floor Planner with Seat Reservation app is a versatile mobile
                and web-based application that caters to diverse needs,
                including planning and organizing seating arrangements for
                events, venues, parking lots, hotels, and other spaces. The app
                seamlessly combines the capabilities of a floor planner and a
                seat reservation system, making it an indispensable tool for
                event organizers, hospitality industry professionals, and
                facility managers.
              </p>
              <button className='flex flex-row justify-center items-center space-x-[10px] text-primary-400'>
                <span>SEE MORE</span>
                <RightArrowIcon />
              </button>
            </Stack>
          </Row>
        </Stack>
      </Stack>
    </section>
  );
};

export default ProjectsSection;
