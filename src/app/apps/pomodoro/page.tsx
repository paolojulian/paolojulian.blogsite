import PomodoroButtons from '@/app/apps/pomodoro/_components/PomodoroButtons/PomodoroButtons';
import PomodoroTimer from '@/app/apps/pomodoro/_components/PomodoroTimer';
import PomodoroProvider from '@/app/apps/pomodoro/_context/PomodoroContext';
import { FunctionComponent } from 'react';

interface Props {
  // no props
}

const Pomodoro: FunctionComponent<Props> = () => {
  return (
    <PomodoroProvider>
      <div className='flex flex-col items-center'>
        <PomodoroTimer />
        <PomodoroButtons />
      </div>
    </PomodoroProvider>
  );
};

export default Pomodoro;
