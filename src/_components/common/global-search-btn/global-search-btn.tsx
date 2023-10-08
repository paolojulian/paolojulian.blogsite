'use client';
import Uppercase from '@/_components/common/typography/uppercase';
import SearchIcon from '@/_components/icons/search-icon';
import Row from '@/_components/layouts/row';
import { useGlobalSearchModal } from '@/_context/global-search-provider/global-search-provider';
import { isMacOS } from '@/_utils/navigator/navigator';
import classNames from 'classnames';
import { FunctionComponent, useCallback, useEffect, useMemo } from 'react';

interface Props {
  // no props
}

const GlobalSearchBtn: FunctionComponent<Props> = () => {
  const isMacPlatform = useMemo(() => isMacOS(), []);

  const { setIsOpen: setIsGlobalSearchModalOpen } = useGlobalSearchModal();

  const handleClickGlobalSearchBtn = useCallback(() => {
    setIsGlobalSearchModalOpen(true);
  }, [setIsGlobalSearchModalOpen]);

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      const modifierState = isMacPlatform ? 'Meta' : 'Control';
      const modifierKey = e.getModifierState(modifierState);
      if ((modifierKey && e.key === 'k') || (modifierKey && e.key === 'k')) {
        handleClickGlobalSearchBtn();
      }
    };

    document.addEventListener('keydown', handleKeyPress);

    return () => {
      document.removeEventListener('keydown', handleKeyPress);
    };
  }, [handleClickGlobalSearchBtn, isMacPlatform]);

  return (
    <>
      <div
        className={classNames(
          'transition text-gray-400 hover:text-gray-500 px-4 lg:pl-6 lg:pr-7',
          'bg-white border border-gray-300 hover:border-primary-400',
          'rounded-sm',
          'w-full md:w-fit py-4',
          'flex flex-row justify-center items-center gap-4 lg:gap-16'
        )}
        role='button'
        onClick={handleClickGlobalSearchBtn}
      >
        <Row className='gap-4 items-center'>
          <SearchIcon />
          <Uppercase>Quick Search...</Uppercase>
        </Row>
        <span className={classNames(!isMacPlatform ? 'hidden' : 'lg:block')}>
          ⌘K
        </span>
        <span className={classNames(isMacPlatform ? 'hidden' : 'lg:block')}>
          Ctrl K
        </span>
      </div>
    </>
  );
};

export default GlobalSearchBtn;
