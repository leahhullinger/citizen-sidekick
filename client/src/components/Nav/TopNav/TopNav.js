import React from "react";
import { Link } from "react-router-dom";
import {
  TopAppBar,
  TopAppBarRow,
  TopAppBarSection,
  TopAppBarTitle
} from "@rmwc/top-app-bar";

import "@material/top-app-bar/dist/mdc.top-app-bar.css";

const TopNav = () => {
  return (
    <TopAppBar
      style={{
        backgroundColor: "rgba(13, 13, 13, 0.8)",
        zIndex: 100
      }}
      fixed
    >
      <TopAppBarRow>
        <TopAppBarSection>
          <TopAppBarTitle
            style={{
              color: "#0455BF",
              fontSize: 16,
              fontWeight: 900,
              letterSpacing: "0.2rem",
              textTransform: "capitalize"
            }}
          >
            Citizen Sidekick
          </TopAppBarTitle>
        </TopAppBarSection>
      </TopAppBarRow>
    </TopAppBar>
  );
};
export default TopNav;
