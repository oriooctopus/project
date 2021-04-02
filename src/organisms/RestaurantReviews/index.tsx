import React from 'react';

import { ReviewCardFragment } from 'generated/graphql';
import Review from 'organisms/ReviewCard';
import Container from 'atoms/Container';
import styles from './index.module.scss';
import Masonry from 'atoms/Masonry';

type RestaurantReviewsProps = {
  reviews: ReviewCardFragment[];
};

const RestaurantReviews = ({ reviews }: RestaurantReviewsProps) => {
  return (
    <section>
      <Container>
        <Masonry>
          {reviews?.map((review: ReviewCardFragment) => (
            <Review className={styles.review} {...review} />
          ))}
        </Masonry>
      </Container>
    </section>
  );
};

export default RestaurantReviews;
