import Stack from '@/_components/layouts/stack';
import React, { FunctionComponent, useEffect, useRef } from 'react';
import AppModal, { AppModalProps } from '@/_components/common/app-modal';
import classNames from 'classnames';
import { useProjectItemContext } from '../common/project-item';
import AppReactMarkdown from '@/_components/markdown/app-react-markdown';
import styles from './project-detail-modal.module.css';
import Row from '@/_components/layouts/row';
import ProjectImage from '../common/project-image';
import AppTag from '@/_components/common/app-tag';

export type ProjectDetailsModalProps = {
  // no props
} & Omit<AppModalProps, 'children'>;

const ProjectDetailsModal: FunctionComponent<ProjectDetailsModalProps> = ({
  isOpen,
  ...props
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const project = useProjectItemContext();

  const handleBackToTop = () => {
    containerRef.current?.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    if (isOpen) {
      containerRef.current?.scrollTo({
        top: 0,
        behavior: 'instant',
      });
    }
  }, [isOpen]);

  return (
    <AppModal isOpen={isOpen} {...props}>
      <div
        ref={containerRef}
        className={classNames(
          'inset-0 p-8 md:p-16 h-full overflow-y-scroll',
          styles.container
        )}
      >
        <Stack className='space-y-16'>
          <Stack className='space-y-16'>
            <Stack className='relative'>
              <h2 className='text-slate-500'>project overview</h2>
              <h3
                className={classNames(
                  'font-capital text-3xl md:text-6xl text-slate-800 uppercase'
                )}
              >
                {project.name}
              </h3>
              {/* <div className='border-b border-slate-400 w-[70%] absolute -left-5 -bottom-2'></div>
              <div className='border-b border-slate-400 w-[90%] absolute left-5 -bottom-4'></div> */}
            </Stack>
          </Stack>
          <Stack className='space-y-6 md:px-16 md:border-l md:border-slate-400'>
            <Stack className='items-center pb-8 space-y-1'>
              <Row className='w-full justify-center bg-light'>
                <ProjectImage
                  alt={project.name}
                  src={project.image?.url}
                  hasEffects={false}
                />
              </Row>
              <p className='text-slate-400 text-sm'>thumbnail</p>
            </Stack>
            {project.role ? (
              <Stack className='space-y-1'>
                <h4 className='text-slate-500 text-sm font-medium'>role</h4>
                <p className='text-slate-700 font-medium'>{project.role}</p>
              </Stack>
            ) : null}
            {project.tags ? (
              <Stack className='space-y-1'>
                <h4 className='text-slate-500 text-sm font-medium'>
                  technologies
                </h4>
                <Row className='flex-wrap space-x-4'>
                  {project.tags.map((tag, i) => (
                    <AppTag key={i} tag={tag} />
                  ))}
                </Row>
              </Stack>
            ) : null}

            <Stack className='space-y-2'>
              <h4 className='text-slate-500 text-sm font-medium'>
                description
              </h4>
              <p className='text-slate-700'>{project.description}</p>
            </Stack>

            <Stack className='space-y-2'>
              <h4 className='text-slate-500 text-sm font-medium'>features</h4>
              <AppReactMarkdown>{project.content}</AppReactMarkdown>
            </Stack>
          </Stack>

          <button onClick={handleBackToTop}>
            <span className='text-slate-500 text-sm'>back to top</span>
          </button>
        </Stack>
      </div>
    </AppModal>
  );
};

export default ProjectDetailsModal;