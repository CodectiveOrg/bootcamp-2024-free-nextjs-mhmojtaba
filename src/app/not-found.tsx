import { ReactElement } from "react";

import Image from "next/image";
import GlobalSearchBoxComponent from "@/components/global-search-box/globalSearchBoxComponent";

import notFoundImage from "@/assets/Images/notFoundImage.svg";

import styles from "./not-found.module.css";

export default function NotFound(): ReactElement {
  return (
    <div className={styles.notFound}>
      <div className={styles.image}>
        <Image src={notFoundImage} alt="" layout="responsive" />
      </div>
      <div className={styles.writing}>
        <h1>صفحه مورد نظر یافت نشد!</h1>
        <p>لطفاً صفحه مورد نظر را چک کنید یا از جستجو استفاده کنید.</p>
      </div>
      <div className={styles.search}>
        <GlobalSearchBoxComponent />
      </div>
    </div>
  );
}
