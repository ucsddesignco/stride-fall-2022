import React from "react";

import styles from "./styles.module.scss";

import common from "../../styles/common.module.scss";
import close from "../../images/close.svg";
import clsx from "clsx";
import { useModal } from "./useModal";
useModal;
export const ModalContent = ({}) => {
  const { dispatch } = useModal();

  const handleClick = () => {
    dispatch({
      type: "hide",
    });
  };
  return (
    <>
      <div className={styles.titlebar}>
        <h3>Company Name</h3>
        <button onClick={handleClick} aria-label="Close ">
          <img src={close} width="100%" />
        </button>
      </div>
      <div className={styles.content}>
        <div>
          <div className={styles.subtitle}>
            <h4>About</h4>
            <div className={common.divider} />
          </div>
          <div className={styles.paragraphWrapper}>
            <p>About Paragraph</p>
          </div>
        </div>
        <div className={styles.details}>
          <div className={styles.subtitle}>
            <h4>Available For</h4>
            <div className={common.divider} />
          </div>
          <div
            className={clsx(styles.paragraphWrapper, styles.infoPillWrapper)}
          >
            <span className={styles.infoPill}>One-to-One</span>
            <span className={styles.infoPill}>Info Session</span>
            <span className={styles.infoPill}>Recruitment at Stride</span>
          </div>
          <div className={styles.subtitle}>
            <h4>Links</h4>
            <div className={common.divider} />
          </div>
          <div className={clsx(styles.paragraphWrapper, styles.linkWrapper)}>
            <a href="/">Link</a>
            <a href="/">Link</a>
          </div>
          <div className={styles.subtitle}>
            <h4>Roles</h4>
            <div className={common.divider} />
          </div>
          <div className={styles.paragraphWrapper}>
            <ul>
              <li>
                <p>UI Design/Research (Full Time)</p>
              </li>
              <li>
                <p>UX/UI (Internship)</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};
