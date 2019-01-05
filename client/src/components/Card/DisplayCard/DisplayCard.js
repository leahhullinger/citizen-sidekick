import React, { Component } from "react";
import { Thumbnail } from "../../Thumbnail/Thumbnail";
import styles from "./DisplayCard.module.css";

class DisplayCard extends Component {
  render() {
    return (
      <div className={styles.displayCard}>
        <div className={styles.header}>
          <h3>Date</h3>
        </div>
        <div className={styles.content}>
          <div className={styles.col_1}>
            <Thumbnail
              src={
                "https://s3.us-east-2.amazonaws.com/citizen-sidekick/example.jpg"
              }
            />
          </div>
          <div className={styles.col_2}>
            <p>notes</p>
            <p>transcript</p>
          </div>
        </div>
      </div>
    );
  }
}

export default DisplayCard;
