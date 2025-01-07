"use client";
import { ReactElement } from "react";

import { useDoctor } from "@/providers/doctors.provider";

import DoctorCardComponent from "../doctor-card/doctorCard.component";

import styles from "./doctorsComponent.module.css";
export default function DoctorsComponent(): ReactElement {
  const { isLoading, doctors } = useDoctor();

  if (isLoading) { return <div className={styles.loading}>loading...</div> }

  if (doctors.length === 0) { return <div className={styles.empty}>هیچ پزشکی یافت نشد</div> }

  return (

    <section className={styles["doctor-container"]} >
      {doctors.map(doctor => <DoctorCardComponent key={doctor.id} doctor={doctor} />)}
    </section >
  );
}
