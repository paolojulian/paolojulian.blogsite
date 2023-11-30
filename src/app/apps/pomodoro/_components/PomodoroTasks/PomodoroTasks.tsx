'use client';
import PomodoroTaskItem from '@/app/apps/pomodoro/_components/PomodoroTasks/PomodoroTaskItem';
import {
  getTasksFromLocalStorage,
  setTasksToLocalStorage,
} from '@/app/apps/pomodoro/_components/PomodoroTasks/PomodoroTasks.utils';
import {
  PomodoroAddTask,
  TaskForm,
} from '@/app/apps/pomodoro/_components/PomodoroTasks/components/PomodoroAddTask';
import Text from '@/app/apps/pomodoro/_components/Text';
import { usePomodoro } from '@/app/apps/pomodoro/_context/PomodoroContext';
import { useEffect, useState } from 'react';
import { v4 as uuid } from 'uuid';

export interface Task {
  id: string;
  title: string;
  description: string;
  timeElapsed: number;
  isArchived: boolean;
  isFinished: boolean;
}

let timeoutId: NodeJS.Timeout;

export default function PomodoroTasks() {
  const { phase, playbackStatus } = usePomodoro();
  const [tasks, setTasks] = useState<Task[]>(getTasksFromLocalStorage());

  const activeTasks = tasks.filter((task) => !task.isArchived);

  useEffect(() => {
    // Persist to localStorage
    setTasksToLocalStorage(tasks);
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
        isArchived: false,
        isFinished: false,
      },
    ]);
  };

  const handleArchiveTask = (taskId: string) => {
    setTasks((prev) => {
      const taskToArchive = tasks.find(({ id }) => id === taskId);
      if (!taskToArchive) {
        return prev;
      }

      return tasks.map((task) => {
        if (task.id === taskId) {
          task.isFinished = true;
          task.isArchived = true;
        }
        return task;
      });
    });
  };

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
    } else {
      clearInterval(timeoutId);
    }
  }, [playbackStatus, phase, selectedTaskId]);

  const handleSelectTask = (taskId: string) => {
    // Remove if clicked on the same task
    if (selectedTaskId !== taskId) {
      setSelectedTaskId(taskId);
    }
  };

  return (
    <>
      <div className='flex-1 w-full flex flex-col mt-8 items-stretch gap-2'>
        <Text as='h2'>Tasks</Text>
        <div className='flex flex-col gap-2'>
          {activeTasks.map((task) => (
            <PomodoroTaskItem
              onArchive={handleArchiveTask}
              onSelect={handleSelectTask}
              key={task.id}
              isSelected={task.id === selectedTaskId}
              task={task}
            />
          ))}
        </div>

        <PomodoroAddTask onAddTask={handleAddTask} />
      </div>
    </>
  );
}
