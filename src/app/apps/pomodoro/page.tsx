import PomodoroButtons from '@/app/apps/pomodoro/_components/PomodoroButtons';
import PomodoroPhaseIndicator from '@/app/apps/pomodoro/_components/PomodoroPhaseIndicator';
import PomodoroTasks from '@/app/apps/pomodoro/_components/PomodoroTasks';
import PomodoroTimer from '@/app/apps/pomodoro/_components/PomodoroTimer';
import Text from '@/app/apps/pomodoro/_components/Text';
import PomodoroProvider from '@/app/apps/pomodoro/_context/PomodoroContext';
import { FunctionComponent } from 'react';

interface Props {
  // no props
}

const Pomodoro: FunctionComponent<Props> = () => {
  return (
    <PomodoroProvider>
      <div className='h-full flex flex-col items-center gap-8 p-4'>
        <div className='border-b-2 border-new-white text-new-white flex justify-between items-end md:p-2 w-full'>
          <Text as='h2'>paolojulian.dev - Pomodoro</Text>
          <span></span>
        </div>
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
