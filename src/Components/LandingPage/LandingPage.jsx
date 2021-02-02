import React from "react";
import styles from "./LandingPage.module.scss";
import Picture from "../../img/polednik.jpg";
import DoubleAngle from "../DoubleAngle/DoubleAngle";
import socialsInfo from "../SocialLinks/socialInfo";
import SocialLinks from "../SocialLinks/SocialLinks";

const LandingPage = () => {
  return (
    <section className={styles.landingGrid} id="home">
      <div className={styles.imgContainer}>
        <img className={styles.img} src={Picture} alt="Dawid Polednik" />
      </div>
      <div className={styles.bannerText}>
        <h2 className={styles.bannerName}>Dawid Polednik</h2>
        <h1 className={styles.bannerTitle}>Front End Developer</h1>
        <hr className={styles.bannerHR} />
        <div className={styles.socialLinks}>
          {socialsInfo.map(({ id, href, className }) => (
            <SocialLinks key={id} href={href} className={className} />
          ))}
        </div>
      </div>
      <DoubleAngle subPage="aboutMe" />
    </section>
  );
};
export default LandingPage;
