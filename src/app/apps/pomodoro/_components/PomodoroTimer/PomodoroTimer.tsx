'use client';
import { playRingingSound } from '@/app/apps/pomodoro/_components/PomodoroTimer/PomodoroTimer.utils';
import { useTimer } from '@/app/apps/pomodoro/_components/PomodoroTimer/hooks/useTimer';
import { usePomodoro } from '@/app/apps/pomodoro/_context/PomodoroContext';
import { useEffect } from 'react';

export default function PomodoroTimer() {
  const { phase, playbackStatus, onNextPhase } = usePomodoro();

  const { time, play, pause } = useTimer(phase);

  useEffect(() => {
    if (time === 0 && playbackStatus !== 'stop') {
      playRingingSound();
      pause();
      const autoPlay = false;
      onNextPhase(autoPlay);
    }
  }, [time, playbackStatus, pause, onNextPhase]);

  useEffect(() => {
    switch (playbackStatus) {
      case 'playing':
        play();
        break;
      case 'stop':
      default:
        pause();
    }
  }, [playbackStatus, pause, play]);

  // Format the time into minutes and seconds
  const minutes = Math.floor(time / 60);
  const seconds = time % 60;
  const formattedTime = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;

  return <span className='text-6xl text-new-white'>{formattedTime}</span>;
}
