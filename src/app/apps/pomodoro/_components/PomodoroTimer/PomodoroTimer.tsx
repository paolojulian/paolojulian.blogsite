'use client';
import { playRingingSound } from '@/app/apps/pomodoro/_components/PomodoroTimer/PomodoroTimer.utils';
import ResetIcon from '@/app/apps/pomodoro/_components/icons/reset-icon';
import {
  PomodoroPhase,
  usePomodoro,
} from '@/app/apps/pomodoro/_context/PomodoroContext';
import { useTimer } from '@/app/apps/pomodoro/_hooks/useTimer';
import { useCallback, useEffect, useMemo, useState } from 'react';

const POMODORO_DEFAULT_TIME: Record<PomodoroPhase, number> = {
  working: 1500,
  'long-break': 900,
  'short-break': 300,
};

export default function PomodoroTimer() {
  const { phase, playbackStatus, onNextPhase } = usePomodoro();
  const [time, setTime] = useState(POMODORO_DEFAULT_TIME[phase]);
  const [elapsedTime, setElapsedTime] = useState(0);

  // On change phase, update the default time.
  useEffect(() => {
    setTime(POMODORO_DEFAULT_TIME[phase]);
  }, [phase]);

  const handleCountDown = () => {
    setTime((prevTime) => {
      if (prevTime > 0) {
        return prevTime - 1;
      }
      // Next Phase
      return prevTime;
    });
    setElapsedTime((prevTime) => prevTime + 1);
  };

  const handleResetElapsedTime = () => {
    setElapsedTime(0);
  };

  const { play, pause } = useTimer({
    onTick: handleCountDown,
  });

  const handleTimerFinished = useCallback(() => {
    if (time === 0 && playbackStatus !== 'stop') {
      playRingingSound();
      pause();
      const autoPlay = false;
      onNextPhase(autoPlay);
    }
  }, [time, playbackStatus, pause, onNextPhase]);

  useEffect(() => {
    handleTimerFinished();
  }, [handleTimerFinished]);

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
  const formattedTime = useMemo(() => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  }, [time]);

  const formattedElapsedTime = useMemo(() => {
    const hours = Math.floor(elapsedTime / 3600);
    const minutes = Math.floor((elapsedTime % 3600) / 60);
    const remainingSeconds = elapsedTime % 60;

    const formattedTime = `${hours > 0 ? `${hours}h ` : ''}${
      minutes > 0 ? `${minutes}m ` : ''
    }${remainingSeconds}s`;

    return formattedTime.trim();
  }, [elapsedTime]);

  return (
    <>
      <span className='text-9xl font-bold text-new-white leading-tight'>
        {formattedTime}
      </span>
      <div className='items-center flex flex-row gap-2'>
        <span className='text-2xl text-new-highlightLighter leading-tight'>
          Time Elapsed: {formattedElapsedTime}
        </span>
        <button
          className='text-new-highlightLighter hover:text-new-white'
          onClick={handleResetElapsedTime}
        >
          <ResetIcon />
        </button>
      </div>
    </>
  );
}
