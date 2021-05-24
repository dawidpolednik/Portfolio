import React, { useMemo, useState } from 'react';

import { projectsLoader } from '../../mocks/fixtures';
import { DoubleAngle } from '../DoubleAngle/DoubleAngle';
import Project from './Project';
import styles from './Projects.module.scss';

const Projects = () => {
  const [projects] = useState<Project[]>(projectsLoader());

  const renderProjects = useMemo(
    () =>
      projects.map(
        ({ id, image, title, description, tools, gitHub, liveDemo }) => (
          <Project
            key={id}
            id={id}
            imageRef={image}
            title={title}
            description={description}
            tools={tools}
            link={gitHub}
            liveDemo={liveDemo}
          />
        )
      ),
    [projects]
  );

  return (
    <section className={styles.container} id="projects">
      <div className={styles.projectsHeader}>
        <h2 className={styles.projectsTitle}>Zrealizowane Projekty</h2>
      </div>
      <div className={styles.projectsBackground}>
        <div className={styles.projectsSection}>{renderProjects}</div>
      </div>
      <div className={styles.angleContainer}>
        <DoubleAngle subPage="contact" />
        <DoubleAngle onUp={true} subPage="technologies" />
      </div>
    </section>
  );
};
export default Projects;
