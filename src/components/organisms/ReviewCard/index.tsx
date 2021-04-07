import React from 'react';
import UserProfileCard from 'components/molecules/UserProfileCard';
import Button from 'components/atoms/Button';
import Rating from 'components/atoms/Rating';

import useDeleteReview from 'hooks/useDeleteReview';
import useDeleteReviewComment from 'hooks/useDeleteReviewComment';

import clsx from 'clsx';
import styles from './index.module.scss';

import { ReviewFragment } from 'generated/graphql';

type ReviewCardProps = ReviewFragment & {
  className?: string;
};

const ReviewCard = ({
  canAddComment,
  canModify: canModifyReview,
  className,
  content,
  date,
  id,
  rating,
  userProfile,
  reviewComment,
}: ReviewCardProps) => {
  /*
   * I'm not happy that these are in a view component. Ideally I can
   * put this in a container component. Will refactor if I have time
   */
  const onClickReviewDelete = useDeleteReview(id);
  const onClickReviewEdit = () => {
    window.location.href = `/review/edit/${id}`;
  };
  const onClickReviewCommentDelete = useDeleteReviewComment(
    reviewComment?.id || 0,
  );
  const onClickReviewCommentEdit = () => {
    window.location.href = `/review-comment/edit/${reviewComment?.id}`;
  };

  return (
    <div className={styles.reviewCard}>
      <div className={clsx(styles.review, className)}>
        <UserProfileCard {...userProfile} />
        <p>{content}</p>
        <Rating
          canEdit={false}
          name={`review of ${id} rating`}
          rating={rating}
        />
        <span>date: {date}</span>
        {canModifyReview && (
          <div className={styles.buttonContainer}>
            <Button theme="danger" onClick={onClickReviewDelete}>
              Delete
            </Button>
            <Button theme="primary" onClick={onClickReviewEdit}>
              Edit
            </Button>
          </div>
        )}
      </div>
      {canAddComment && (
        <Button
          theme="primary"
          onClick={() =>
            (window.location.href = `/review-comment/add/${id}`)
          }
        >
          Reply
        </Button>
      )}
      {reviewComment && (
        <div>
          <span className={styles.response}>
            <i>The owner responded:</i> <br /> {reviewComment.comment}
          </span>
          {reviewComment?.canModify && (
            <div className={styles.buttonContainer}>
              <Button
                theme="danger"
                onClick={onClickReviewCommentDelete}
              >
                Delete
              </Button>
              <Button
                theme="primary"
                onClick={onClickReviewCommentEdit}
              >
                Edit
              </Button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default ReviewCard;
