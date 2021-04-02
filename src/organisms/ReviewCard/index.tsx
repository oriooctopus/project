import React from 'react';
import UserCard from 'molecules/UserCard';
import clsx from 'clsx';
import styles from './index.module.scss';

import { ReviewCardFragment } from 'generated/graphql';

type ReviewCardProps = ReviewCardFragment & {
  className?: string;
};

const ReviewCard = ({
  className,
  content,
  date,
  rating,
  userProfile,
}: ReviewCardProps) => (
  <div className={clsx(styles.reviewCard, className)}>
    <UserCard {...userProfile} />
    <p>{content}</p>
    rating: {rating}
    date: {date}
  </div>
);

export default ReviewCard;
