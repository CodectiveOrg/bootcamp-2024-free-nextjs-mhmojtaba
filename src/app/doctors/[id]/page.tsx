import { ReactElement } from "react";
import Image from "next/image";
import { notFound } from "next/navigation";
import { doctorData } from "@/mock/doctors";
import star from "@/assets/Images/starImage.svg";
import { IMAGE_BASE_URL } from "@/constants/constants";
import CommentComponents from "./comment/Comment.components";
import styles from "./page.module.css";
import { ActivityIcon, EditIcon, MedalIcon, SaveIcon, ShareIcon } from "@/icons/icons";
import AppointmentComponent from "@/components/appointment/Appointment.component";

type Props = {
  params: { id: string };
};

export default function Page({ params }: Props): ReactElement {
  const { id } = params;

  const selectedDoctor = doctorData.find((dr) => dr.id === id);

  console.log(selectedDoctor);
  if (!selectedDoctor) return notFound();

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <main className={styles.content}>
          <div className={styles.doctorInfo}>
            <section className={styles.info}>
              <div className={styles.sharing}>
                <div className={styles.save}>
                  <SaveIcon />
                  <span>ذخیره</span>
                </div>
                <div className={styles.save}>
                  <ShareIcon />
                  <span>اشتراک گذاری</span>
                </div>
                <div className={styles.save}>
                  <EditIcon />
                  <span>گزارش</span>
                </div>
              </div>
              <div className={styles.imageContent}>
                <Image
                  src={
                    selectedDoctor.image
                      ? `${IMAGE_BASE_URL}/${selectedDoctor.image}`
                      : ""
                  }
                  alt={selectedDoctor.name}
                  width={100}
                  height={100}
                  className={styles.image}
                />
                <div>
                  <div className={styles.name}>{selectedDoctor.name}</div>
                  <div className={styles.nezam}>
                    شماره نظام پزشکی {selectedDoctor.totalVotes}
                  </div>
                </div>
              </div>
              <div className={styles.rate}>
                <div
                  className={styles.degree}
                >{`${selectedDoctor.degree} ${selectedDoctor.expertise}`}</div>
                <div className={styles.rating}>
                  <div className={styles.ratingContent}>
                    <Image src={star} alt="star" width={14} height={14} />
                    <p className={styles.average}>
                      {selectedDoctor.averageRating.toPrecision(2)}
                    </p>
                  </div>
                  <p
                    className={styles.totalVotes}
                  >{`( ${selectedDoctor.totalVotes} نظر)`}</p>
                </div>
              </div>
            </section>
            <section className={styles.description}>
              <h3>درباره من</h3>
              <div className={styles.descriptionContent}>
                <div>{selectedDoctor.brief}</div>
                <div>{selectedDoctor.brief}</div>
                <div>{selectedDoctor.brief}</div>
              </div>
            </section>
            <section className={styles.activity}>
              <h3>فعالیت ها</h3>
              <div className={styles.activityContent}>
                <div className={styles.activity_card}>
                  <div className={styles.activity_info}>
                    <ActivityIcon />
                    <div>10 مشاوره فعال</div>
                  </div>
                </div>
                <div className={styles.activity_card}>
                  <div className={styles.activity_info}>
                    <MedalIcon />
                    <div>
                      دکتر بوک بیش از 2 سال و 4 ماه افتخار میزبانی از صفحه
                      اختصاصی{" "}
                      <span className={styles.activity_info_name}>
                        {selectedDoctor.name}
                      </span>{" "}
                      را داشته است.
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section className={styles.reviews}>
              <h3>نظرات درباره {selectedDoctor.name}</h3>
              <CommentComponents selectedDoctor={selectedDoctor} />
            </section>
          </div>
          <AppointmentComponent selectedDoctor={selectedDoctor} />
        </main>
      </div>
    </div>
  );
}
