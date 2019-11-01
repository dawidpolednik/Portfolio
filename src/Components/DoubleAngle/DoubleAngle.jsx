import React, { Component } from "react";
import { Link } from "react-scroll";
import styles from "./DoubleAngle.module.scss";

export default class DoubleAngle extends Component {
  render() {
    const { onUp, subPage } = this.props;
    return (
      <Link
        activeClass="active"
        className={styles.doubleAngle}
        to={subPage}
        spy={true}
        smooth={true}
        hashSpy={true}
        offset={0}
        duration={500}
        delay={250}
        isDynamic={true}
        onSetActive={this.handleSetActive}
        onSetInactive={this.handleSetInactive}
        ignoreCancelEvents={false}
      >
        {!onUp ? (
          <i className="fa fa-angle-double-down " aria-hidden="true"></i>
        ) : (
          <i className="fa fa-angle-double-up " aria-hidden="true"></i>
        )}
      </Link>
    );
  }
}
