import React from "react";
import { useModal } from "../Modal/useModal";
import styles from "./styles.module.scss";

export const CompanyThumbnail = ({ company }) => {
  const { dispatch } = useModal();
  return (
    <li>
      <button
        aria-label={company.name}
        onClick={() => {
          dispatch({
            type: "setCompany",
            name: company,
          });
          dispatch({
            type: "show",
          });
        }}
        className={styles.sponsor}
      >
        {company.name}
      </button>
    </li>
  );
};
