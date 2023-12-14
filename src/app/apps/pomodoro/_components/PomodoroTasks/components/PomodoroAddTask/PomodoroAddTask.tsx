import Text from '@/app/apps/pomodoro/_components/Text';
import classNames from 'classnames';
import { Formik } from 'formik';
import { useEffect, useRef, useState } from 'react';
import * as Yup from 'yup';

const validationSchema = Yup.object({
  title: Yup.string().required().max(50),
  description: Yup.string().max(500),
});

export type TaskForm = Yup.InferType<typeof validationSchema>;

interface PomodoroAddTaskProps {
  onAddTask: (form: TaskForm) => void;
}

export default function PomodoroAddTask({ onAddTask }: PomodoroAddTaskProps) {
  const [isAdding, setIsAdding] = useState(false);
  const inputTitleRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        handleCloseAddTask();
      }
    };

    if (isAdding) {
      document.addEventListener('keydown', handleKeyPress);
    }

    return () => {
      document.removeEventListener('keydown', handleKeyPress);
    };
  }, [isAdding]);

  const handleClickAddTask = () => {
    setIsAdding(true);
    setTimeout(() => {
      inputTitleRef.current?.focus();
    });
  };

  const handleCloseAddTask = () => {
    setIsAdding(false);
  };

  if (!isAdding) {
    return (
      <button
        className={classNames(
          'flex justify-center items-center p-6 border border-new-highlight rounded-2xl'
        )}
        onClick={handleClickAddTask}
      >
        <Text>+ Add</Text>
      </button>
    );
  }

  return (
    <div
      className={classNames(
        'flex flex-col justify-center items-stretch p-4 border border-new-highlight rounded gap-4'
      )}
    >
      <div className='flex justify-between items-center'>
        <Text as='h2'>Add a new task</Text>
        <button onClick={handleCloseAddTask}>X</button>
      </div>
      <Formik
        initialValues={{
          title: '',
          description: '',
        }}
        validationSchema={validationSchema}
        onSubmit={function handleSubmit(form, { resetForm }) {
          onAddTask(form);
          setIsAdding(false);
          resetForm();
        }}
      >
        {({ handleSubmit, handleChange, handleBlur }) => (
          <form
            className='flex flex-col items-stretch gap-2'
            onSubmit={function submitForm(e) {
              e.preventDefault();
              handleSubmit();
            }}
          >
            <div className='flex flex-col gap-2'>
              <input
                onBlur={handleBlur}
                onChange={handleChange}
                className='bg-transparent p-2 rounded border border-new-highlight placeholder-new-highlight text-new-white focus:outline-new-accent'
                name='title'
                type='text'
                placeholder='Title'
                ref={inputTitleRef}
              ></input>
              <textarea
                onBlur={handleBlur}
                onChange={handleChange}
                name='description'
                className='bg-transparent p-2 rounded border border-new-highlight placeholder-new-highlight text-new-white focus:outline-new-accent'
                rows={5}
                placeholder='Description'
              ></textarea>
            </div>
            <button className='w-fit self-center' type='submit'>
              <Text>+ Add</Text>
            </button>
          </form>
        )}
      </Formik>
    </div>
  );
}
