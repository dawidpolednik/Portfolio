import React from 'react';
import styles from './Footer.module.scss';
import { socialMedia } from '../SocialLinks/socialMedia';
import SocialLinks from '../SocialLinks/SocialLinks';

const Footer = () => {
  return (
    <footer className={styles.container}>
      <div className={styles.contentWidth}>
        <div className={styles.infoContainer}>
          <h4 className={styles.contactTitle}>Kontakt</h4>
          <div className={styles.phoneContainer}>
            <p className={styles.contactContent}>
              <i className="fa fa-phone"></i>
              &nbsp;&nbsp;&nbsp; Telefon: +48 530 921 475
            </p>
          </div>

          <div className={styles.mailContainer}>
            <p className={styles.contactContent}>
              <i className="fa fa-envelope"></i>
              &nbsp;&nbsp;&nbsp; E-mail: dawid.polednik@gmail.com
            </p>
          </div>

          <div className={styles.buttonsContainer}>
            <a
              href={require('../../assets/cv/CV(pl).pdf')}
              download="DawidPolednik(CV-PL)"
              className={styles.ButtonCV}
            >
              CV PL
            </a>
            <a
              href={require('../../assets/cv/CV(ang).pdf')}
              download="DawidPolednik(CV-ANG)"
              className={styles.ButtonCV}
            >
              CV ANG
            </a>
          </div>
        </div>
        <div className={styles.socialLinks}>
          {socialMedia.map(({ id, href, className }) => (
            <SocialLinks key={id} href={href} className={className} />
          ))}
        </div>
        <p className={styles.copyright}>&#169; 2019 Dawid Polednik</p>
      </div>
    </footer>
  );
};

export default Footer;
