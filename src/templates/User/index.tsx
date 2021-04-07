import React from 'react';
import Layout from 'components/atoms/Layout';
import Container from 'components/atoms/Container';
import SubmitReviewBox from 'components/organisms/SubmitReviewBox';
import styles from './index.module.scss';

type ReviewRestaurantProps = {
  canSubmit: boolean;
  errorMessage: string;
  onSubmit: () => void;
  setRating: (number: number) => void;
  setReviewContent: (string: string) => void;
  rating: number;
  reviewContent: string;
  title: string;
};

const ReviewRestaurant = ({
  canSubmit,
  errorMessage,
  onSubmit,
  setRating,
  setReviewContent,
  rating,
  reviewContent,
  title,
}: ReviewRestaurantProps) => (
  <Layout>
    <Container className={styles.reviewRestaurant}>
      <h1>{title}</h1>
      <SubmitReviewBox
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

export default ReviewRestaurant;
