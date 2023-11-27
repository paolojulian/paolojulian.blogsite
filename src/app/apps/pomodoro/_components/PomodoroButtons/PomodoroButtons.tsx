'use client';
import { usePomodoro } from '@/app/apps/pomodoro/_context/PomodoroContext';

export default function PomodoroButtons() {
  const { playbackStatus, onPause, onPlay } = usePomodoro();

  function handleClick() {
    if (playbackStatus === 'paused' || playbackStatus === 'stop') {
      onPlay();
    } else {
      onPause();
    }
  }

  return (
    <button className='text-new-white' onClick={handleClick}>
      {playbackStatus === 'playing' ? 'Pause' : 'Play'}
    </button>
  );
}
