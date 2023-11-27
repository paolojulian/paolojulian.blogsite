'use client';

import {
  ReactNode,
  createContext,
  useContext,
  useState
} from 'react';

export type PomodoroPhase = 'working' | 'short-break' | 'long-break';
type PomodoroPlaybackStatus = 'paused' | 'playing' | 'stop';

export const pomodoroPhaseQueue: PomodoroPhase[] = [
  'working',
  'short-break',
  'working',
  'short-break',
  'working',
  'long-break',
];

interface PomodoroContextValues {
  phase: PomodoroPhase;
  playbackStatus: PomodoroPlaybackStatus;
  onPlay: () => void;
  onPause: () => void;
  setPhase: (phase: PomodoroPhase) => void;
}

const PomodoroContext = createContext<PomodoroContextValues>({
  phase: 'working',
  playbackStatus: 'stop',
  onPause: () => {},
  onPlay: () => {},
  setPhase: () => {},
});

interface PomodoroProviderProps {
  children: ReactNode;
}

export default function PomodoroProvider({ children }: PomodoroProviderProps) {
  const [phase, setPhase] = useState<PomodoroPhase>('working');
  const [playbackStatus, setPlaybackStatus] =
    useState<PomodoroPlaybackStatus>('stop');

  function onPlay() {
    setPlaybackStatus('playing');
  }

  function onPause() {
    setPlaybackStatus('paused');
  }

  function onChangePhase(phase: PomodoroPhase) {
    setPlaybackStatus('stop');
    setPhase(phase);
  }

  return (
    <PomodoroContext.Provider
      value={{
        phase,
        playbackStatus,
        onPause,
        onPlay,
        setPhase: onChangePhase,
      }}
    >
      {children}
    </PomodoroContext.Provider>
  );
}

export function usePomodoro() {
  return useContext(PomodoroContext);
}
