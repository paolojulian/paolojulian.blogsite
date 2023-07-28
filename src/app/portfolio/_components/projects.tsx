import Stack from '@/_components/layouts/stack';
import React, { FunctionComponent } from 'react';
import SectionHeading from './common/section-heading';
import ProjectItem from './common/project-item';
import { latestProjects } from '../_utils/projects';

export type ProjectsSectionProps = {
  // No Props
};

const ProjectsSection: FunctionComponent<ProjectsSectionProps> = (props) => {
  return (
    <>
      <Stack className='py-10 space-y-4'>
        <SectionHeading>latest projects</SectionHeading>
        <Stack className='space-y-8'>
          {latestProjects.map((project, i) => (
            <ProjectItem
              key={i}
              variant={i % 2 === 0 ? 'left-image' : 'right-image'}
              title={project.title}
              description={project.description}
              hashtags={project.technologies}
            />
          ))}
        </Stack>
      </Stack>
    </>
  );
};

export default ProjectsSection;