import React from "react";
import { useModal } from "../Modal/useModal";
import styles from "./styles.module.scss";

export const CompanyThumbnail = ({ name }) => {
  const { dispatch } = useModal();
  return (
    <li>
      <button
        aria-label={name}
        onClick={() => {
          dispatch({
            type: "setCompany",
            name: name,
          });
          dispatch({
            type: "show",
          });
        }}
        className={styles.sponsor}
      >
        {name}
      </button>
    </li>
  );
};
