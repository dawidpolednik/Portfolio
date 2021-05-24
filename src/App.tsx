import React, { FC, useMemo } from 'react';
import { Link } from 'react-scroll';

import styles from './App.module.scss';
import AboutMe from './Components/AboutMe/AboutMe';
import Contact from './Components/Contact/Contact';
import Education from './Components/Education/Education';
import Footer from './Components/Footer/Footer';
import LandingPage from './Components/LandingPage/LandingPage';
import Projects from './Components/Projects/Projects';
import { Technologies } from './Components/Technologies/Technologies';
import { useTranslation } from 'react-i18next';
import i18n from './i18n';

type LanguageOptions = 'pl' | 'en';

const menuItems: MenuItem[] = [
  { id: 1, name: 'Home', toNavigate: 'home' },
  { id: 2, name: 'O Mnie', toNavigate: 'aboutMe' },
  { id: 3, name: 'Edukacja', toNavigate: 'education' },
  { id: 4, name: 'Technologie', toNavigate: 'technologies' },
  { id: 5, name: 'Projekty', toNavigate: 'projects' },
  { id: 6, name: 'Kontakt', toNavigate: 'contact' },
];

const App: FC = () => {
  const { t } = useTranslation();

  const renderNavbar = useMemo(
    () => (
      <nav className={`${styles.toolbar} ${styles.resetBlur}`}>
        <p>{t('welcome')}</p>
        <ul className={styles.navigationList}>
          {menuItems.map(({ id, name, toNavigate }) => (
            <Link
              key={id}
              className={styles.navigationItem}
              activeClass="active"
              to={toNavigate}
              spy={true}
              smooth={true}
              hashSpy={true}
              offset={0}
              duration={1000}
              delay={250}
              isDynamic={true}
              ignoreCancelEvents={false}
            >
              {name}
            </Link>
          ))}
        </ul>
      </nav>
    ),
    []
  );

  const changeLanguage = (lng: LanguageOptions) => {
    i18n.changeLanguage(lng);
  };

  return (
    <>
      <div className={styles.bgImage}>
        {renderNavbar}
        <div className={styles.container}>
          <LandingPage />
        </div>
      </div>
      <AboutMe />
      <Education />
      <Technologies />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
};

export default App;
