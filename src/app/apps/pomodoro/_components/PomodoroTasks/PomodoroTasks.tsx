'use client';
import Text from '@/app/apps/pomodoro/_components/Text';
import { usePomodoro } from '@/app/apps/pomodoro/_context/PomodoroContext';
import classNames from 'classnames';
import { memo, useEffect, useMemo, useState } from 'react';
import { v4 as uuid } from 'uuid';

interface Task {
  id: string;
  title: string;
  description: string;
  timeElapsed: number;
  isFinished: boolean;
}

let timeoutId: NodeJS.Timeout;

export default function PomodoroTasks() {
  const { phase, playbackStatus } = usePomodoro();
  const [tasks, setTasks] = useState<Task[]>([
    {
      id: '1',
      title: 'Create a wireframe',
      description: '',
      timeElapsed: 0,
      isFinished: false,
    },
  ]);
  const [selectedTaskId, setSelectedTaskId] = useState<string>('');

  const memoizedTasks = useMemo(() => tasks, [tasks]);

  useEffect(() => {
    const shouldStartCounting =
      phase === 'working' && playbackStatus === 'playing' && !!selectedTaskId;

    if (shouldStartCounting) {
      timeoutId = setInterval(() => {
        // Start timeElapsed for the selected task
        setTasks((prevTasks) =>
          prevTasks.map((task) =>
            task.id === selectedTaskId
              ? { ...task, timeElapsed: task.timeElapsed + 1 }
              : task
          )
        );
      }, 1000);
    }

    return () => clearInterval(timeoutId);
  }, [playbackStatus, phase, selectedTaskId]);

  const handleAddTask = () => {
    setTasks((prev) => [
      ...prev,
      {
        id: uuid(),
        title: 'Create a wireframe',
        description: '',
        timeElapsed: 0,
        isFinished: false,
      },
    ]);
  };

  const handleSelectTask = (taskId: string) => {
    // Remove if clicked on the same task
    if (selectedTaskId === taskId) {
      setSelectedTaskId('');
      return;
    }
    setSelectedTaskId(taskId);
  };

  return (
    <div className='flex-1 w-full flex flex-col mt-8 items-stretch gap-2'>
      <Text as='h2'>Tasks</Text>
      <div className='flex flex-col gap-2'>
        {memoizedTasks.map((task, i) => (
          <PomodoroTaskItem
            key={task.id}
            isSelected={task.id === selectedTaskId}
            taskNumber={i + 1}
            task={task}
            onSelect={handleSelectTask}
          />
        ))}
      </div>
      <div className='flex justify-center'>
        <button className='text-new-accent' onClick={handleAddTask}>
          <Text>+ Add</Text>
        </button>
      </div>
    </div>
  );
}

interface PomodoroTaskItemProps {
  onSelect: (taskId: string) => void;
  isSelected: boolean;
  task: Task;
  taskNumber: number;
}

const PomodoroTaskItem = memo(
  ({ onSelect, isSelected, task, taskNumber }: PomodoroTaskItemProps) => {
    console.log('test', `Re-render ${taskNumber}`);
    const timeElapsedText = getTimeElapsedText(task.timeElapsed);

    const handleSelect = () => {
      onSelect(task.id);
    };

    return (
      <div
        className={classNames(
          'flex justify-between items-center p-2 px-4 border border-new-highlight rounded',
          isSelected ? 'bg-new-highlight/30' : ''
        )}
        role='button'
        onClick={handleSelect}
      >
        <div>
          <Text as='h3'>{`#${taskNumber} // ${task.title}`}</Text>
          <Text as='p' className='text-new-highlight'>
            {timeElapsedText}
          </Text>
        </div>
        <div className='rounded-full w-8 aspect-square bg-new-white'></div>
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
