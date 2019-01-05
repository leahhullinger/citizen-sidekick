import React, { Component } from "react";
import DisplayCard from "../Card/DisplayCard/DisplayCard";
import styles from "./Timeline.module.css";

class Timeline extends Component {
  render() {
    return (
      <div className={styles.timeline}>
        <h1>Timeline Page</h1>
        <DisplayCard />
      </div>
    );
  }
}

export default Timeline;
