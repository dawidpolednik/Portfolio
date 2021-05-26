import React, { FC, useMemo } from 'react';
import { LanguageOptions } from '../../App';
import styles from './LanguageSwitcher.module.scss';
// import i18n from '../../i18n';
import { useTranslation } from 'react-i18next';
interface LanguageSwitcherProps {
  changeLanguage: (lng: LanguageOptions) => void;
}

export const LanguageSwitcher: FC<LanguageSwitcherProps> = ({
  changeLanguage,
}) => {
  const { i18n } = useTranslation();

  const currentLanguage = useMemo(() => i18n.language, [i18n.language]);

  const isActivePL = useMemo(
    () => currentLanguage === 'pl' && styles.active,
    [currentLanguage]
  );

  const isActiveEN = useMemo(
    () => currentLanguage === 'en' && styles.active,
    [currentLanguage]
  );

  return (
    <div className={styles.wrapper}>
      <p
        className={`${styles.languagePicker} ${isActivePL}`}
        onClick={() => changeLanguage('pl')}
      >
        PL
      </p>
      <p>/</p>
      <p
        className={`${styles.languagePicker} ${isActiveEN}`}
        onClick={() => changeLanguage('en')}
      >
        EN
      </p>
    </div>
  );
};
