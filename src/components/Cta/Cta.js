import React from "react";
import styles from "./styles.module.scss";
import common from "../../styles/common.module.scss";
import clsx from "clsx";
import { NavbarLink } from "../Navbar/NavbarLink";
import tokens from "../../styles/tokens/tokens.json";
export const Cta = () => {
  return (
    <div className={clsx(common.section, styles.cta)}>
      <div className={clsx(common.content, styles.content)}>
        <h2>Ready for Stride?</h2>
        <div className={styles.ctaButtonWrapper}>
          <NavbarLink
            path={"https://bit.ly/stride22-registration"}
            color={tokens.color.base.yellow}
            hasIcon={true}
            hasNewTab={true}
          >
            Register Now
          </NavbarLink>
        </div>
      </div>
    </div>
  );
};
