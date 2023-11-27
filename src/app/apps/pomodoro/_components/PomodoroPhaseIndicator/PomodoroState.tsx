'use client';

import {
  PomodoroPhase,
  usePomodoro,
} from '@/app/apps/pomodoro/_context/PomodoroContext';
import classNames from 'classnames';

export default function PomodoroPhaseIndicator() {
  return (
    <div className='flex gap-2 text-new-highlight'>
      <PomodoroPhase phase='long-break' />
      <span>{'|'}</span>
      <PomodoroPhase phase='working' />
      <span>{'|'}</span>
      <PomodoroPhase phase='short-break' />
    </div>
  );
}

const textMap: Record<PomodoroPhase, string> = {
  'long-break': 'Long Break',
  'short-break': 'Short Break',
  working: 'Working',
};

function PomodoroPhase({ phase }: { phase: PomodoroPhase }) {
  const { phase: currentPhase, setPhase } = usePomodoro();

  const handleClick = () => {
    if (phase !== currentPhase) {
      setPhase(phase);
    }
  };

  return (
    <span
      className={classNames(
        currentPhase === phase ? 'text-new-white' : 'text-new-highlight'
      )}
      role='button'
      onClick={handleClick}
    >
      {textMap[phase]}
    </span>
  );
}
