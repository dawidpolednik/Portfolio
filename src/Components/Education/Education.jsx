import React from "react";
import styles from "./Education.module.scss";
import ScrollAnimation from "react-animate-on-scroll";
import DoubleAngle from "../DoubleAngle/DoubleAngle";
import LifeEvent from "./LifeEvent";
import { lifeEvents } from "./lifeEvents";

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
              {lifeEvents.map(({ id, date, title, description }) => (
                <LifeEvent
                  key={id}
                  date={date}
                  title={title}
                  description={description}
                />
              ))}
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
