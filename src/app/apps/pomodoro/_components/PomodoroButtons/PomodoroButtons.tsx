'use client';
import { usePomodoro } from '@/app/apps/pomodoro/_context/PomodoroContext';

export default function PomodoroButtons() {
  const { playbackStatus, onPause, onPlay, onNextPhase } = usePomodoro();

  function handlePausePlay() {
    if (playbackStatus === 'paused' || playbackStatus === 'stop') {
      onPlay();
    } else {
      onPause();
    }
  }

  function handleBreak() {
    onNextPhase(true);
  }

  return (
    <div className='flex gap-8'>
      <button className='text-new-white' onClick={handlePausePlay}>
        {playbackStatus === 'playing' ? 'Pause' : 'Play'}
      </button>
      <button className='text-new-white' onClick={handleBreak}>
        Next
      </button>
    </div>
  );
}
