import React, { Component } from 'react';
import {
  Drawer,
  DrawerHeader,
  DrawerContent,
  DrawerTitle
} from '../../../ui/Drawer';
import { Text } from '../../../ui/Text';
import { SimpleDialog } from '../../../ui/Dialog';
import { TextField } from '../../../ui/TextFields';
import {
  List,
  ListGroup,
  ListGroupSubheader,
  SimpleListItem,
  CollapsibleList
} from '../../../ui/List';

import styles from './SideNav.module.css';
import { Link } from 'react-router-dom';
import { Icon } from 'mx-react-components';

const navContent = {
  tools: [
    { title: 'Transcribe', linkTo: '/transcribe' },
    { title: 'Search & Rescue', linkTo: '/search-rescue' },
    { title: 'Code Backup', linkTo: '/code-backup' }
  ],
  navItems: [
    { title: 'Add Folder', linkTo: null },
    { title: 'Upload File', linkTo: 'upload' }
  ]
};

class SideNav extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isDialogOpen: false,
      folderName: ''
    };
  }

  componentDidMount() {
    if (window.innerWidth < 768) {
      this.setState({ isOpen: false });
    }
  }
  handleOnClose = () => {
    this.setState({ isDialogOpen: false, folderName: '' });
  };

  render() {
    const { isDialogOpen } = this.state;
    const { match, onAddFolderClick } = this.props;
    return (
      <Drawer>
        <DrawerHeader>
          <DrawerTitle className={styles.navTitle}>
            <Text use="headline3" className={styles.logo}>
              Citizen Sidekick
            </Text>
          </DrawerTitle>
        </DrawerHeader>
        <DrawerContent className={styles.sideNav}>
          <List className={styles.toolsList}>
            <ListGroup>
              <ListGroupSubheader>
                <Text use="subtitle1" className={styles.listHead}>
                  Tools
                </Text>
              </ListGroupSubheader>
              {navContent.tools.map(tool => (
                <SimpleListItem
                  key={tool.title}
                  tag={Link}
                  to={tool.linkTo}
                  className={styles.link}
                  text={tool.title}
                />
              ))}
            </ListGroup>
          </List>
          <CollapsibleList
            handle={
              <SimpleListItem
                text="add"
                graphic="add"
                className={styles.subNav}
              />
            }
          >
            {navContent.navItems.map(tool => (
              <SimpleListItem
                key={tool.title}
                tag={tool.linkTo && Link}
                to={tool.linkTo && `${match.url}/${tool.linkTo}`}
                onClick={() =>
                  !tool.linkTo && this.setState({ isDialogOpen: true })
                }
                className={styles.link}
                text={tool.title}
              />
            ))}
          </CollapsibleList>
        </DrawerContent>
        <SimpleDialog
          open={isDialogOpen}
          onClose={() => this.handleOnClose()}
          title="+ Add folder"
          body={
            <TextField
              label="Folder name"
              value={this.state.folderName}
              onChange={evt => this.setState({ folderName: evt.target.value })}
            />
          }
        />
      </Drawer>
    );
  }
}

export default SideNav;
