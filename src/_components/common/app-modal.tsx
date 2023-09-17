import ReactDOM from 'react-dom';
import React, {
  FunctionComponent,
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from 'react';
import classNames from 'classnames';
import CrossIcon from '@/app/custom-components/application-ui/layouts/brand-sidebar-with-header/_components/icons/cross-icon';
import Row from '@/_components/layouts/row';

function createWrapperAndAppendToBody(wrapperId: string) {
  const wrapperElement = document.createElement('div');
  wrapperElement.setAttribute('id', wrapperId);
  document.body.appendChild(wrapperElement);
  return wrapperElement;
}

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
  const [modalRoot, setModalRoot] = useState<HTMLElement | null>(null);
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

  useLayoutEffect(() => {
    let element = document.getElementById('modal-root');
    if (!element) {
      element = createWrapperAndAppendToBody('modal-root');
    }
    setModalRoot(element);
  }, []);

  if (modalRoot === null) {
    return null;
  }

  return ReactDOM.createPortal(
    // container
    <div
      className={classNames(
        'fixed inset-0 z-50 transition-opacity backdrop-blur-sm',
        isOpen
          ? 'opacity-100 pointer-events-auto'
          : 'opacity-0 pointer-events-none'
      )}
    >
      <div
        className='fixed inset-0 bg-black/50 overflow-y-auto md:py-[100px]'
        ref={containerRef}
        role='button'
        onClick={closeModal}
      >
        <div
          className={classNames(
            'max-w-screen-lg w-full mx-auto bg-white z-10',
            'transition-transform cursor-auto relative',
            'shadow-[0_4px_28px_4px_rgba(0,0,0,0.15)]',
            isOpen ? 'translate-y-0' : 'translate-y-full'
          )}
          onClick={(e) => e.stopPropagation()}
        >
          <div className='hidden md:block absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2'>
            <button
              className='rounded-full w-[80px] aspect-square text-primary-400 transition bg-white hover:border-primary-300 border flex justify-center items-center shadow-[0_4px_28px_rgba(0,0,0,0.10)]'
              onClick={closeModal}
            >
              <CrossIcon className='w-12 h-12' />
            </button>
          </div>
          <Row className='flex md:hidden justify-center p-4'>
            <button
              className='text-gray-400 flex justify-center items-center'
              onClick={closeModal}
            >
              <CrossIcon className='w-12 h-12' />
            </button>
          </Row>
          {children}
        </div>
      </div>

      {/* content */}
    </div>,
    modalRoot
  );
};

export default AppModal;
