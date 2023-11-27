import SectionHeading from '@/_components/common/section-heading';
import PomodoroButtons from '@/app/apps/pomodoro/_components/PomodoroButtons';
import PomodoroPhaseIndicator from '@/app/apps/pomodoro/_components/PomodoroPhaseIndicator';
import PomodoroTimer from '@/app/apps/pomodoro/_components/PomodoroTimer';
import PomodoroProvider from '@/app/apps/pomodoro/_context/PomodoroContext';
import { FunctionComponent } from 'react';

interface Props {
  // no props
}

const Pomodoro: FunctionComponent<Props> = () => {
  return (
    <PomodoroProvider>
      <div className='flex flex-col items-center gap-8 py-8'>
        <SectionHeading title='paolojulian.dev - Pomodoro' />
        <div className='flex flex-col items-center gap-2 mt-10'>
          <PomodoroTimer />
          <PomodoroPhaseIndicator />
        </div>
        <PomodoroButtons />
      </div>
    </PomodoroProvider>
  );
};

export default Pomodoro;
