import { ReactElement } from "react";

import FilterComponent from "@/components/filterComponent/filterComponent.component";
import DoctorsComponent from "@/components/doctorsComponent/doctorsComponent.component";
import GlobalSearchBoxComponent from "@/components/global-search-box/globalSearchBoxComponent";

import styles from "./page.module.css";

export default function Page(): ReactElement {

  return (
    <div className={styles.search}>
      <GlobalSearchBoxComponent />
      <div className={styles.container}>
        <div className={styles.filters}>
          <FilterComponent />
        </div>
        <div className={styles.results}>
          <DoctorsComponent />
        </div>
      </div>
    </div>
  );
}
