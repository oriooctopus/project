import React, { useState } from 'react';
import SubmitButton from 'atoms/Buttons/Submit';
import Rating from 'atoms/Rating';
import styles from './index.module.scss';
import clsx from 'clsx';

type CreateReviewBoxProps = {
  canSubmit: boolean;
  errorMessage: string;
  onSubmit: () => void;
  setRating: (number: number) => void;
  setReviewContent: (string: string) => void;
  rating: number;
  reviewContent: string;
};

const CreateReviewBox = ({
  canSubmit,
  errorMessage,
  onSubmit,
  setRating,
  setReviewContent,
  rating,
  reviewContent,
}: CreateReviewBoxProps) => {
  const onChangeReviewContent = (
    e: React.FormEvent<HTMLTextAreaElement>,
  ) => {
    const { value } = e.target as HTMLTextAreaElement;

    setReviewContent(value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit();
  };

  return (
    <form
      className={clsx(styles.createReviewBox, 'row')}
      onSubmit={handleSubmit}
    >
      <div className="col-md-8">
        <Rating
          className={styles.rating}
          rating={rating}
          name="create-review"
          setRating={setRating}
        />
        <textarea
          onChange={onChangeReviewContent}
          value={reviewContent}
        />
        <div className={styles.submitContainer}></div>
        <SubmitButton disabled={!canSubmit}>Post Review</SubmitButton>
        {errorMessage && (
          <span className={styles.error}>{errorMessage}</span>
        )}
      </div>
    </form>
  );
};

export default CreateReviewBox;
