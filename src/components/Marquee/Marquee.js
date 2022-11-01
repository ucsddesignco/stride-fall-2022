import React from "react";
import styles from "./styles.module.scss";

const content =
  "User Research / Product Design / Content Strategy / Brand Design / UX Engineering / Web Development / User Experience  / User Research / Product Design / Content Strategy / Brand Design / UX Engineering / Web Development / User Experience /";

export const Marquee = () => {
  return (
    <div className={styles.marquee} aria-hidden="true">
      <span className={styles.marqueeContent}>
        {content} {content}
      </span>
    </div>
  );
};
