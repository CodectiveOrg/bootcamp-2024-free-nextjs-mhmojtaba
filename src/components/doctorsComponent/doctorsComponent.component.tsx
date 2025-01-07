"use client";
import { ReactElement } from "react";
import clsx from "clsx";

import { useDoctor } from "@/providers/doctors.provider";
import usePagination from "@/hooks/pagination";
import DoctorCardComponent from "@/components/doctor-card/doctorCard.component";

import styles from "./doctorsComponent.module.css";

export default function DoctorsComponent(): ReactElement {
  const { isLoading, doctors } = useDoctor();
  const { currentItems, currentPage, totalPages, setPage } = usePagination({
    items: doctors,
    pageSize: 7,
  });
  if (isLoading) {
    return <div className={styles.loading}>loading...</div>;
  }

  if (doctors.length === 0) {
    return <div className={styles.empty}>هیچ پزشکی یافت نشد</div>;
  }

  return (
    <section className={styles["doctor-container"]}>
      {currentItems.map((doctor) => (
        <DoctorCardComponent key={doctor.id} doctor={doctor} />
      ))}
      <div className={styles.pagination}>
        {[...Array(totalPages)].map((_, i) => (
          <button
            key={i + 1}
            onClick={() => setPage(i + 1)}
            className={clsx(
              styles.paginationBtn,
              `${i + 1 === currentPage ? styles.active : ""}`,
            )}
          >
            {i + 1}
          </button>
        ))}
      </div>
    </section>
  );
}
