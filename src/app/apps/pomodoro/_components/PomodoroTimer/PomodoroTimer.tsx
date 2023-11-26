'use client';
import { usePomodoro } from '@/app/apps/pomodoro/_context/PomodoroContext';
import { useEffect, useState } from 'react';

let timerId: NodeJS.Timeout;

export default function PomodoroTimer() {
  const { status } = usePomodoro();

  const [time, setTime] = useState(3000);

  function play() {
    // Countdown time
    timerId = setInterval(() => {
      setTime((prevTime) => prevTime - 1);
    }, 1000);
  }

  const pause = () => {
    clearInterval(timerId);
  };

  useEffect(() => {
    if (status === 'playing') {
      play();
    } else {
      pause();
    }
  }, [status]);

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
