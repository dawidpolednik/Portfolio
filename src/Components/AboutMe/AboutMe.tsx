import React, { FC } from 'react';
import { DoubleAngle } from '../DoubleAngle/DoubleAngle';
import styles from './AboutMe.module.scss';

const AboutMe: FC = () => (
  <div className={styles.aboutContainer} id="aboutMe">
    <section className={styles.aboutMeSection}>
      <h3 className={styles.title}>O mnie.</h3>
      <p className={styles.subTitle}>Kim jestem?</p>
      <p>
        Nazywam się Dawid Polednik, jestem
        <strong>&nbsp;Front-End Developerem</strong> pochodzącym z małego
        miasteczka spod Raciborza. Od ponad roku zajmuję się tworzeniem stron
        internetowych.
      </p>
      <p>
        Mam półtoraroczne praktyczne doświadczenie w programowaniu aplikacji
        internetowych/mobilnych przy użyciu HTML5, CSS3 oraz języka JavaScript z
        wykorzystaniem bibliotek React/React Native.
      </p>
      <p>
        Jestem osobą stawiającą na ciągły rozwój, dlatego nie zamykam się na
        inne technologie.
      </p>
      <p>
        Jestem absolwentem studiów II stopnia kierunku Informatyka na Wydziale
        Automatyki, Elektroniki i Informatyki Politechniki Śląskiej.
      </p>
      <p>
        Obecnie pracuję na stanowisku Front-End Developera w firmie Pirios S.A.
        zlokalizowanej w Krakowie.
      </p>
      <p>
        Poza zamiłowaniem do programowania webowego interesuję się trójbojem
        siłowym oraz piłką nożną.
      </p>
      <div className={styles.angleContainer}>
        <DoubleAngle subPage="education" />
        <DoubleAngle onUp={true} subPage="home" />
      </div>
    </section>
  </div>
);

export default AboutMe;
