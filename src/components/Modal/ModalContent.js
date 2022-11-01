import React from "react";

import styles from "./styles.module.scss";

import common from "../../styles/common.module.scss";
import close from "../../images/close.svg";
import clsx from "clsx";
import { useModal } from "./useModal";
useModal;
export const ModalContent = ({ company }) => {
  const { dispatch } = useModal();

  const handleClick = () => {
    dispatch({
      type: "hide",
    });
  };

  return (
    <>
      <div className={styles.titlebar}>
        <h3>{company.name}</h3>
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
            <p>{company.about}</p>
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
            {company.hasOneToOne && (
              <span className={styles.infoPill}>One-to-One</span>
            )}
            {company.hasInfoSession && (
              <span className={styles.infoPill}>Info Session</span>
            )}
            {company.isRecruiting && (
              <span className={styles.infoPill}>Recruitment at Stride</span>
            )}
          </div>
          <div className={styles.subtitle}>
            <h4>Links</h4>
            <div className={common.divider} />
          </div>
          <div className={clsx(styles.paragraphWrapper, styles.linkWrapper)}>
            {company.links.map((link) => (
              <a href={link.url}>{link.text}</a>
            ))}
          </div>
          <div className={styles.subtitle}>
            <h4>Roles</h4>
            <div className={common.divider} />
          </div>
          <div className={styles.paragraphWrapper}>
            <ul>
              {company.roles.map((role) => (
                <li>
                  <p>{role}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};
