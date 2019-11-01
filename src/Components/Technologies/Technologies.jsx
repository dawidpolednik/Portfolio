import React, { Component } from "react";
import styles from "./Technologies.module.scss";
import { imageLoader } from "../../images";
import ScrollAnimation from "react-animate-on-scroll";
import DoubleAngle from "../DoubleAngle/DoubleAngle";

class Technologies extends Component {
  state = {
    images: []
  };

  componentDidMount() {
    this.setState({ images: imageLoader() });
  }
  renderImage = () => {
    const { images } = this.state;
    return images.map(({ imageRef, title }) => (
      <>
        <ScrollAnimation
          animateIn="fadeInLeftBig"
          duration={1}
          initiallyVisible={false}
          animateOnce
          animatePreScroll
        >
          <div className={styles.imgSection}>
            <div className={styles.imgContainer}>
              <img className={styles.img} src={imageRef} alt=""></img>
            </div>
            <p className={styles.imgHeader}>{title}</p>
          </div>
        </ScrollAnimation>
      </>
    ));
  };
  render() {
    return (
      <section className={styles.container} id="technologies">
        <div className={styles.technologiesHeader}>
          <h2 className={styles.technologiesTitle}>
            Wykorzystywane Technologie
          </h2>
        </div>
        <div className={styles.technologiesBackground}>
          <div className={styles.technologiesSection}>{this.renderImage()}</div>
          <div className={styles.angleContainer}>
            <DoubleAngle subPage="projects" />
            <DoubleAngle onUp={true} subPage="education" />
          </div>
        </div>
      </section>
    );
  }
}

export default Technologies;
