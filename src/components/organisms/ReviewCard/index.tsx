import React from 'react';
import UserCard from 'components/molecules/UserCard';
import clsx from 'clsx';
import styles from './index.module.scss';

import { ReviewFragment } from 'generated/graphql';

type ReviewCardProps = ReviewFragment & {
  className?: string;
};

const ReviewCard = ({
  className,
  content,
  date,
  rating,
  userProfile,
  reviewComment,
}: ReviewCardProps) => (
  <div className={clsx(styles.reviewCard, className)}>
    <UserCard {...userProfile} />
    <p>{content}</p>
    rating: {rating}
    date: {date}
    {reviewComment && (
      <span className={styles.response}>
        <i>The owner responded:</i> <br /> {reviewComment.comment}
      </span>
    )}
  </div>
);

export default ReviewCard;
