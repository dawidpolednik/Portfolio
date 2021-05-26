import React, { FC } from 'react';
import { LanguageOptions } from '../../App';
import styles from './LanguageSwitcher.module.scss';

interface LanguageSwitcherProps {
  changeLanguage: (lng: LanguageOptions) => void;
}

export const LanguageSwitcher: FC<LanguageSwitcherProps> = ({
  changeLanguage,
}) => (
  <div className={styles.wrapper}>
    <p className={styles.languagePicker} onClick={() => changeLanguage('pl')}>
      PL
    </p>
    <p>/</p>
    <p className={styles.languagePicker} onClick={() => changeLanguage('en')}>
      EN
    </p>
  </div>
);
