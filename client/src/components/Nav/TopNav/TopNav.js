import React, { Component } from "react";
import { Link } from "react-router-dom";
import styles from "./TopNav.module.css";
import { Icon, Menu } from "mx-react-components";

class TopNav extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showItems: false
    };
  }

  handleClick = () => {
    this.setState({
      showItems: !this.state.showItems
    });
  };

  render() {
    return (
      <div className={styles.topNav}>
        <h1>citizen sidekick </h1>
        <Menu
          alignItems="right"
          isOpen={this.state.showItems}
          items={[
            { icon: "import", label: "upload", onClick: () => {} },
            { icon: "Icon2", label: "Item2", onClick: () => {} }
          ]}
          onClick={this.handleClick}
        />
      </div>
    );
  }
}

export default TopNav;
