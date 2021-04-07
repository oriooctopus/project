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
}: ReviewCommentProps) => (
  <Layout>
    <Container className={styles.root}>
      <h1 className="h4">Leave a response here</h1>
      <div className="row">
        <div className="col-md-8">
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
        </div>
        <div className="col-md-4">
          <span className="large-body d-block">
            You are responding to:
          </span>
          <Rating
            canEdit={false}
            className={styles.rating}
            rating={rating}
            name="review"
          />
          <p>{reviewContent}</p>
        </div>
      </div>
    </Container>
  </Layout>
);

export default ReviewComment;
