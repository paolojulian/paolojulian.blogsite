import { Task } from '@/app/apps/pomodoro/_components/PomodoroTasks/PomodoroTasks';
import Text from '@/app/apps/pomodoro/_components/Text';
import classNames from 'classnames';
import { memo } from 'react';

interface PomodoroTaskItemProps {
  onSelect: (taskId: string) => void;
  isSelected: boolean;
  task: Task;
}

const PomodoroTaskItem = memo(
  ({ onSelect, isSelected, task }: PomodoroTaskItemProps) => {
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
          <Text as='h3'>{`${task.title}`}</Text>
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
