"use client";
import { ReactElement } from "react";

import { CommentsProvider, useComment } from "@/providers/commentsProvider";
import { CommentModel, DoctorModel } from "@/types/types";

import SearchAndFilterCommentComponent from "@/components/searchAndFilterComment.component/SearchAndFilterComment.component";
import RateBoxComponent from "@/components/rateBoxComponent/RateBox.Component";
import CommentCardComponent from "@/components/comment-card/CommentCard.component";

import styles from "./comment.module.css";

const CommentComponents = ({
  selectedDoctor,
}: {
  selectedDoctor: DoctorModel;
}): ReactElement => {
  return (
    <CommentsProvider>
      <div>
        <RateBoxComponent selectedDoctor={selectedDoctor} flexEnd={false} />
        <SearchAndFilterCommentComponent />
        <CommentList selectedDoctor={selectedDoctor} />
      </div>
    </CommentsProvider>
  );
};

const CommentList = ({
  selectedDoctor,
}: {
  selectedDoctor: DoctorModel;
}): ReactElement => {
  const { filteredComments } = useComment();

  return (
    <div className={styles.commentsContent}>
      {filteredComments.map((comment) => (
        <CommentCardComponent
          key={comment.id}
          comment={comment}
          selectedDoctor={selectedDoctor}
        />
      ))}
    </div>
  );
};

export default CommentComponents;
