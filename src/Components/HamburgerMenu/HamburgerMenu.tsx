import React, { FC } from 'react';
import styles from './HamburgerMenu.module.scss';

interface HamburgerMenuProps {
  isOpen: boolean;
  handleOpen: (isOpen: boolean) => void;
}

export const HamburgerMenu: FC<HamburgerMenuProps> = ({
  isOpen,
  handleOpen,
}) => {
  return (
    !isOpen && (
      <section
        className={styles.hamburgerWrapper}
        onClick={() => handleOpen(true)}
      >
        <div className={styles.linesWrapper}>
          <div className={styles.lineItem} />
          <div className={styles.lineItem} />
          <div className={styles.lineItemShorted} />
        </div>
      </section>
    )
  );
};
