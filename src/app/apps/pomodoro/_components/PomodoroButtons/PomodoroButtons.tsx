'use client';
import { usePomodoro } from '@/app/apps/pomodoro/_context/PomodoroContext';
import classNames from 'classnames';

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
    <div className='flex items-center gap-4'>
      <button
        className='rounded-full h-16 aspect-square border border-new-highlight bg-new-highlightLighter'
        onClick={handleBreak}
      >
        <span className='text-new-black text-xl'>Menu</span>
      </button>

      <button
        className={classNames(
          'rounded-full h-20 aspect-square border border-new-highlight',
          playbackStatus === 'playing' ? 'bg-new-accent' : 'bg-new-white'
        )}
        onClick={handlePausePlay}
      >
        <span className='text-new-black text-xl'>
          {playbackStatus === 'playing' ? 'Pause' : 'Play'}
        </span>
      </button>

      <button
        className='rounded-full h-16 aspect-square border border-new-highlight bg-new-highlightLighter'
        onClick={handleBreak}
      >
        <span className='text-new-black text-xl'>Next</span>
      </button>
    </div>
  );
}
