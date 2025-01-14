import { ReactElement } from "react";
import Link from "next/link";
import Image from "next/image";

import { DoctorModel } from "@/types/types";
import { IMAGE_BASE_URL } from "@/constants/constants";

import star from "@/assets/Images/starImage.svg";
import MingcuteLocation2Line from "@/icons/MingcuteLocation2Line";

import styles from "./doctorCard.module.css";

interface DoctorCardProps {
  doctor: DoctorModel;
}

export default function DoctorCardComponent({
  doctor,
}: DoctorCardProps): ReactElement {
  const {
    id,
    name,
    image,
    brief,
    address,
    averageRating,
    totalVotes,
    badges,
    firstAvailableAppointment,
  } = doctor;

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
              width={100}
              height={100}
            />
          </Link>
          <div className={styles.userInfo}>
            <div>
              <Link href={`/doctors/${id!}`}>
                <h4>{name}</h4>
              </Link>
              <Link href={`/doctors/${id!}`}>
                <p>{brief}</p>
              </Link>
            </div>
            <div>
              <Link href={`/doctors/${id!}`}>
                <div className={styles.rating}>
                  <Image src={star} alt="star" width={14} height={14} />
                  <p className={styles.average}>{averageRating.toPrecision(2)}</p>
                  <p className={styles.totalVotes}>{`(نظر ${totalVotes} )`}</p>
                </div>
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
      <button className={styles.btn} disabled={checkAvailability()}>
        گرفتن نوبت
      </button>
    </section>
  );
}
