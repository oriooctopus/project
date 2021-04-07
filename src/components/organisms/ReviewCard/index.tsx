import React from 'react';
import { Link, useNavigate } from '@reach/router';
import UserProfileCard from 'components/molecules/UserProfileCard';
import Button from 'components/atoms/Button';
import Rating from 'components/atoms/Rating';

import useDeleteReview from 'hooks/useDeleteReview';
import useDeleteReviewComment from 'hooks/useDeleteReviewComment';

import clsx from 'clsx';
import styles from './index.module.scss';

import {
  ReviewFragment,
} from 'generated/graphql';

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
  restaurantId,
  userProfile,
  reviewComment,
}: ReviewCardProps) => {
  const navigate = useNavigate();
  const onClickReviewDelete = useDeleteReview(id, restaurantId);
  const onClickReviewCommentDelete = useDeleteReviewComment(
    reviewComment?.id || 0,
  );

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
            <Link to={`/review/edit/${id}`}>
              <span className="button primary">Edit</span>
            </Link>
          </div>
        )}
      </div>
      {canAddComment && (
        <Button
          theme="primary"
          onClick={() => navigate(`/review-comment/add/${id}`)}
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
              <Link to={`/review-comment/edit/${reviewComment?.id}`}>
                <span className="button primary">Edit</span>
              </Link>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default ReviewCard;
