'use client';
import PomodoroTaskItem from '@/app/apps/pomodoro/_components/PomodoroTasks/PomodoroTaskItem';
import {
  PomodoroAddTask,
  TaskForm,
} from '@/app/apps/pomodoro/_components/PomodoroTasks/components/PomodoroAddTask';
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

function getTasksFromLocalStorage() {
  const tasks = localStorage.getItem('tasks');
  if (!tasks) {
    return [];
  }

  return JSON.parse(tasks);
}

export default function PomodoroTasks() {
  const { phase, playbackStatus } = usePomodoro();
  const [tasks, setTasks] = useState<Task[]>(getTasksFromLocalStorage());

  useEffect(() => {
    // Persist to localStorage
    // const localStorageTasks = localStorage.getItem('tasks');
    // const localStorageTasksAsObject = JSON.stringify(localStorageTasks);
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);
  const [selectedTaskId, setSelectedTaskId] = useState<string>('');

  const handleAddTask = ({ title, description = '' }: TaskForm) => {
    setTasks((prev) => [
      ...prev,
      {
        id: uuid(),
        title,
        description,
        timeElapsed: 0,
        isFinished: false,
      },
    ]);
  };

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

  const handleSelectTask = (taskId: string) => {
    // Remove if clicked on the same task
    if (selectedTaskId === taskId) {
      setSelectedTaskId('');
      return;
    }
    setSelectedTaskId(taskId);
  };

  return (
    <>
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

        <PomodoroAddTask onAddTask={handleAddTask} />
      </div>
    </>
  );
}
