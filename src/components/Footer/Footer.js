import React from "react";
import styles from "./styles.module.scss";
import common from "../../styles/common.module.scss";
import clsx from "clsx";
export const Footer = () => {
  return (
    <div className={common.section}>
      <div className={clsx(common.content, styles.content)}>
        <p>Made with ♥ by Design Co</p>
        <a href="mailto:designatucsd@gmail.com">hello@ucsddesign.co</a>
      </div>
    </div>
  );
};
