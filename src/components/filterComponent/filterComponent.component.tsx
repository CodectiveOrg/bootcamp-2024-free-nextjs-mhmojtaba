import { ReactElement } from "react";

import CheckBoxComponent from "@/components/checkBox/CheckBox.component";
import { filterItems } from "@/constants/constants";

import styles from "./filterComponent.module.css";

export default function FilterComponent(): ReactElement {
  return (
    <section className={styles["filter-container"]}>
      <div>
        <h2>فیلتر ها</h2>
        <div className={styles.divider}></div>
        <div className={styles["filter-options"]}>
          {filterItems.map((item, index) => (
            <div className={styles.option} key={index}>
              <CheckBoxComponent label={item.label} value={item.value} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
