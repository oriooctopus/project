import React from 'react';

import { ReviewFragment } from 'generated/graphql';
import ReviewCard from 'components/organisms/ReviewCard';
import Container from 'components/atoms/Container';
import styles from './index.module.scss';
import Masonry from 'components/atoms/Masonry';

type RestaurantReviewsProps = {
  includeDelete: boolean;
  includeEdit: boolean;
  reviews: ReviewFragment[];
  title?: string;
};

const RestaurantReviews = ({
  includeDelete,
  includeEdit,
  reviews,
  title,
}: RestaurantReviewsProps) => {
  return (
    <section>
      <Container>
        {title && <h4>{title}</h4>}
        <Masonry>
          {reviews?.map((review: ReviewFragment) => (
            <ReviewCard
              className={styles.review}
              includeDelete={includeDelete}
              includeEdit={includeEdit}
              {...review}
            />
          ))}
        </Masonry>
      </Container>
    </section>
  );
};

export default RestaurantReviews;
