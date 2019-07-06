import React, { Component } from "react";
// import { PrimaryBtn } from "../../Button/PrimaryBtn";
import styles from "./FileCard.module.css";
import { style } from "glamor";

export default class FileCard extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { date, title, notes, text, s3_url } = this.props.file;
    return (
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.imgWrapper}>
            <img src={s3_url} />
          </div>
        </div>
        <div className={styles.col_1}>
          <p className={styles.title}>{title}</p>
          <p classname={style.date}>{date}</p>
        </div>
        <div className={styles.content}>
          <p className={styles.notes}>Notes</p>
          <p>{notes}</p>
          <br />
          <p className={styles.text}>Transcript</p>
          <p>{text}</p>
          <div className={styles.actions}>
            {/* <SimpleButton btnText="EDIT" />
            <SimpleButton btnText="TRANSCRIBE" /> */}
          </div>
        </div>
      </div>
    );
  }
}
