import Text from '@/app/apps/pomodoro/_components/Text';

export default function PomodoroTasks() {
  return (
    <div className='flex-1 w-full flex flex-col mt-8 items-stretch gap-2'>
      <Text as='h2'>Tasks</Text>
      <div className='flex flex-col gap-2'>
        <PomorodoTaskItem />
        <PomorodoTaskItem />
        <PomorodoTaskItem />
      </div>
      <div className='flex justify-center'>
        <button className='text-new-accent'>
          <Text>+ Add</Text>
        </button>
      </div>
    </div>
  );
}

function PomorodoTaskItem() {
  return (
    <div className='flex justify-between items-center p-2 px-4 border border-new-highlight rounded'>
      <div>
        <Text as='h3'>#1 // Create a wire frame</Text>
        <Text as='p' className='text-new-highlight'>
          Time Elapsed: 1:03
        </Text>
      </div>
      <div className='rounded-full w-8 aspect-square bg-new-white'></div>
    </div>
  );
}
