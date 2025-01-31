import React, { ReactElement } from "react";
import Image from "next/image";

import CommentComponents from "@/app/doctors/[id]/comment/Comment.components";
import RateBoxComponent from "@/components/rateBoxComponent/RateBox.Component";

import { IMAGE_BASE_URL } from "@/constants/constants";

import {
  ActivityIcon,
  EditIcon,
  MedalIcon,
  SaveIcon,
  ShareIcon,
} from "@/icons/icons";
import userIcon from "@/assets/Images/users-vector-icon.jpg";

import { DoctorModel } from "@/types/types";
import CardWrapperComponent from "@/common/cardWrapper/CardWrapper.component";

import styles from "./doctorInfo.module.css";
import { getRegistrationDuration } from "@/utils/utils";

const DoctorInfoComponent = ({
  selectedDoctor,
}: {
  selectedDoctor: DoctorModel;
}): ReactElement => {
  const { months, years } = getRegistrationDuration(
    selectedDoctor.registerDate,
  );
  return (
    <div className={styles.doctorInfo}>
      <CardWrapperComponent title="">
        <ul className={styles.sharing}>
          <li>
            <SaveIcon />
            <span>ذخیره</span>
          </li>
          <li>
            <ShareIcon />
            <span>اشتراک گذاری</span>
          </li>
          <li>
            <EditIcon />
            <span>گزارش</span>
          </li>
        </ul>
        <div className={styles.imageContent}>
          <Image
            src={
              selectedDoctor.image
                ? `${IMAGE_BASE_URL}/${selectedDoctor.image}`
                : userIcon
            }
            alt={selectedDoctor.name}
            width={100}
            height={100}
            className={styles.image}
          />
          <div>
            <div className={styles.name}>{selectedDoctor.name}</div>
            <div className={styles.medicalNumber}>
              شماره نظام پزشکی {selectedDoctor.totalVotes}
            </div>
          </div>
        </div>
        <div className={styles["rate-degree"]}>
          <div className={styles.degree}>
            {`${selectedDoctor.degree} ${selectedDoctor.expertise}`}
          </div>
          <RateBoxComponent selectedDoctor={selectedDoctor} flexEnd={false} />
        </div>
      </CardWrapperComponent>
      <CardWrapperComponent title="درباره من">
        <div>
          <div>{selectedDoctor.brief}</div>
        </div>
      </CardWrapperComponent>
      <CardWrapperComponent title="فعالیت ها">
        <div className={styles.activityContent}>
          <div className={styles.activityCard}>
            <div className={styles.activityInfo}>
              <ActivityIcon />
              <div>10 مشاوره فعال</div>
            </div>
          </div>
          <div className={styles.activityCard}>
            <div className={styles.activityInfo}>
              <MedalIcon />
              <div>
                دکتر بوک بیش از {years > 0 && `${years} سال`}{" "}
                {years > 0 && months > 0 && " و "}
                {months > 0 && `${months} ماه`} افتخار میزبانی از صفحه اختصاصی{" "}
                <span className={styles.activityInfoName}>
                  {selectedDoctor.name}
                </span>{" "}
                را داشته است.
              </div>
            </div>
          </div>
        </div>
      </CardWrapperComponent>
      <CardWrapperComponent title={`نظرات درباره ${selectedDoctor.name}`}>
        <CommentComponents selectedDoctor={selectedDoctor} />
      </CardWrapperComponent>
    </div>
  );
};

export default DoctorInfoComponent;
