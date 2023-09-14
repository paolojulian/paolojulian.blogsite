import Stack from '@/_components/layouts/stack';
import React, { FunctionComponent, useEffect, useRef } from 'react';
import AppModal, { AppModalProps } from '@/_components/common/app-modal';
import classNames from 'classnames';
import { useProjectItemContext } from '../common/project-item';
import AppReactMarkdown from '@/_components/markdown/app-react-markdown';
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

  return (
    <AppModal isOpen={isOpen} {...props}>
      <div ref={containerRef}>
        <Stack className='space-y-16 px-[50px] py-[100px] bg-white'>
          <Stack className='space-y-16'>
            <Stack className='relative'>
              <p className='text-[20px] tracking-[1px] text-slate-400 uppercase'>{`// PROJECT OVERVIEW`}</p>
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
          <Stack className='space-y-12'>
            <Stack className='items-center pb-8 space-y-1'>
              <Row className='w-full justify-center bg-slate-50'>
                <ProjectImage
                  alt={project.name}
                  src={project.image?.url}
                  hasEffects={false}
                />
              </Row>
              <p className='text-slate-400 text-sm'>thumbnail</p>
            </Stack>
            <Stack>
              {project.tags ? (
                <Row className='space-x-12 justify-between items-center border-y border-slate-300 py-[30px]'>
                  <p className='text-slate-500'>01</p>
                  <h4 className='tracking-wider text-slate-800 text-xl min-w-[250px] flex justify-center items-center'>
                    TECHNOLOGIES
                  </h4>
                  <Row className='flex-wrap gap-2'>
                    {project.tags.map((tag, i) => (
                      <AppTag key={i} tag={tag} />
                    ))}
                  </Row>
                </Row>
              ) : null}
              {project.role ? (
                <Row className='space-x-12 justify-between items-center border-b border-slate-300 py-[30px]'>
                  <p className='text-slate-500'>02</p>
                  <h4 className='tracking-wider text-slate-800 text-xl min-w-[250px] flex justify-center items-center'>
                    ROLE
                  </h4>
                  <p className='text-slate-700'>{project.role}</p>
                </Row>
              ) : null}
              <Row className='space-x-12 justify-between items-center border-b border-slate-300 py-[30px]'>
                <p className='text-slate-500'>03</p>
                <h4 className='tracking-wider text-slate-800 text-xl min-w-[250px] flex justify-center items-center'>
                  DESCRIPTION
                </h4>
                <p className='text-slate-700'>{project.description}</p>
              </Row>
            </Stack>

            <Stack className='space-y-12'>
              <h4 className='text-slate-800 text-3xl min-w-[250px] flex justify-center items-center'>
                FEATURES
              </h4>
              <AppReactMarkdown>{project.content}</AppReactMarkdown>
            </Stack>
          </Stack>
        </Stack>
      </div>
    </AppModal>
  );
};

export default ProjectDetailsModal;
