import SectionHeading from '@/_components/common/section-heading';
import PomodoroButtons from '@/app/apps/pomodoro/_components/PomodoroButtons';
import PomodoroPhaseIndicator from '@/app/apps/pomodoro/_components/PomodoroPhaseIndicator';
import PomodoroTasks from '@/app/apps/pomodoro/_components/PomodoroTasks';
import PomodoroTimer from '@/app/apps/pomodoro/_components/PomodoroTimer';
import PomodoroProvider from '@/app/apps/pomodoro/_context/PomodoroContext';
import { FunctionComponent } from 'react';

interface Props {
  // no props
}

const Pomodoro: FunctionComponent<Props> = () => {
  return (
    <PomodoroProvider>
      <div className='h-full flex flex-col items-center gap-8 p-4'>
        <SectionHeading title='paolojulian.dev - Pomodoro' />
        <div className='flex flex-col items-center gap-2 mt-4'>
          <PomodoroTimer />
          <PomodoroPhaseIndicator />
        </div>

        <PomodoroTasks />

        <PomodoroButtons />
      </div>
    </PomodoroProvider>
  );
};

export default Pomodoro;
