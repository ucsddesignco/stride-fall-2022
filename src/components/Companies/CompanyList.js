import React from "react";
import styles from "./styles.module.scss";
import { CompanyThumbnail } from "./CompanyThumbnail";
import clsx from "clsx";
import lissajous from "../../images/lissajous.svg";

export const CompanyList = ({ companies }) => {
  return (
    <div className={styles.sponsorsListWrapper}>
      <div className={clsx(styles.decoration, styles.left)}>
        <img src={lissajous} role="presentation" />
      </div>
      <ul className={styles.sponsorsList}>
        {companies.map((company) => (
          <CompanyThumbnail name={company.name} />
        ))}
      </ul>
      <div className={clsx(styles.decoration, styles.right)}>
        <img src={lissajous} role="presentation" />
      </div>
    </div>
  );
};
