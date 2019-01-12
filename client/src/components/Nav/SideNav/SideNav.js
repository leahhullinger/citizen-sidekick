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
            <h2 className={styles.logo}>Citizen Sidekick</h2>
            <div className={styles.section}>
              <h3>Tools</h3>
              <a href="#Upload">Transcribe</a>
              <a>Search & Rescue</a>
              <a>Code Backup</a>
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
              <Link className={styles.sideNavLink} to={`${match.url}/upload`}>
                <h3>+ UPLOAD</h3>
              </Link>
              <Link
                className={styles.sideNavLink}
                to={`${match.url}/new/folder`}
              >
                <h3>+ FOLDER</h3>
              </Link>
            </div>

            {/* <div className={styles.footer}>
              <h4>SEARCH</h4>
              <h4>HELP</h4>
              <button className={styles.logoutBtn}>
                <h4>LOG OUT</h4>
              </button>
            </div> */}
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default SideNav;
