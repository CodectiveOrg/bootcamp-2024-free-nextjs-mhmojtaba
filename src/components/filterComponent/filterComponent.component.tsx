import { ReactElement } from "react";

import ExpertiseFilterComponent from "@/components/expertise-filter/expertise-filter.component";
import CheckBoxFilterComponent from "@/components/checkBoxFilterComponent/CheckBoxFilter.component";
import GenderFilterComponent from "@/components/gender-filter/gender-filter.component";
import DegreeFilterComponent from "@/components/degree-filter/degree-filter.component";
import FiltersCardComponent from "@/components/filters-card/filtersCard.component";

import styles from "./filterComponent.module.css";

export default function FilterComponent(): ReactElement {
  return (
    <section className={styles["filter-container"]}>
      <div>
        <h2>فیلتر ها</h2>
        <div className={styles.divider}></div>
        <div className={styles["filter-options"]}>
          <FiltersCardComponent />
          <ExpertiseFilterComponent />
          <DegreeFilterComponent />
          <GenderFilterComponent />
          <CheckBoxFilterComponent />
        </div>
      </div>
    </section>
  );
}
