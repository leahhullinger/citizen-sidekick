import React from "react";
import { Button } from "@rmwc/button";
import "@material/button/dist/mdc.button.css";
import styles from "./PrimaryBtn.module.css";

export const PrimaryBtn = ({ btnText, onClick, children, icon }) => (
  <Button
    className={styles.primaryBtn}
    label={btnText}
    icon={icon}
    onClick={onClick}
    raised
    theme={["secondaryBg", "onSecondary"]}
  >
    {children}
  </Button>
);
