import React, { Component } from "react";
import styles from "./SideNav.module.css";
import { Route, Link } from "react-router-dom";
import { Icon } from "mx-react-components";
import { GET_FOLDERS_COMPLETE } from "../../../ducks/constants";

import {
  Drawer,
  DrawerHeader,
  DrawerTitle,
  DrawerContent
} from "../../../ui/Drawer";
import { Text } from "../../../ui/Text";
import {
  List,
  CollapsibleList,
  ListItem,
  SimpleListItem
} from "../../../ui/List";
import { Fab } from "../../../ui/Fab";
import { Button } from "../../../ui/Button";

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
      <Drawer>
        <DrawerHeader>
          <DrawerTitle>Citizen Sidekick</DrawerTitle>
        </DrawerHeader>
        <DrawerContent>
          <Fab
            icon="add"
            label="New"
            style={{
              backgroundColor: "white",
              color: "black",
              fontWeight: 700,
              marginTop: 25,
              marginBottom: 20
            }}
          />
          <CollapsibleList
            handle={
              <SimpleListItem
                text="My Dashboard"
                graphic="dashboard"
                metaIcon="chevron_right"
              />
            }
          />
          <CollapsibleList
            handle={
              <SimpleListItem
                text="Folders"
                graphic="folder"
                metaIcon="chevron_right"
              />
            }
          >
            {!!folders &&
              folders.map(folder => {
                return (
                  <SimpleListItem graphic="folder">
                    <Link
                      key={folder.id}
                      className={styles.link}
                      to={`${match.url}/folder/${folder.id}`}
                    >
                      {folder.folder_name}
                    </Link>
                  </SimpleListItem>
                );
              })}
          </CollapsibleList>
          <List>
            <ListItem>
              Upload
              <Link to={`${match.url}/upload`} />
            </ListItem>
          </List>
        </DrawerContent>
      </Drawer>
      // <div
      //   className={[styles.sideNav, isOpen ? styles.isOpen : null].join(" ")}
      // >
      //         <Link
      //           className={styles.sideNavLink}
      //           to={`${match.url}/new/folder`}
      //         >
      //           <h3>+ FOLDER</h3>
      //         </Link>
    );
  }
}

export default SideNav;
