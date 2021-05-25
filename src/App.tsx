import React, { FC, useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-scroll';

import styles from './App.module.scss';
import AboutMe from './Components/AboutMe/AboutMe';
import Contact from './Components/Contact/Contact';
import Education from './Components/Education/Education';
import Footer from './Components/Footer/Footer';
import { HamburgerMenu } from './Components/HamburgerMenu/HamburgerMenu';
import LandingPage from './Components/LandingPage/LandingPage';
import { LanguageSwitcher } from './Components/LanguageSwitcher/LanguageSwitcher';
import { Menu } from './Components/Menu/Menu';
import Projects from './Components/Projects/Projects';
import { Technologies } from './Components/Technologies/Technologies';
import i18n from './i18n';

export type LanguageOptions = 'pl' | 'en';

const App: FC = () => {
  const { t } = useTranslation();

  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const handleChangeLanguage = (lng: LanguageOptions) => {
    i18n.changeLanguage(lng);
  };

  const menuItems: MenuItem[] = [
    { id: 1, name: t('menuOptions.home'), toNavigate: 'home' },
    { id: 2, name: t('menuOptions.aboutMe'), toNavigate: 'aboutMe' },
    { id: 3, name: t('menuOptions.aboutMe'), toNavigate: 'education' },
    { id: 4, name: t('menuOptions.education'), toNavigate: 'technologies' },
    { id: 5, name: t('menuOptions.projects'), toNavigate: 'projects' },
    { id: 6, name: t('menuOptions.contact'), toNavigate: 'contact' },
  ];

  const renderNavbar = useMemo(
    () => (
      <nav className={`${styles.toolbar} ${styles.resetBlur}`}>
        <LanguageSwitcher changeLanguage={handleChangeLanguage} />
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
    [menuItems]
  );

  return (
    <>
      <div className={styles.bgImage}>
        <HamburgerMenu isOpen={isMenuOpen} handleOpen={setIsMenuOpen} />
        <Menu isOpen={isMenuOpen} handleOpen={setIsMenuOpen} />
        {/* {renderNavbar} */}
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
