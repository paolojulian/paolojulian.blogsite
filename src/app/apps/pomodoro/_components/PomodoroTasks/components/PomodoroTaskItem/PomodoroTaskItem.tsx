'use client';
import { Task } from '@/app/apps/pomodoro/_components/PomodoroTasks/PomodoroTasks';
import { useArchiveAnimation } from '@/app/apps/pomodoro/_components/PomodoroTasks/hooks/useArchiveAnimation';
import Text from '@/app/apps/pomodoro/_components/Text';
import { usePomodoro } from '@/app/apps/pomodoro/_context/PomodoroContext';
import { useTimer } from '@/app/apps/pomodoro/_hooks/useTimer';
import classNames from 'classnames';
import { MouseEvent, memo, useCallback, useEffect, useState } from 'react';
import styles from './PomodoroTaskItem.module.css';

export const POMODORO_TASK_ITEM_ELEMENTS = {
  container: (id: string) => `PomodoroTaskItem__${id}`,
};

interface PomodoroTaskItemProps {
  onArchive: (taskId: string) => void;
  onSelect: (taskId: string) => void;
  onCountUp: (taskId: string) => void;
  isSelected: boolean;
  task: Task;
}

let archiveTimeoutId: NodeJS.Timeout;

const PomodoroTaskItem = memo(
  ({
    onArchive,
    onCountUp,
    onSelect,
    isSelected,
    task,
  }: PomodoroTaskItemProps) => {
    const [isArchiving, setIsArchiving] = useState(false);
    const timeElapsedText = getTimeElapsedText(task.timeElapsed);

    const { phase, playbackStatus } = usePomodoro();

    const handleTick = () => {
      onCountUp(task.id);
    };

    const { play, pause } = useTimer({
      onTick: handleTick,
    });

    useEffect(() => {
      const shouldStartCounting =
        phase === 'working' && playbackStatus === 'playing' && !!isSelected;

      if (shouldStartCounting) {
        play();
      } else {
        pause();
      }
    }, [isSelected, pause, phase, play, playbackStatus]);

    const { animate: archiveAnimate, animationEndHandler } =
      useArchiveAnimation();

    const handleSelect = () => {
      onSelect(task.id);
    };

    const handleArchive = (e: MouseEvent<HTMLButtonElement>) => {
      e.stopPropagation();

      if (isArchiving) {
        stopArchive();
        return;
      }

      archiveAnimate(task.id);
      setIsArchiving(true);

      // User has 5 seconds to undo this before it is totally archived
      archiveTimeoutId = setTimeout(() => {
        onArchive(task.id);
        setIsArchiving(false);
      }, 3000);
    };

    const stopArchive = useCallback(() => {
      setIsArchiving(false);
      clearTimeout(archiveTimeoutId);
      animationEndHandler();
    }, [animationEndHandler]);

    useEffect(() => {
      return () => clearTimeout(archiveTimeoutId);
    }, []);

    useEffect(() => {
      const handleKeyPress = (e: KeyboardEvent) => {
        if (e.key === 'Escape') {
          stopArchive();
        }
      };

      document.addEventListener('keydown', handleKeyPress);

      return () => {
        document.removeEventListener('keydown', handleKeyPress);
      };
    }, [stopArchive]);

    return (
      <div
        className={classNames(
          'relative flex justify-between items-center p-2 px-4 border border-new-highlight rounded',
          isSelected ? 'bg-new-highlight/30' : '',
          styles.container
        )}
        role='button'
        onClick={handleSelect}
        data-id={POMODORO_TASK_ITEM_ELEMENTS.container(task.id)}
      >
        <div>
          <Text as='h3'>{`${task.title}`}</Text>
          <Text as='p' className='text-new-highlight'>
            {timeElapsedText}
          </Text>
        </div>
        <button
          onClick={handleArchive}
          className='rounded-full w-8 aspect-square bg-new-white'
        ></button>
      </div>
    );
  },
  (prevProps, nextProps) => {
    // Only re-render if isSelected or task properties change
    return (
      prevProps.isSelected === nextProps.isSelected &&
      prevProps.task === nextProps.task
    );
  }
);
PomodoroTaskItem.displayName = 'PomodoroTaskItem';

export default PomodoroTaskItem;

function getTimeElapsedText(elapsedTime: number) {
  if (elapsedTime === 0) {
    return 'Not yet started.';
  }

  const minutes = Math.floor(elapsedTime / 60);
  const seconds = elapsedTime % 60;

  if (minutes >= 60) {
    return `Time elapsed: ${Math.floor(minutes / 60)}h ${String(
      minutes % 60
    ).padStart(2, '0')}m`;
  }

  return `Time elapsed: ${minutes}m ${String(seconds).padStart(2, '0')}s`;
}
