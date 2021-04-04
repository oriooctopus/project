import React from 'react';
import Rating from 'components/atoms/Rating';
import styles from './index.module.scss';
import Textarea from 'components/atoms/Inputs/Textarea';
import SubmitBox from 'components/molecules/SubmitBox';

type SubmitReviewBoxProps = {
  canSubmit: boolean;
  errorMessage: string;
  onSubmit: () => void;
  setRating: (number: number) => void;
  setReviewContent: (string: string) => void;
  rating: number;
  reviewContent: string;
};

const SubmitReviewBox = ({
  canSubmit,
  errorMessage,
  onSubmit,
  setRating,
  setReviewContent,
  rating,
  reviewContent,
}: SubmitReviewBoxProps) => {
  return (
    <SubmitBox
      canSubmit={canSubmit}
      className={styles.root}
      errorMessage={errorMessage}
      onSubmit={onSubmit}
    >
      <Rating
        className={styles.rating}
        rating={rating}
        name="create-review"
        setRating={setRating}
      />
      <Textarea
        handleChange={setReviewContent}
        placeholder="Review Content"
        name="review_content"
        value={reviewContent}
      />
    </SubmitBox>
  );
};

export default SubmitReviewBox;
