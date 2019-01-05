import React, { Component } from "react";
import styles from "./DisplayWindow.module.css";

class DisplayWindow extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false
    };
  }

  handleShow = () => {
    this.setState({ isOpen: true });
  };

  handleClose = () => {
    this.setState({ isOpen: false });
  };

  render() {
    return <div className={styles.window}>this is a window</div>;
  }
}

export default DisplayWindow;
