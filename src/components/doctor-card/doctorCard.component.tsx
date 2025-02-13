import { ReactElement } from "react";
import Link from "next/link";
import Image from "next/image";

import { DoctorModel } from "@/types/types";
import { IMAGE_BASE_URL } from "@/constants/constants";

import { MingcuteLocation2Line } from "@/icons/icons";

import RateBoxComponent from "../rateBoxComponent/RateBox.Component";

import clsx from "clsx";
import styles from "./doctorCard.module.css";

interface DoctorCardProps {
  doctor: DoctorModel;
}

export default function DoctorCardComponent({
  doctor,
}: DoctorCardProps): ReactElement {
  const { id, name, image, brief, address, badges, firstAvailableAppointment } =
    doctor;

  function checkAvailability(): boolean {
    const searchString = "فعال شدن نوبت‌دهی";
    return badges.some((item) => item.includes(searchString));
  }

  return (
    <section className={styles.card}>
      <div className={styles.topSection}>
        <div className={styles.cardInfo}>
          <Link href={`/doctors/${id!}`}>
            <Image
              className={styles.userImage}
              src={image ? `${IMAGE_BASE_URL}/${image}` : ""}
              alt={name}
              width={80}
              height={80}
            />
          </Link>
          <div className={styles.userInfo}>
            <div>
              <Link href={`/doctors/${id!}`}>
                <div className={styles.username}>{name}</div>
              </Link>
              <Link href={`/doctors/${id!}`}>
                <p className={styles.brief}>
                  {brief.length > 50
                    ? `${brief.slice(0, 50)} ..........`
                    : brief}
                </p>
              </Link>
            </div>
            <div>
              <Link href={`/doctors/${id!}`}>
                <RateBoxComponent selectedDoctor={doctor} flexEnd={true} />
              </Link>
              <div className={styles.badges}>
                {badges.map((badge, index) => (
                  <p key={index}>{badge}</p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.address}>
        <MingcuteLocation2Line width={25} height={25} />
        {address}
      </div>

      <div className={styles.appointment}>
        اولین نوبت : <span>{firstAvailableAppointment}</span>
      </div>
      <Link
        href={`/doctors/${id!}`}
        className={clsx(
          styles.bookButton,
          checkAvailability() && styles.disabled,
        )}
      >
        گرفتن نوبت
      </Link>
    </section>
  );
}
