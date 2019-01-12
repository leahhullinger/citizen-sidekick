// template card for image, audio, notes, preview, display

import React, { Component } from "react";
import styles from "./FileCard.module.css";

export default class FileCard extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { date, title, notes, text, s3_url } = this.props.file;
    return (
      <div className={styles.card}>
        <div className={styles.contentBox}>
          <h3 className={styles.title}>{title}</h3>
          <p>{s3_url}</p>
          <div className={styles.contentBox}>
            <p className={date}>{date}</p>
            <span className={styles.wrapper}>
              <h4>Notes</h4>
              <p>{notes}</p>
            </span>
            <span className={styles.wrapper}>
              <h4>Text</h4>
              <p>{text}</p>
            </span>
          </div>
          <span />
        </div>
      </div>
    );
  }
}
