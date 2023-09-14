import styles from './app-modal.module.css';
import ReactDOM from 'react-dom';
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
  const containerRef = useRef<HTMLDivElement>(null);
  const closeModal = useCallback(() => {
    document.body.classList.remove('modal--open');
    if (containerRef.current) {
      containerRef.current.scrollTo({ top: 0 });
    }
    onClose();
  }, [onClose]);

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('modal--open');
    } else {
      closeModal();
    }
  }, [isOpen, closeModal]);

  const modalRoot = document.getElementById('modal-root');
  if (!modalRoot) {
    return null;
  }

  return ReactDOM.createPortal(
    // container
    <div
      className={classNames(
        'fixed inset-0 z-50 transition backdrop-blur-sm',
        isOpen
          ? 'opacity-100 pointer-events-auto'
          : 'opacity-0 pointer-events-none'
      )}
    >
      <div
        className='fixed inset-0 bg-black bg-opacity-25 overflow-y-auto py-[100px]'
        ref={containerRef}
        role='button'
        onClick={closeModal}
      >
        <div
          className={classNames(
            'max-w-screen-lg w-full mx-auto bg-white p-5 z-10',
            'transition-transform cursor-auto',
            'shadow-[0_4px_28px_4px_rgba(0,0,0,0.15)]',
            isOpen ? 'translate-y-0' : 'translate-y-full'
          )}
          onClick={(e) => e.stopPropagation()}
        >
          {children}
        </div>
      </div>

      {/* content */}
    </div>,
    modalRoot
    // <dialog
    //   className={classNames('max-w-screen-md w-full', styles['app-modal'])}
    //   ref={dialogRef}
    //   style={{ maxWidth: '1024px', height: '100%' }}
    //   onClick={closeModal}
    // >
    //   <Stack
    //     className={classNames('h-full transition-transform duration-1000')}
    //     style={{
    //       maxHeight: '100%',
    //     }}
    //     onClick={(e) => {
    //       e.stopPropagation();
    //     }}
    //   >
    //     <Row className='justify-end'>
    //       <button
    //         className='px-3 py-2 focus:outline-none text-slate-50 hover:text-red-200'
    //         onClick={closeModal}
    //       >
    //         exit
    //       </button>
    //     </Row>
    //     <div className='w-full h-full relative bg-main flex-1 shadow-md'>
    //       {children}
    //     </div>
    //   </Stack>
    // </dialog>
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
