import React, { Component } from "react";
import { Link } from "react-router-dom";
import FileCard from "../../../components/Card/FileCard/FileCard";
import styles from "./DashboardMain.module.css";
import { Grid, GridCell } from "../../../ui/Grid";
import { Text } from "../../../ui/Text";
import { Button } from "../../../ui/Button";

const folderBtnStyle = {
  borderColor: "#d8d8d8",
  color: "#404040",
  fontSize: 9,
  width: "100%",
  justifyContent: "left"
};

class DashboardMain extends Component {
  constructor(props) {
    super(props);
  }

  handleInputUpdate = e => this.setState({ [e.target.name]: e.target.value });
  render() {
    const { folders, match, files } = this.props;

    return (
      <div className={styles.mainContainer}>
        <div className={styles.wrapper}>
          <div className={styles.header}>
            <Text>Recent</Text>
          </div>
        </div>
        <div className={styles.wrapper}>
          <div className={styles.header}>
            <Text>Folders</Text>
          </div>
          <Grid>
            {!!folders &&
              folders.map(folder => {
                return (
                  <GridCell span={3} key={folder.id}>
                    <Link
                      to={`${match.url}/folder/${folder.id}`}
                      style={{ textDecoration: "none" }}
                    >
                      <Button
                        icon="folder"
                        label={folder.folder_name}
                        style={folderBtnStyle}
                        outlined
                      />
                    </Link>
                  </GridCell>
                );
              })}
          </Grid>
        </div>
        <div className={styles.wrapper}>
          <div className={styles.header}>
            <Text>Files</Text>
          </div>
          <Grid>
            {!!files &&
              files.map(file => {
                return (
                  <GridCell span={4}>
                    <FileCard file={file} />
                  </GridCell>
                );
              })}
          </Grid>
        </div>
      </div>
    );
  }
}

export default DashboardMain;
