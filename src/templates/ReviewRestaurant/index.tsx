import React from 'react';
import Layout from 'atoms/Layout';
import { ReviewRestaurantQuery } from 'generated/graphql';
import Container from 'atoms/Container';
import CreateReviewBox from 'molecules/CreateReviewBox';
import styles from './index.module.scss';

type ReviewRestaurantProps = ReviewRestaurantQuery & {
  canSubmit: boolean;
  errorMessage: string;
  onSubmit: () => void;
  setRating: (number: number) => void;
  rating: number;
  setReviewContent: (string: string) => void;
  reviewContent: string;
};

const ReviewRestaurant = ({
  canSubmit,
  errorMessage,
  onSubmit,
  setRating,
  setReviewContent,
  rating,
  restaurant,
  reviewContent,
}: ReviewRestaurantProps) => {
  if (!restaurant) {
    return <span />;
  }

  const { title } = restaurant;

  return (
    <Layout>
      <Container className={styles.reviewRestaurant}>
        <h1>{title}</h1>
        <CreateReviewBox
          canSubmit={canSubmit}
          errorMessage={errorMessage}
          onSubmit={onSubmit}
          rating={rating}
          reviewContent={reviewContent}
          setRating={setRating}
          setReviewContent={setReviewContent}
        />
      </Container>
    </Layout>
  );
};

export default ReviewRestaurant;
