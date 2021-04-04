import React from 'react';
import UserCard from 'components/molecules/UserCard';
import Button from 'components/atoms/Button';
import clsx from 'clsx';
import styles from './index.module.scss';
import useDeleteReview from 'hooks/useDeleteReview';
import useDeleteReviewComment from 'hooks/useDeleteReviewComment';

import { ReviewFragment } from 'generated/graphql';

type ReviewCardProps = ReviewFragment & {
  className?: string;
  includeDelete: boolean;
  includeEdit: boolean;
};

const ReviewCard = ({
  className,
  content,
  date,
  id,
  includeDelete,
  includeEdit,
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
    window.location.href = `/reviewComment/edit/${reviewComment?.id}`;
  };

  return (
    <div className={styles.reviewCard}>
      <div className={clsx(styles.review, className)}>
        <UserCard {...userProfile} />
        <p>{content}</p>
        rating: {rating}
        date: {date}
        {(includeDelete || includeEdit) && (
          <div className={styles.buttonContainer}>
            {includeDelete && (
              <Button theme="danger" onClick={onClickReviewDelete}>
                Delete
              </Button>
            )}
            {includeEdit && (
              <Button theme="primary" onClick={onClickReviewEdit}>
                Edit
              </Button>
            )}
          </div>
        )}
      </div>
      {reviewComment && (
        <div>
          <span className={styles.response}>
            <i>The owner responded:</i> <br /> {reviewComment.comment}
          </span>
          {(includeDelete || includeEdit) && (
            <div className={styles.buttonContainer}>
              {includeDelete && (
                <Button
                  theme="danger"
                  onClick={onClickReviewCommentDelete}
                >
                  Delete
                </Button>
              )}
              {includeEdit && (
                <Button
                  theme="primary"
                  onClick={onClickReviewCommentEdit}
                >
                  Edit
                </Button>
              )}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default ReviewCard;
