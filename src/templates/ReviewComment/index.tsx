import React from 'react';
import Layout from 'components/atoms/Layout';
import Container from 'components/atoms/Container';
import Textarea from 'components/atoms/Inputs/Textarea';
import SubmitBox from 'components/molecules/SubmitBox';
import Rating from 'components/atoms/Rating';

import styles from './index.module.scss';

type ReviewCommentProps = {
  canSubmit: boolean;
  comment: string;
  errorMessage: string;
  onSubmit: () => void;
  rating: number;
  reviewContent: string;
  setComment: (comment: string) => void;
};

const ReviewComment = ({
  canSubmit,
  comment,
  errorMessage,
  onSubmit,
  rating,
  reviewContent,
  setComment,
}: ReviewCommentProps) => {
  return (
    <Layout>
      <Container className={styles.root}>
        <div className={styles.previousReview}>
          <h4>Previous Review</h4>
          <Rating
            className={styles.rating}
            rating={rating}
            name="review"
          />
          <p>{reviewContent}</p>
        </div>

        <h4>Review Comment</h4>
        <SubmitBox
          canSubmit={canSubmit}
          errorMessage={errorMessage}
          onSubmit={onSubmit}
        >
          <Textarea
            handleChange={setComment}
            name="comment"
            placeholder="Comment Here"
            value={comment}
          />
        </SubmitBox>
      </Container>
    </Layout>
  );
};

export default ReviewComment;
