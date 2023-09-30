import React, { FunctionComponent, useEffect, useMemo } from 'react';
import SearchIcon from '@/_components/icons/search-icon';
import Row from '@/_components/layouts/row';
import { isMacOS } from '@/_utils/navigator/navigator';
import classNames from 'classnames';

interface Props {
  onClick: () => void;
}

const GlobalSearchBtn: FunctionComponent<Props> = ({ onClick }) => {
  const isMacPlatform = useMemo(() => isMacOS(), []);

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      const modifierState = isMacPlatform ? 'Meta' : 'Control';
      const modifierKey = e.getModifierState(modifierState);
      if ((modifierKey && e.key === 'k') || (modifierKey && e.key === 'k')) {
        onClick();
      }
    };

    document.addEventListener('keydown', handleKeyPress);

    return () => {
      document.removeEventListener('keydown', handleKeyPress);
    };
  }, [onClick, isMacPlatform]);

  const keyShortcut = isMacPlatform ? '⌘K' : '(Ctrl K)';

  return (
    <div
      className={classNames(
        'transition border border-gray-300 hover:border-primary-400 text-gray-400 hover:text-gray-500 px-4 lg:pl-6 lg:pr-7',
        'bg-white',
        'w-12 md:w-16 lg:w-fit h-12 md:h-14',
        'flex flex-col md:flex-row justify-center items-center gap-4 lg:gap-16'
      )}
      role='button'
      onClick={onClick}
    >
      <Row className='gap-4 items-center'>
        <SearchIcon />
        <span className='hidden lg:block'>Quick Search</span>
      </Row>
      <span className='hidden lg:block'>{keyShortcut}</span>
    </div>
  );
};

export default GlobalSearchBtn;
