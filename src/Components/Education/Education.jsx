import React from "react";
import styles from "./Education.module.scss";
import ScrollAnimation from "react-animate-on-scroll";
import DoubleAngle from "../DoubleAngle/DoubleAngle";

const Education = () => {
  return (
    <>
      <section className={styles.container} id="education">
        <div className={styles.educationHeader}>
          <h2 className={styles.educationTitle}>Edukacja</h2>
        </div>
        <ScrollAnimation
          animateIn="bounceInDown"
          initiallyVisible={false}
          duration={2}
          delay={300}
          animateOnce
          animatePreScroll
        >
          <div className={styles.educationSection}>
            <ul className={styles.timeline}>
              <li className={styles.event} data-date="02.2018">
                <h3>Studia I Stopnia</h3>
                <p>
                  Tytuł inżyniera na kierunku Informatyka na wydziale
                  Automatyki, Elektrotechniki i Informatyki na Politechnice
                  Opolskiej w Opolu.
                </p>
              </li>
              <li className={styles.event} data-date="02.2019-05.2019">
                <h3>SoftServe</h3>
                <p>WebUI Development: React Front-End Developer (IT Academy)</p>
              </li>
              <li
                className={styles.event}
                id="date"
                data-date="08.2019-10.2019"
              >
                <h3>Euvic(Internship)</h3>
                <p>Junior Front-End Developer</p>
              </li>

              <li className={styles.event} data-date="06.2019">
                <h3>Studia II Stopnia</h3>
                <p>
                  Tytuł magistra na kierunku Informatyka na wydziale Automatyki,
                  Elektroniki i Informatyki na Politechnice Śląskiej w
                  Gliwicach.
                </p>
                <p>Specjalność: Internet i Technologie Sieciowe</p>
              </li>
            </ul>
          </div>
        </ScrollAnimation>
        <div className={styles.angleContainer}>
          <DoubleAngle subPage="technologies" />
          <DoubleAngle onUp={true} subPage="aboutMe" />
        </div>
      </section>
    </>
  );
};
export default Education;
