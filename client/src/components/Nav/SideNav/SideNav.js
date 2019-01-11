import React, { Component } from "react";
import styles from "./SideNav.module.css";
import { Route, Link } from "react-router-dom";
import { Icon } from "mx-react-components";
import { GET_FOLDERS_COMPLETE } from "../../../ducks/constants";

class SideNav extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: true
    };
  }

  componentDidMount() {
    if (window.innerWidth < 768) {
      this.setState({ isOpen: false });
    }
  }
  handleBtnClick = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  render() {
    const { isOpen } = this.state;
    const { folders, match } = this.props;
    return (
      <React.Fragment>
        <button
          className={[styles.btn, isOpen ? styles.isOpen : null].join(" ")}
          onClick={() => this.handleBtnClick()}
        >
          <Icon type={isOpen ? "arrow-left" : "hamburger"} size="40" />
        </button>
        <div
          className={[styles.sideNav, isOpen ? styles.isOpen : null].join(" ")}
        >
          <div className={styles.content}>
            <div className={styles.section}>
              <h3>Tools</h3>
              <a href="#Upload">Transcribe</a>
              <a>Search & Rescue</a>
              <a>Code Backup</a>
              <br />
              <h3>
                <Link to={`${match.url}/upload`}>+ UPLOAD</Link>
              </h3>
              <h3>
                {" "}
                <Link to={`${match.url}/folder/new`}>+ FOLDER</Link>
              </h3>
              <h3>+ NOTES</h3>
              <br />
              <h3>Folders</h3>
              {!!folders &&
                folders.map(folder => {
                  return (
                    <Link
                      key={folder.id}
                      className={styles.link}
                      to={`${match.url}/folder/${folder.id}`}
                    >
                      {folder.folder_name}
                    </Link>
                  );
                })}
            </div>
            <div className={styles.footer}>
              <h4>SEARCH</h4>
              <h4>HELP</h4>
              <h4>LOG OUT</h4>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default SideNav;
