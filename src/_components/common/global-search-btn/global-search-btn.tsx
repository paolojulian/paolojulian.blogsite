import React, { FunctionComponent, useEffect, useMemo } from 'react';
import SearchIcon from '@/_components/icons/search-icon';
import Row from '@/_components/layouts/row';
import { isMacOS } from '@/_utils/navigator/navigator';

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
      className='border border-gray-300 text-gray-400 flex flex-row gap-16 items-center px-6 py-5'
      role='button'
      onClick={onClick}
    >
      <Row className='gap-4 items-center'>
        <SearchIcon />
        <span>Quick Search</span>
      </Row>
      <span>{keyShortcut}</span>
    </div>
  );
};

export default GlobalSearchBtn;
