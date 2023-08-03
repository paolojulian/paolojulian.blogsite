import Stack from '@/_components/layouts/stack';
import React, { FunctionComponent, useEffect, useRef } from 'react';
import AppModal, { AppModalProps } from '@/_components/common/app-modal';
import classNames from 'classnames';
import { useProjectItemContext } from '../common/project-item';
import AppReactMarkdown from '@/_components/markdown/app-react-markdown';
import styles from './project-detail-modal.module.css';

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
              <h2 className='text-slate-500 -ml-4'>project overview</h2>
              <h3 className={classNames('font-bold text-2xl md:text-4xl text-slate-700')}>
                {project.name}
              </h3>
              <div className='border-b border-slate-400 w-[70%] absolute -left-5 -bottom-2'></div>
              <div className='border-b border-slate-400 w-[90%] absolute left-5 -bottom-4'></div>
            </Stack>
            {/* <Row className='w-full justify-center bg-slate-50'>
              <ProjectImage
                alt={project.name}
                src={project.image?.url}
                hasEffects={false}
              />
            </Row> */}
          </Stack>
          {project.role ? (
            <Stack>
              <h4>role</h4>
              <p>{project.role}</p>
            </Stack>
          ) : null}
          <div>
            <AppReactMarkdown>{project.content}</AppReactMarkdown>
          </div>

          <button onClick={handleBackToTop}>
            <span className='text-slate-500 text-sm'>back to top</span>
          </button>
        </Stack>
      </div>
    </AppModal>
  );
};

export default ProjectDetailsModal;
