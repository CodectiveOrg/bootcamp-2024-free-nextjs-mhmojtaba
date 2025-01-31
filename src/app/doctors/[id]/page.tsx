import { ReactElement } from "react";
import { notFound } from "next/navigation";

import { doctorData } from "@/mock/doctors";
import AppointmentComponent from "@/components/appointment/Appointment.component";
import DoctorInfoComponent from "@/components/doctorInfo/DoctorInfo.component";

import styles from "./page.module.css";

type Props = {
  params: { id: string };
};

export default function Page({ params }: Props): ReactElement {
  const { id } = params;

  const selectedDoctor = doctorData.find((dr) => dr.id === id);

  console.log(selectedDoctor);
  if (!selectedDoctor) return notFound();

  return (
    <main className={styles.content}>
      <DoctorInfoComponent selectedDoctor={selectedDoctor} />
      <AppointmentComponent selectedDoctor={selectedDoctor} />
    </main>
  );
}
