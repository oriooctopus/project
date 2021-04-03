import React from 'react';

import { ReviewFragment } from 'generated/graphql';
import ReviewCard from 'organisms/ReviewCard';
import Container from 'atoms/Container';
import styles from './index.module.scss';
import Masonry from 'atoms/Masonry';

type RestaurantReviewsProps = {
  reviews: ReviewFragment[];
  title?: string;
};

const RestaurantReviews = ({
  reviews,
  title,
}: RestaurantReviewsProps) => {
  return (
    <section>
      <Container>
        {title && <h4>{title}</h4>}
        <Masonry>
          {reviews?.map((review: ReviewFragment) => (
            <ReviewCard className={styles.review} {...review} />
          ))}
        </Masonry>
      </Container>
    </section>
  );
};

export default RestaurantReviews;
