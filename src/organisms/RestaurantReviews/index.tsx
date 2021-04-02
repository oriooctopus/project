import React from 'react';

import { ReviewCardFragment } from 'generated/graphql';
import Review from 'organisms/ReviewCard';
import Container from 'atoms/Container';
import styles from './index.module.scss';
import clsx from 'clsx';

type RestaurantReviewsProps = {
  reviews: ReviewCardFragment[];
};

const RestaurantReviews = ({ reviews }: RestaurantReviewsProps) => {
  return (
    <section>
      <Container className={styles.restaurantReviews}>
        {reviews?.map((review: ReviewCardFragment) => (
          <Review className={clsx(styles.review)} {...review} />
        ))}
      </Container>
    </section>
  );
};

export default RestaurantReviews;
