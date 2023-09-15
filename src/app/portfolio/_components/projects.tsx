'use client';
import React, { FunctionComponent } from 'react';
import Stack from '@/_components/layouts/stack';
import { SECTIONS } from '@/app/portfolio/_context/sections-context';
import SectionHeading from '@/app/portfolio/_components/common/section-heading';
import ProjectItem from '@/app/portfolio/_components/common/project-item';
import { IPortfolioItem } from '@/app/portfolio/_contentful';

interface Props {
  items: IPortfolioItem[];
}

const MemoizedProjectItem = React.memo(ProjectItem);

const ProjectsSection: FunctionComponent<Props> = ({ items }) => {
  return (
    <section
      id={SECTIONS[3]}
      className='bg-white flex flex-row flex-1 px-[50px] w-full z-10'
    >
      <Stack className='py-[50px] w-full space-y-[25px]'>
        <div className='text-left'>
          <SectionHeading number={3} section='latest projects'></SectionHeading>
        </div>
        <Stack className='py-[50px]'>
          {items.map((item, i) => (
            <MemoizedProjectItem
              number={i + 1}
              project={item}
              key={item.name}
            />
          ))}
        </Stack>
      </Stack>
    </section>
  );
};

export default ProjectsSection;
