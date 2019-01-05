import React, { Component } from "react";
import { Input, TextArea, Select } from "../../components/Form/Form";
import { Button } from "../../components/Button/Button";
import { Thumbnail } from "../../components/Thumbnail/Thumbnail";
import styles from "./Upload.module.css";

class Upload extends Component {
  render() {
    return (
      <div className={styles.container}>
        <div className={styles.col_1}>
          <Thumbnail
            src={
              "https://mymodernmet.com/wp/wp-content/uploads/2018/12/best-photos-2018-1.jpg"
            }
          />
          <Input label="Title" />
          <TextArea label="Notes" />
          <Select />
          <Button btnText="Save" />
        </div>
        <div className={styles.col_2}>
          <h1>this is column 2</h1>
        </div>
      </div>
    );
  }
}

export default Upload;

//
