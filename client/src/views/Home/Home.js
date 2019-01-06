import React, { Component } from "react";
import axios from "axios";
import styles from "./Home.module.css";
import TopNav from "../../components/Nav/TopNav/TopNav";
import HomeIMG from "../../Home.jpg";
import Miles from "../../Miles2.jpg";

class Home extends Component {
  render() {
    return (
      <div className={styles.container}>
        <div className={styles.bgImg} />
        <div className={styles.content}>
          <h1 className={styles.title}>CITIZEN SIDEKICK</h1>
          <a className={styles.link} alt="Enter Citizen Sidekick">
            <span className={styles.linkText}>Enter</span>
          </a>
        </div>
      </div>
    );
  }
}

export default Home;
