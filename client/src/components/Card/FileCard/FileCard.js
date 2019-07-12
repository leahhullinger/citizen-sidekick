import React, { Component } from "react";
import { Typography } from "../../../ui/Typography";
import {
  Card,
  CardPrimaryAction,
  CardMedia,
  CardActions,
  CardActionButtons,
  CardActionIcons
} from "../../../ui/Card";

const styles = {
  typography: {
    title: {
      fontSize: 11,
      fontWeight: 700,
      textTransform: "capitalize",
      color: "#404040"
    },
    subtitle: {
      fontSize: 11,
      fontWeight: 400,
      color: "#404040"
    }
  }
};
export default class FileCard extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { file } = this.props;
    console.log("this.props.file", this.props.file);
    return (
      <Card style={{ width: "12.5rem", margin: 10 }}>
        <CardPrimaryAction>
          {file.s3_url ? (
            <CardMedia
              square
              style={{
                backgroundImage: `url(${file.s3_url})`,
                backgroundPosition: "top center"
              }}
            />
          ) : (
            <div style={{ padding: "20px 0" }}>
              <i
                class="material-icons"
                style={{ fontSize: 72, color: "#BFBFBF" }}
              >
                note
              </i>
            </div>
          )}
          <div style={{ paddingTop: 5 }}>
            <Typography style={styles.typography.title}>
              {file.title}
            </Typography>
          </div>
          <>
            <Typography style={styles.typography.subtitle}>
              {file.date}
            </Typography>
          </>
        </CardPrimaryAction>
        <CardActions />
      </Card>
    );
  }
}
