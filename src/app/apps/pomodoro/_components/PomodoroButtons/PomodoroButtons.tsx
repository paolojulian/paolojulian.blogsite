'use client';
import Text from '@/app/apps/pomodoro/_components/Text';
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
    <div className='flex items-center justify-center gap-4 p-4 w-full bg-new-black/50 backdrop-blur-sm'>
      <button
        className='rounded-full h-14 aspect-square border border-new-highlight bg-new-highlightLighter'
        onClick={handleBreak}
      >
        <Text className='text-new-black'>Menu</Text>
      </button>

      <button
        className={classNames(
          'rounded-full h-20 aspect-square border border-new-highlight',
          playbackStatus === 'playing' ? 'bg-new-accent' : 'bg-new-white'
        )}
        onClick={handlePausePlay}
      >
        <Text className='text-new-black' size='large'>
          {playbackStatus === 'playing' ? 'Pause' : 'Play'}
        </Text>
      </button>

      <button
        className='rounded-full h-14 aspect-square border border-new-highlight bg-new-highlightLighter'
        onClick={handleBreak}
      >
        <Text className='text-new-black'>Next</Text>
      </button>
    </div>
  );
}
