'use client';

import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from 'react';

type PomodoroStates = 'working' | 'short-break' | 'long-break';
type PomodoroStatus = 'paused' | 'playing';

interface PomodoroContextValues {
  state: PomodoroStates;
  status: PomodoroStatus;
  onPlay: () => void;
  onPause: () => void;
  setState: Dispatch<SetStateAction<PomodoroStates>>;
}

const PomodoroContext = createContext<PomodoroContextValues>({
  state: 'working',
  status: 'paused',
  onPause: () => {},
  onPlay: () => {},
  setState: () => {},
});

interface PomodoroProviderProps {
  children: ReactNode;
}

export default function PomodoroProvider({ children }: PomodoroProviderProps) {
  const [state, setState] = useState<PomodoroStates>('working');
  const [status, setStatus] = useState<PomodoroStatus>('playing');

  function onPlay() {
    setStatus('playing');
  }

  function onPause() {
    setStatus('paused');
  }

  return (
    <PomodoroContext.Provider
      value={{ state, status, onPause, onPlay, setState }}
    >
      {children}
    </PomodoroContext.Provider>
  );
}

export function usePomodoro() {
  return useContext(PomodoroContext);
}
