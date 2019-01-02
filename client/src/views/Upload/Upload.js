import React, { Component } from "react";
import { Input, TextArea, Select } from "../../components/Form/Form";
import { Button } from "../../components/Button/Button";
import { Thumbnail } from "../../components/Thumbnail/Thumbnail";
import styles from "./Upload.module.css";

class Upload extends Component {
  render() {
    return (
      <div className={styles.uploadWrapper}>
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
    );
  }
}

export default Upload;

//
