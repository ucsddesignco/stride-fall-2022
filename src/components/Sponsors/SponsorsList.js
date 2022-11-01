import React from "react";
import styles from "./styles.module.scss";
import { Sponsor } from "./Sponsor";
import clsx from "clsx";
import lissajous from "../../images/lissajous.svg";

export const SponsorsList = ({ companies }) => {
  return (
    <div className={styles.sponsorsListWrapper}>
      <div className={clsx(styles.decoration, styles.left)}>
        <img src={lissajous} role="presentation" />
      </div>
      <ul className={styles.sponsorsList}>
        {companies.map((company) => (
          <Sponsor name={company.name} />
        ))}
      </ul>
      <div className={clsx(styles.decoration, styles.right)}>
        <img src={lissajous} role="presentation" />
      </div>
    </div>
  );
};
