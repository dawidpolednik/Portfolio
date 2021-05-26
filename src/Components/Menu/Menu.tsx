import React, { FC, useEffect, useRef } from 'react';
import styles from './Menu.module.scss';
import { CloseIcon } from './CloseIcon';
import { useEscape } from './useEscape';
import ReactDOM from 'react-dom';
import {
  disableBodyScroll,
  enableBodyScroll,
  clearAllBodyScrollLocks,
} from 'body-scroll-lock';

interface MenuProps {
  onClose: () => void;
  isOpen: boolean;
}

export const Menu: FC<MenuProps> = ({ isOpen, onClose }) => {
  const menuRef = useRef<HTMLDivElement>(null);

  useEscape(() => onClose());

  useEffect(() => {
    if (isOpen) disableBodyScroll(menuRef.current);
  }, [isOpen]);

  const handleOnClose = () => {
    onClose();
    enableBodyScroll(menuRef.current);
  };

  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <section
      ref={menuRef}
      className={styles.wrapper}
      onKeyDown={e => e.key === 'Escape' && handleOnClose()}
    >
      <div className={styles.contentWrapper}>
        <div className={styles.closeIconWrapper} onClick={handleOnClose}>
          <CloseIcon />
        </div>
      </div>
    </section>,
    document.getElementById('portal')
  );
};
