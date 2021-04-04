import React from 'react';
import Button from 'components/atoms/Button';
import Rating from 'components/atoms/Rating';
import styles from './index.module.scss';
import clsx from 'clsx';

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
      className={clsx(styles.SubmitReviewBox, 'row')}
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
        <Button disabled={!canSubmit} theme="success" type="submit">
          Submit Review
        </Button>
        {errorMessage && (
          <span className={styles.error}>{errorMessage}</span>
        )}
      </div>
    </form>
  );
};

export default SubmitReviewBox;
