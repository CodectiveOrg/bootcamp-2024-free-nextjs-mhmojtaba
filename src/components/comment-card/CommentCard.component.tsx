import React from "react";
import { CommentModel, DoctorModel } from "@/types/types";

import { ShareIcon, UsefulIcon } from "@/icons/icons";

import styles from "./commentCard.module.css";

const CommentCardComponent = ({
  comment,
  selectedDoctor,
}: {
  comment: CommentModel;
  selectedDoctor: DoctorModel;
}) => {
  return (
    <div className={styles.commentContent} key={comment.id}>
      <div className={styles.commentUser}>
        <div className={styles.commentUserInfo}>
          <div className={styles.commentUserLogo}>
            {comment.author.slice(0, 1)}
          </div>
          <div className={styles.commentUserNameBadge}>
            <div className={styles.commentUserName}>
              {comment.author}{" "}
              <span>{comment.isVisited ? "ویزیت شده" : "ویزیت نشده"}</span>
            </div>
            <div className={styles.commentUserVisitInfo}>
              <span>{comment.lastVisit}</span> |{" "}
              <span>
                {comment.onlineVisit
                  ? "ویزیت آنلاین"
                  : `مطب دکتر ${selectedDoctor.name}`}
              </span>
            </div>
          </div>
        </div>
        <div className={styles.commentUserRate}>{comment.rate}</div>
      </div>
      <div className={styles.message}>{comment.message}</div>
      <div className={styles.commentRate}>
        <div className={styles.shareComment}>
          <UsefulIcon />
          چقدر مفید بود؟
        </div>
        <div className={styles.shareComment}>
          <ShareIcon />
          ارسال کن
        </div>
      </div>
    </div>
  );
};

export default CommentCardComponent;
