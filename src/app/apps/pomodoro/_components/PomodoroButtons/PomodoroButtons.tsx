'use client';
import { usePomodoro } from '@/app/apps/pomodoro/_context/PomodoroContext';

export default function PomodoroButtons() {
  const { status, onPause, onPlay } = usePomodoro();

  function handleClick() {
    if (status === 'paused') {
      onPlay();
    } else {
      onPause();
    }
  }

  return (
    <button className='text-new-white' onClick={handleClick}>
      {status === 'playing' ? 'Pause' : 'Play'}
    </button>
  );
}
