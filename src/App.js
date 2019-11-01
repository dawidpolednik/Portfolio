import React, { Component } from "react";
import styles from "./App.module.scss";
import { Link } from "react-scroll";
import LandingPage from "./Components/LandingPage/LandingPage";
import AboutMe from "./Components/AboutMe/AboutMe";
import Education from "./Components/Education/Education";
import Technologies from "./Components/Technologies/Technologies";
import Projects from "./Components/Projects/Projects";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";

import "./loader.js";

class App extends Component {
  state = {
    menuItems: [
      { name: "Home", toNavigate: "home" },
      { name: "O Mnie", toNavigate: "aboutMe" },
      { name: "Edukacja", toNavigate: "education" },
      { name: "Technologie", toNavigate: "technologies" },
      { name: "Projekty", toNavigate: "projects" },
      { name: "Kontakt", toNavigate: "contact" }
    ]
  };

  getMenuList = () => {
    const { menuItems } = this.state;
    return (
      <nav className={`${styles.toolbar} ${styles.resetBlur}`}>
        <ul className={styles.navigationList}>
          {menuItems.map((menuItem, index) => (
            <Link
              activeClass="active"
              key={index}
              className={styles.navigationItem}
              to={menuItem.toNavigate}
              spy={true}
              smooth={true}
              hashSpy={true}
              offset={0}
              duration={1000}
              delay={250}
              isDynamic={true}
              onSetActive={this.handleSetActive}
              onSetInactive={this.handleSetInactive}
              ignoreCancelEvents={false}
            >
              {menuItem.name}
            </Link>
          ))}
        </ul>
      </nav>
    );
  };
  render() {
    return (
      <>
        <div className={styles.bgImage}>
          {this.getMenuList()}
          <div className={styles.container}>
            <LandingPage />
          </div>
        </div>
        <AboutMe />
        <Education />
        <Technologies />
        <Projects />
        <Contact />
        <Footer />
      </>
    );
  }
}

export default App;
