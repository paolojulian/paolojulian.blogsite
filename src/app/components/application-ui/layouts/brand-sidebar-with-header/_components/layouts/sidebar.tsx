import React, { FunctionComponent } from 'react';
import Container from './container';
import SidebarItem from './sidebar-item';
import HomeIcon from '../icons/home-icon';
import UsersIcon from '../icons/users-icon';
import FolderIcon from '../icons/folder-icon';
import CalendarIcon from '../icons/calendar-icon';
import ChartPieIcon from '../icons/chart-pie-icon';
import { Anton } from 'next/font/google';
import classNames from 'classnames';
import Stack from './stack';
import GearIcon from '../icons/gear-icon';
import { useSidebarControls } from '../../_context/SidebarControlsProvider';
import CrossIcon from '../icons/cross-icon';

const anton = Anton({ weight: '400', subsets: ['latin'] });

export type SidebarProps = {
  // no props
};

const MemoizedSidebarItem = React.memo(SidebarItem);

const SidebarMenu = () => {
  return (
    <Container className='flex-1 flex flex-col bg-gradient-to-t from-violet-700 to-fuchsia-700 lg:border-r lg:border-neutral-300 h-full'>
      <Stack className='py-5 space-y-8 flex-1'>
        {/* logo */}
        <div
          className={classNames(
            'w-9 h-9 rounded-full bg-neutral-50 text-neutral-900 flex items-center justify-center text-lg select-none',
            anton.className
          )}
        >
          P
        </div>
        <nav className='space-y-12 flex flex-col flex-1'>
          <ul className='space-y-1'>
            <MemoizedSidebarItem Icon={<HomeIcon />} isActive>
              Dashboard
            </MemoizedSidebarItem>
            <MemoizedSidebarItem Icon={<UsersIcon />}>Team</MemoizedSidebarItem>
            <MemoizedSidebarItem Icon={<FolderIcon />}>
              Projects
            </MemoizedSidebarItem>
            <MemoizedSidebarItem Icon={<CalendarIcon />}>
              Calendar
            </MemoizedSidebarItem>
            <MemoizedSidebarItem Icon={<ChartPieIcon />}>
              Reports
            </MemoizedSidebarItem>
          </ul>

          <div className='space-y-3 flex-1'>
            <p className='text-sm text-neutral-300 font-medium px-2'>
              Your teams
            </p>
            <ul>
              <MemoizedSidebarItem
                Icon={
                  <div className='w-6 h-6 rounded-lg text-white bg-neutral-800/10 border border-neutral-400 text-xs flex items-center justify-center'>
                    F
                  </div>
                }
              >
                Front-end Devs
              </MemoizedSidebarItem>

              <MemoizedSidebarItem
                Icon={
                  <div className='w-6 h-6 rounded-lg text-white bg-neutral-800/10 border border-neutral-400 text-xs flex items-center justify-center'>
                    U
                  </div>
                }
              >
                UI Designers
              </MemoizedSidebarItem>

              <MemoizedSidebarItem
                Icon={
                  <div className='w-6 h-6 rounded-lg text-white bg-neutral-800/10 border border-neutral-400 text-xs flex items-center justify-center'>
                    M
                  </div>
                }
              >
                Management
              </MemoizedSidebarItem>
            </ul>
          </div>

          <MemoizedSidebarItem Icon={<GearIcon />}>
            Settings
          </MemoizedSidebarItem>
        </nav>
      </Stack>
    </Container>
  );
};

const Sidebar: FunctionComponent<SidebarProps> = (props) => {
  const { isOpen, setIsOpen } = useSidebarControls();

  return (
    <>
      {/* web */}
      <aside
        className={classNames(
          'hidden lg:flex flex-col w-72 fixed inset-0',
          'z-50'
        )}
      >
        <SidebarMenu />
      </aside>

      {/* mobile */}
      <aside
        className={classNames(
          'absolute inset-0',
          'flex flex-row z-50',
          isOpen ? 'pointer-events-auto' : 'pointer-events-none'
        )}
      >
        <div
          className={classNames(
            'flex flex-row',
            'z-10',
            'w-full h-full max-w-md transition-transform ease',
            isOpen ? 'translate-x-0' : '-translate-x-full'
          )}
        >
          <SidebarMenu />

          <button
            className='text-neutral-50 flex flex-col justify-start p-4 h-full'
            onClick={() => setIsOpen(false)}
          >
            <CrossIcon />
          </button>
        </div>
        <div
          className={classNames(
            'bg-neutral-800/90 flex-1 h-full p-4 fixed inset-0 -z-10',
            'transition-opacity duration-300',
            isOpen ? 'opacity-1' : 'opacity-0'
          )}
          role='button'
          onClick={() => setIsOpen(false)}
        ></div>
      </aside>
    </>
  );
};

export default Sidebar;
