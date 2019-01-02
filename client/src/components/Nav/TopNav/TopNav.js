import React, { Component } from "react";
import { Icon } from "mx-react-components";
import styles from "./TopNav.module.css";
import { TextDisplay } from "../../TextDisplay/TextDisplay";

class TopNav extends Component {
  render() {
    return (
      <div className={styles.navWrapper}>
        <span className="col-1">
          <TextDisplay text="citizen sidekick" />
        </span>
        {/* <span className="col-2">
          <h4>center column</h4>
        </span> */}
        <span className="col-3">
          <Icon type="hamburger" size="40" />
        </span>
      </div>
    );
  }
}

export default TopNav;
