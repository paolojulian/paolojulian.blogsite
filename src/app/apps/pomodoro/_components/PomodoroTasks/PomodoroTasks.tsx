'use client';
import PomodoroTaskItem from '@/app/apps/pomodoro/_components/PomodoroTasks/PomodoroTaskItem';
import Text from '@/app/apps/pomodoro/_components/Text';
import { usePomodoro } from '@/app/apps/pomodoro/_context/PomodoroContext';
import { useEffect, useMemo, useState } from 'react';
import { v4 as uuid } from 'uuid';

export interface Task {
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
