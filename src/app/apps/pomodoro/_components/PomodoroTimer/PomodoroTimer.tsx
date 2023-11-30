'use client';
import {
  PomodoroPhase,
  usePomodoro,
} from '@/app/apps/pomodoro/_context/PomodoroContext';
import { useEffect, useState } from 'react';

let timerId: NodeJS.Timeout;

const POMODORO_DEFAULT_TIME: Record<PomodoroPhase, number> = {
  working: 3000,
  'long-break': 1800,
  'short-break': 600,
};

let POMODORO_AUDIO: HTMLAudioElement;
if (typeof window !== 'undefined') {
  POMODORO_AUDIO = new Audio('/assets/audio/pomodoro-alert.wav');
}
function playRingingSound() {
  if (POMODORO_AUDIO) {
    POMODORO_AUDIO.currentTime = 0;
    POMODORO_AUDIO.play();
  }
}

function stopRingingSound() {
  if (POMODORO_AUDIO) {
    POMODORO_AUDIO.pause();
    POMODORO_AUDIO.currentTime = 0;
  }
}

export default function PomodoroTimer() {
  const { phase, playbackStatus, onNextPhase } = usePomodoro();

  const [time, setTime] = useState(POMODORO_DEFAULT_TIME[phase]);

  useEffect(() => {
    setTime(POMODORO_DEFAULT_TIME[phase]);
  }, [phase]);

  function play() {
    stopRingingSound();
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
      playRingingSound();
      pause();
      const autoPlay = false;
      onNextPhase(autoPlay);
    }
  }, [time, playbackStatus, onNextPhase]);

  const pause = () => {
    clearInterval(timerId);
  };

  useEffect(() => {
    switch (playbackStatus) {
      case 'playing':
        play();
        break;
      case 'stop':
      default:
        pause();
    }
  }, [playbackStatus]);

  // Format the time into minutes and seconds
  const minutes = Math.floor(time / 60);
  const seconds = time % 60;
  const formattedTime = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;

  return <span className='text-6xl text-new-white'>{formattedTime}</span>;
}
