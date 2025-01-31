import React from "react";

import { EitaIcon, MingcuteLocation2Line, OnlineBookIcon } from "@/icons/icons";
import { DoctorModel } from "@/types/types";

import ButtonComponent from "@/common/button/Button.component";

import styles from "./appointment.module.css";
import CardWrapperComponent from "@/common/cardWrapper/CardWrapper.component";

const AppointmentComponent = ({
  selectedDoctor,
}: {
  selectedDoctor: DoctorModel;
}) => {
  return (
    <div className={styles.appointment}>
      <div className={styles.appointmentBook}>
        <CardWrapperComponent title="">
          <div className={styles.onlineBook}>
            <div className={styles.onlineBookTitle}>
              <OnlineBookIcon />
              <div className={styles.onlineBookTitleText}>نوبت دهی آنلاین</div>
            </div>
          </div>
          <div className={styles.onlineBookDetail}>
            <div className={styles.social}>
              <div className={styles.socialTitle}>
                ویزیت آنلاین در پیام رسان
              </div>
              <div className={styles.socialContent}>
                <div className={styles.socialContentItem}>
                  <EitaIcon />
                  ایتا
                </div>
              </div>
            </div>
            <div className={styles.onlineBookDescription}>
              تضمین بازپرداخت مبلغ ویزیت در صورت نارضایتی
            </div>
            <div className={styles.onlineBookDescription}>
              امکان برقراری تماس با این پزشک وجود دارد.
            </div>
            <div className={styles.onlineBookDescription}>
              اولین نوبت آزاد: {selectedDoctor.firstAvailableAppointment}
            </div>
            <ButtonComponent>درخواست نوبت آنلاین</ButtonComponent>
          </div>
        </CardWrapperComponent>
      </div>
      <CardWrapperComponent title="آدرس :">
        <div className={styles.addressDescription}>
          <div className={styles.addressTitle}>
            مطب دکتر {selectedDoctor.name} :
          </div>
          <div className={styles.addressText}>{selectedDoctor.address}</div>
          <ButtonComponent>
            <MingcuteLocation2Line />
            نمایش موقعیت روی نقشه
          </ButtonComponent>
        </div>
      </CardWrapperComponent>
    </div>
  );
};

export default AppointmentComponent;
