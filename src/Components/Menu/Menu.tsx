import React, { FC } from 'react';
import styles from './Menu.module.scss';
import { CloseIcon } from './CloseIcon';
import { useEscape } from './useEscape';
import ReactDOM from 'react-dom';
interface MenuProps {
  onClose: () => void;
  isOpen: boolean;
}

export const Menu: FC<MenuProps> = ({ isOpen, onClose }) => {
  useEscape(() => onClose());
  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <section
      className={styles.wrapper}
      onKeyDown={e => e.key === 'Escape' && onClose()}
    >
      <div className={styles.contentWrapper}>
        <div className={styles.closeIconWrapper} onClick={onClose}>
          <CloseIcon />
        </div>
      </div>
    </section>,
    document.getElementById('portal')
  );
};
