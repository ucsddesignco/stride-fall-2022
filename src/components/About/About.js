import React from "react";
import styles from "./styles.module.scss";
import common from "../../styles/common.module.scss";
import clsx from "clsx";
export const About = () => {
  return (
    <div className={clsx(common.section, styles.about)}>
      <div className={clsx(common.content)}>
        <div className={common.title}>
          <h2>About Stride</h2>
          <div className={common.divider} />
        </div>
        <div className={styles.gridWrapper}>
          <p className={clsx(common.subtitle, styles.timeAndDate)}>
            November 8, 2022 / 10am–3pm PST / Online on Zoom
          </p>
          <p className={styles.overviewText}>
            Stride is a design-centric career fair creating a space for
            meaningful interactions between aspiring designers and industry
            professionals. Students are encouraged to showcase their work and
            experience, so while having a portfolio isn’t a requirement, we
            suggest that attendees create one to demonstrate design skills put
            into practice.
          </p>
        </div>
        <div className={common.title}>
          <h2>Opportunities at Stride</h2>
          <div className={common.divider} />
        </div>
        <div className={styles.gridWrapper}>
          <h3 className={clsx(common.subtitle, styles.timeAndDate)}>
            One-to-Ones
          </h3>
          <div className={styles.overviewText}>
            <p>
              Register for 10-minute one-to-one chats with company
              representatives in breakout rooms. This is a great opportunity for
              having meaningful conversations, receiving resume and portfolio
              feedback, and sharing your design experience. There is a mix of
              companies who are recruiting and companies who will be providing
              resume and portfolio feedback during the one-to-ones, so we’ll let
              you know which type you’re signing up for!
            </p>
          </div>
          <h3 className={clsx(common.subtitle, styles.timeAndDate)}>
            Company Info Sessions
          </h3>
          <p className={styles.overviewText}>
            Register for 20-minute company information sessions in breakout
            rooms. This is a valuable opportunity to learn more about a
            company’s mission and culture, relevant design roles, and more!
          </p>
        </div>
      </div>
    </div>
  );
};
