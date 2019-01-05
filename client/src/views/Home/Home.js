import React, { Component } from "react";
import axios from "axios";
import styles from "./Home.module.css";
import TopNav from "../../components/Nav/TopNav/TopNav";
import HomeIMG from "../../Home.jpg";
import Miles from "../../Miles2.jpg";

class Home extends Component {
  render() {
    return (
      <div className={styles.home}>
        {/* <img className={styles.img} src={HomeIMG} /> */}
        <div className={styles.left} />
        <img className={styles.img} src={Miles} />
        <div className={styles.overlay} />
        <h1 className={styles.title}>CITIZEN SIDEKICK</h1>
        <a className={styles.link}>Enter</a>
      </div>
    );
  }
}

export default Home;
