import React from "react";
import { Link } from "react-router-dom";
import styles from "./styles.module.scss";
import arrow from "../../images/arrow.svg";

export const NavbarLink = ({ path, children, color, hasIcon, onClick }) => {
  return (
    <Link
      style={{ backgroundColor: color }}
      className={styles.navbarLink}
      to={path}
      onClick={onClick}
    >
      {children}
      {hasIcon && <img src={arrow} widtht={24} height={24} />}
    </Link>
  );
};
