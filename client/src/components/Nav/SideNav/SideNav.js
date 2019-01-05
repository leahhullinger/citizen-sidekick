import React, { Component } from "react";
import styles from "./SideNav.module.css";
import { Link } from "react-router-dom";
import { Icon } from "mx-react-components";

class SideNav extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: true
    };
  }
  // default is open on dashboard load
  handleBtnClick = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  render() {
    return (
      <div className={styles.sideNav}>
        <button className={styles.btn} onClick={this.handleBtnClick}>
          <Icon type="arrow-left" size="40" />
        </button>
        <div className={styles.section}>
          <a className={styles.link}>folder</a>

          <a className={styles.link} href="#">
            image
          </a>
          <a className={styles.link} href="#">
            audio
          </a>
          <a className={styles.link} href="#">
            notes
          </a>
          <a className={styles.link} href="#">
            contact
          </a>
          <h3>VIEW</h3>
          <a className={styles.link} href="#">
            Folders
          </a>
          <a className={styles.link} href="#">
            Recent Activity
          </a>
          <a className={styles.link} href="#">
            Contacts
          </a>
        </div>
        <div className={styles.footer}>
          <h4>SEARCH</h4>
          <h4>HELP</h4>
          <h4>LOG OUT</h4>
        </div>
      </div>
    );
  }
}

export default SideNav;
