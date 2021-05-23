import React, { useState } from "react";
import styles from "./Projects.module.scss";
import { imageProjectsLoader } from "../../images";
import Project from "./Project";
import DoubleAngle from "../DoubleAngle/DoubleAngle";

const Projects = () => {
  const [images] = useState(imageProjectsLoader());

  const renderProject = () =>
    images.map(
      ({ key, id, imageRef, title, description, tools, link, liveDemo }) => (
        <Project
          key={key}
          id={id}
          imageRef={imageRef}
          title={title}
          description={description}
          tools={tools}
          link={link}
          liveDemo={liveDemo}
        />
      )
    );

  return (
    <section className={styles.container} id="projects">
      <div className={styles.projectsHeader}>
        <h2 className={styles.projectsTitle}>Zrealizowane Projekty</h2>
      </div>
      <div className={styles.projectsBackground}>
        <div className={styles.projectsSection}>{renderProject()}</div>
      </div>
      <div className={styles.angleContainer}>
        <DoubleAngle subPage="contact" />
        <DoubleAngle onUp={true} subPage="technologies" />
      </div>
    </section>
  );
};
export default Projects;
