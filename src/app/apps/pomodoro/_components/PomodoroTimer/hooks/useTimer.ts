import { PomodoroPhase } from "@/app/apps/pomodoro/_context/PomodoroContext";
import { useCallback, useEffect, useState } from "react";


const POMODORO_DEFAULT_TIME: Record<PomodoroPhase, number> = {
  working: 3000,
  'long-break': 1800,
  'short-break': 600,
};

const frameDurationInMs = 1000;
let lastFrameTime = 0;
let animationFrameId: number | null = null;

export function useTimer(phase: PomodoroPhase) {
  const [time, setTime] = useState(POMODORO_DEFAULT_TIME[phase]);

  const play = useCallback(() => {
    function animate(currentTime: number) {
      const elapsed = currentTime - lastFrameTime;
      if (elapsed >= frameDurationInMs) {
        lastFrameTime = currentTime;

        setTime((prevTime) => {
          if (prevTime - 1 === -1) {
            return prevTime;
          }

          return prevTime - 1;
        });
      }

      setTime((prevTime) => {
        if (prevTime > 0) {
          animationFrameId = requestAnimationFrame((nextTime) =>
            animate(nextTime)
          );
        }
        return prevTime;
      });
    }

    // Start the animation
    lastFrameTime = performance.now();
    animate(lastFrameTime);
  }, []);

  const pause = useCallback(() => {
    if (animationFrameId !== null) {
      cancelAnimationFrame(animationFrameId);
      animationFrameId = null;
    }
  }, []);

  useEffect(() => {
    setTime(POMODORO_DEFAULT_TIME[phase]);
  }, [phase]);

  useEffect(() => {
    return () => {
      pause();
    };
  }, [pause]);

  return { time, play, pause };
}