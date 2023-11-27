'use client';
import { usePomodoro } from '@/app/apps/pomodoro/_context/PomodoroContext';
import { useEffect, useState } from 'react';

let timerId: NodeJS.Timeout;

const pomodoroTime = 5;

export default function PomodoroTimer() {
  const { playbackStatus, onNextPhase } = usePomodoro();

  const [time, setTime] = useState(pomodoroTime);

  function play() {
    // Countdown time
    timerId = setInterval(() => {
      setTime((prevTime) => {
        if (prevTime - 1 === -1) {
          return prevTime;
        }
        return prevTime - 1;
      });
    }, 1000);
  }

  useEffect(() => {
    if (time === 0 && playbackStatus !== 'stop') {
      pause();
      const autoPlay = false;
      onNextPhase(autoPlay);
    }
  }, [time, playbackStatus, onNextPhase]);

  const pause = () => {
    clearInterval(timerId);
  };

  useEffect(() => {
    if (playbackStatus === 'playing') {
      play();
    } else if (playbackStatus === 'stop') {
      pause();
      setTime(pomodoroTime);
    } else {
      pause();
    }
  }, [playbackStatus]);

  // Clean up the interval when the component unmounts
  useEffect(() => {
    return () => clearInterval(timerId);
  }, []);

  // Format the time into minutes and seconds
  const minutes = Math.floor(time / 60);
  const seconds = time % 60;
  const formattedTime = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;

  return <span className='text-6xl text-new-white'>{formattedTime}</span>;
}
