import React, { FC } from 'react';
import styles from './Menu.module.scss';
import { CloseIcon } from './CloseIcon';
import { useEscape } from './useEscape';

interface MenuProps {
  handleOpen: (isOpen: boolean) => void;
  isOpen: boolean;
}

export const Menu: FC<MenuProps> = ({ isOpen, handleOpen }) => {
  useEscape(() => handleOpen(false));
  return (
    isOpen && (
      <section
        className={styles.wrapper}
        onKeyDown={e => e.key === 'Escape' && handleOpen(false)}
      >
        <div className={styles.contentWrapper}>
          <div
            className={styles.closeIconWrapper}
            onClick={() => handleOpen(false)}
          >
            <CloseIcon />
          </div>
        </div>
      </section>
    )
  );
};
