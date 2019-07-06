import React from "react";
import { Link } from "react-router-dom";
import styles from "./TopNav.module.css";
import {
  TopAppBar,
  TopAppBarRow,
  TopAppBarSection,
  TopAppBarTitle
} from "@rmwc/top-app-bar";

import "@material/top-app-bar/dist/mdc.top-app-bar.css";

const TopNav = () => {
  return (
    <TopAppBar fixed>
      <TopAppBarRow>
        <TopAppBarSection>
          <TopAppBarTitle>Citizen Sidekick</TopAppBarTitle>
        </TopAppBarSection>
      </TopAppBarRow>
    </TopAppBar>
  );
};
export default TopNav;
