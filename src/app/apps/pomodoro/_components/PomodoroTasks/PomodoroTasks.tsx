'use client';
import {
  getTasksFromLocalStorage,
  setTasksToLocalStorage,
} from '@/app/apps/pomodoro/_components/PomodoroTasks/PomodoroTasks.utils';
import PomodoroAddTask, {
  TaskForm,
} from '@/app/apps/pomodoro/_components/PomodoroTasks/components/PomodoroAddTask';
import Text from '@/app/apps/pomodoro/_components/Text';
import { useEffect, useState } from 'react';
import { v4 as uuid } from 'uuid';
import PomodoroTaskItem from './components/PomodoroTaskItem';

export interface Task {
  id: string;
  title: string;
  description: string;
  timeElapsed: number;
  isArchived: boolean;
  isFinished: boolean;
}

export default function PomodoroTasks() {
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

  const handleSelectTask = (taskId: string) => {
    // Remove if clicked on the same task
    if (selectedTaskId !== taskId) {
      setSelectedTaskId(taskId);
    }
  };

  const handleCountUp = (taskId: string) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId
          ? { ...task, timeElapsed: task.timeElapsed + 1 }
          : task
      )
    );
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
              onCountUp={handleCountUp}
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
