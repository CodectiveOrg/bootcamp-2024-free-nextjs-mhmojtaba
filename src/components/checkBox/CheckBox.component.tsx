"use client";
import React from "react";
import { useFilters } from "@/providers/filters.provider";

import styles from "./checkbox.module.css";

type CheckBoxProps = {
  label: string;
  value: string;
};

function CheckBoxComponent({ label, value }: CheckBoxProps) {
  const { filters, dispatch } = useFilters();

  const onCheckHandler = (e: React.ChangeEvent<HTMLInputElement>, value: string) => {
    if (e.target.checked) {

      dispatch({
        type: "updated_filter", key: value == "خوش برخورد" ? "option1" : value == "کمترین معطلی" ? "option2" : "option3", value
      });
    } else {
      dispatch({ type: "removed_filter", key: value === "خوش برخورد" ? "option1" : value === "کمترین معطلی" ? "option2" : "option3" });
    }
  };

  return (
    <div className={styles.container}>
      <label htmlFor={value} className={styles.mainLabel}>
        {label}
      </label>
      <div className={styles["checkbox-wrapper"]}>
        <input
          className={`${styles["tgl"]} ${styles["tgl-flat"]}`}
          id={value}
          value={value}
          checked={filters.option1 == value || filters.option2 == value || filters.option3 == value}
          type="checkbox"
          onChange={(e) => onCheckHandler(e, value)}
        />
        <label className={styles["tgl-btn"]} htmlFor={value}></label>
      </div>
    </div>
  );
}

export default CheckBoxComponent;
