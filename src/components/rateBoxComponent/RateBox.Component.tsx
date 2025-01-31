import React, { ReactElement } from "react";
import Image from "next/image";

import { DoctorModel } from "@/types/types";
import star from "@/assets/Images/starImage.svg";

import styles from "./RateBox.module.css";
import clsx from "clsx";

const RateBoxComponent = ({
  selectedDoctor,
  flexEnd = false,
}: {
  selectedDoctor: DoctorModel;
  flexEnd: boolean;
}): ReactElement => {
  return (
    <div className={clsx(styles.rating, flexEnd && styles.flexEnd)}>
      <div className={styles.ratingContent}>
        <Image src={star} alt="star" width={14} height={14} />
        <p className={styles.average}>
          {selectedDoctor.averageRating.toPrecision(2)}
        </p>
      </div>
      <p className={styles.totalVotes}>
        {`(${selectedDoctor.totalVotes} نظر)`}
      </p>
    </div>
  );
};

export default RateBoxComponent;
