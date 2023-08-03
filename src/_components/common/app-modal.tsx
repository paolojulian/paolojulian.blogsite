import styles from './app-modal.module.css';
import Row from '@/_components/layouts/row';
import Stack from '@/_components/layouts/stack';
import React, {
  FunctionComponent,
  useCallback,
  useEffect,
  useRef,
} from 'react';
import classNames from 'classnames';

export type AppModalProps = {
  onClose: () => void;
  isOpen: boolean;
  children: React.ReactNode;
};

const AppModal: FunctionComponent<AppModalProps> = ({
  onClose,
  isOpen,
  children,
}) => {
  const dialogRef = useRef<HTMLDialogElement>(null);

  const closeModal = useCallback(() => {
    dialogRef.current?.close();
    document.body.classList.remove('modal--open');
    onClose();
  }, [onClose]);

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('modal--open');
      dialogRef.current?.showModal();
    } else {
      closeModal();
    }
  }, [isOpen, closeModal]);

  return (
    // container
    <dialog
      className={classNames('max-w-screen-md w-full', styles['app-modal'])}
      ref={dialogRef}
      style={{ maxWidth: '1024px', height: '100%' }}
    >
      <Stack
        className={classNames('h-full transition-transform duration-1000')}
        style={{
          maxHeight: '100%',
        }}
      >
        <Row className='justify-end'>
          <button
            className='px-3 py-2 focus:outline-none text-slate-50 hover:text-red-200'
            onClick={closeModal}
          >
            exit
          </button>
        </Row>
        <div className='w-full h-full relative bg-main flex-1 shadow-md'>
          {children}
        </div>
      </Stack>
    </dialog>
    // <div
    //   className={classNames(
    //     'fixed inset-0 w-screen h-screen z-50',
    //     'transition-opacity backdrop-blur-sm',
    //     isOpen ? 'opacity-1' : 'opacity-0 pointer-events-none'
    //   )}
    // >
    //   {/* overlay */}
    //   <div className='absolute w-full h-full inset-0 bg-slate-900/30'></div>

    //   {/* modal */}
    //   <Stack
    //     className={classNames(
    //       'absolute inset-0 max-w-screen-lg w-full h-full mx-auto transition-transform',
    //       isOpen ? 'translate-y-0' : 'translate-y-full'
    //     )}
    //   >
    //     {/* exit */}
    //     <Row className='py-2 w-full bg-transparent justify-end'>
    //       <button onClick={onClose}>
    //         <span className='text-slate-50'>exit</span>
    //       </button>
    //     </Row>
    //     {/* content */}
    //     <Stack className='flex-1 bg-main w-full px-12 py-12 items-center overflow-y-scroll space-y-12'>
    //       {children}
    //     </Stack>
    //   </Stack>
    // </div>
  );
};

export default AppModal;
