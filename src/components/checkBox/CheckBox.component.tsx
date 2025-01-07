"use client";
import React from "react";

type CheckBoxProps = {
  label: string;
  value: string;
};

import styles from "./checkbox.module.css";
import { useDoctor } from "@/providers/doctors.provider";
function CheckBoxComponent({ label, value }: CheckBoxProps) {
  const { filterDoctors } = useDoctor();

  const onCheckHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.checked) {
      filterDoctors({ keys: "badges", value: e.target.value });
    } else {
      filterDoctors({ keys: "badges", value: "" });
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
          type="checkbox"
          onChange={(e) => onCheckHandler(e)}
        />
        <label className={styles["tgl-btn"]} htmlFor={value}></label>
      </div>
    </div>
  );
}

export default CheckBoxComponent;
