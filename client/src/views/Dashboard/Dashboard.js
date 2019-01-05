import React, { Component } from "react";
import { Switch, Link, Routes } from "react-router-dom";
import SideNav from "../../components/Nav/SideNav/SideNav";
import TopNav from "../../components/Nav/TopNav/TopNav";
import styles from "../../components/Nav/SideNav/SideNav.module.css";
import Upload from "../Upload/Upload";

class Dashboard extends Component {
  render() {
    return (
      <div className={styles.dashboard}>
        {/* <TopNav /> */}
        <SideNav />
        <div className={styles.body}>
          <div className={styles.content}>
            <div className={styles.col_1}>
              <Upload />
            </div>
            <div className={styles.col_2}>
              <div>this is column 2</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Dashboard;
