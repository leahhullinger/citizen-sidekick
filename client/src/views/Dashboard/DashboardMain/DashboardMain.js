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
        <div className={styles.recent}>
          <div className={styles.header}>
            <Text>Recent</Text>
          </div>
        </div>
        <div className={styles.folders}>
          <div className={styles.header}>
            <Text>Folders</Text>
          </div>
          <Grid>
            {folders.map(folder => {
              return (
                <GridCell span={3} key={folder.id}>
                  <Link to={`${match.url}/folder/${folder.id}`}>
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
        <div className={styles.files}>
          <Text className={styles.header}>Files</Text>
          <Grid>
            {files.map &&
              (file => {
                return (
                  <GridCell span={4} key={file.id}>
                    <Button icon="folder" label={file.title} outlined>
                      <Link to={`${match.url}/${file.id}`} />
                    </Button>
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
