'use client';
import Row from '@/_components/layouts/row';
import Stack from '@/_components/layouts/stack';
import React, {
  FunctionComponent,
  createContext,
  useContext,
  useState,
} from 'react';
import HashTag from './hashtag';
import classNames from 'classnames';
import ProjectImage from './project-image';
import ProjectTitle from './project-title';
import ProjectDetailsModal from '../modals/project-detail-modal';
import { IPortfolioItem } from '../../_contentful';
import RightArrowIcon from '@/_components/icons/right-arrow-icon';
import IntersectProvider from '@/_context/IntersectContext';

type ProjectItemVariants = 'left-image' | 'right-image';

export type ProjectItemProps = {
  project: IPortfolioItem;
  variant?: ProjectItemVariants;
};

const ProjectItemContext = createContext<IPortfolioItem>({
  name: '',
  content: '',
  description: '',
  image: {
    url: '',
  },
  tags: [],
});
export const useProjectItemContext = () => useContext(ProjectItemContext);

const ProjectItem: FunctionComponent<ProjectItemProps> = ({
  project,
  variant = 'left-image',
}) => {
  const [openDetails, setOpenDetails] = useState(false);

  const handleOpenDetails = () => setOpenDetails(true);
  const handleCloseDetails = () => setOpenDetails(false);

  return (
    <ProjectItemContext.Provider value={project}>
      <div>
        <div
          className={classNames(
            'relative',
            'flex flex-col md:items-center',
            'group cursor-pointer',
            variant === 'left-image' ? 'md:flex-row' : 'md:flex-row-reverse'
          )}
          onClick={handleOpenDetails}
        >
          {/* image */}
          <div className='relative overflow-hidden'>
            <ProjectImage alt={project.name} src={project.image?.url} />
          </div>

          {/* content */}
          <Stack
            className={classNames(
              'flex-1 justify-center space-y-4 z-10 py-5 md:p-5 h-full',
              variant === 'left-image'
                ? 'md:ml-8 md:pr-12'
                : 'md:mr-8 md:text-right md:pl-8'
            )}
          >
            <div
              className={classNames(
                // 'cursor-pointer',
                variant === 'left-image' ? '' : 'md:text-right'
              )}
              // onClick={handleOpenDetails}
            >
              <ProjectTitle>{project.name}</ProjectTitle>
            </div>
            <p className='text-sm xl:text-base tracking-wide text-slate-500 line-clamp-4'>
              {project.description}
            </p>

            <button
              className={classNames(
                'text-left text-base text-red-400 flex flex-row items-center space-x-2',
                variant === 'left-image' ? 'justify-start' : 'md:justify-end'
              )}
            >
              <span>SEE MORE</span>
              <span className='transition-transform translate-x-0 group-hover:translate-x-2'>
                <RightArrowIcon />
              </span>
            </button>

            {/* <Row
              className={classNames(
                'space-x-2 flex-wrap',
                variant === 'left-image' ? 'text-left' : 'justify-end'
              )}
            >
              {project.tags.map((tag) => (
                <HashTag key={tag}>{tag}</HashTag>
              ))}
            </Row> */}

            {/* <span
              onClick={handleOpenDetails}
              className='text-slate-500 text-sm cursor-pointer'
            >
              learn more...
            </span> */}
          </Stack>
        </div>

        <ProjectDetailsModal
          isOpen={openDetails}
          onClose={handleCloseDetails}
        />
      </div>
    </ProjectItemContext.Provider>
  );
};

export default ProjectItem;
