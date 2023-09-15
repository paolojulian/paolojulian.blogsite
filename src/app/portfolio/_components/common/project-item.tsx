'use client';
import Stack from '@/_components/layouts/stack';
import React, {
  FunctionComponent,
  createContext,
  useContext,
  useState,
} from 'react';
import ProjectDetailsModal from '../modals/project-detail-modal';
import { IPortfolioItem } from '../../_contentful';
import RightArrowIcon from '@/_components/icons/right-arrow-icon';
import Row from '@/_components/layouts/row';
import Image from 'next/image';

type ProjectItemVariants = 'left-image' | 'right-image';

export type ProjectItemProps = {
  project: IPortfolioItem;
  number: number;
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
  number,
}) => {
  const [openDetails, setOpenDetails] = useState(false);

  const handleOpenDetails = () => setOpenDetails(true);
  const handleCloseDetails = () => setOpenDetails(false);

  return (
    <ProjectItemContext.Provider value={project}>
      <div className='first:border-y border-b border-slate-300'>
        <Row className='justify-between items-center py-[25px] space-x-[50px]'>
          <div className='aspect-[380/360] w-[380px] border border-primary-300/30 relative'>
            <Image
              className='object-cover'
              src={project.image.url}
              alt={project.name}
              fill
            />
          </div>
          <Stack className='flex-1 space-y-[10px] items-start max-w-[500px]'>
            <p className='text-[16px] tracking-[1.4px] text-slate-700'>{`03.${number}`}</p>
            <p className='uppercase text-[32px] text-slate-700 tracking-[2.24px]'>
              {project.name}
            </p>
            <p className='text-slate-500 text-[16px]'>{project.description}</p>
            <button
              className='flex flex-row justify-center items-center space-x-[10px] text-primary-400 group'
              onClick={handleOpenDetails}
            >
              <span>SEE MORE</span>
              <div className='transition-transform group-hover:translate-x-4'>
                <RightArrowIcon />
              </div>
            </button>
          </Stack>
        </Row>

        <ProjectDetailsModal
          isOpen={openDetails}
          onClose={handleCloseDetails}
        />
      </div>
    </ProjectItemContext.Provider>
  );
};

export default ProjectItem;
