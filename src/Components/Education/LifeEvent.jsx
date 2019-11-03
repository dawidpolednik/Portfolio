import React from "react";
import styles from "./Education.module.scss";

const LifeEvent = ({ date, title, description }) => (
  <li className={styles.event} data-date={date}>
    <h3>{title}</h3>
    <p>{description}</p>
  </li>
);
export default LifeEvent;
