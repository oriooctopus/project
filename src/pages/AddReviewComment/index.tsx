import React, { useEffect, useState } from 'react';
import { useNavigate } from '@reach/router';
import CommentTemplate from 'templates/ReviewComment';
import {
  useAddReviewCommentDataQuery,
  useAddReviewCommentMutation,
} from 'generated/graphql';

const MINIMUM_REVIEW_COMMENT_LENGTH = 5;

type AddReviewCommentProps = {
  reviewId: string;
};

const AddReviewComment = ({ reviewId }: AddReviewCommentProps) => {
  const navigate = useNavigate();
  const [reviewContent, setReviewContent] = useState('');
  const [rating, setRating] = useState(3);
  const [comment, setComment] = useState('');
  const [canSubmit, setCanSubmit] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const {
    data: addReviewCommentDataQuery,
  } = useAddReviewCommentDataQuery({
    fetchPolicy: 'no-cache',
    variables: { reviewId: Number(reviewId) },
  });
  const [
    addReviewCommentMutation,
    { called: submitCalled },
  ] = useAddReviewCommentMutation({
    variables: {
      comment,
      reviewId: Number(reviewId),
    },
  });
  const onSubmit = () => {
    addReviewCommentMutation()
      .then(() =>
        navigate(
          `/restaurant/${addReviewCommentDataQuery?.review?.restaurant?.id}`,
        ),
      )
      .catch((e) => setErrorMessage(JSON.stringify(e)));
  };

  useEffect(() => {
    const commentIsSufficientLength =
      comment.length > MINIMUM_REVIEW_COMMENT_LENGTH;

    if (!commentIsSufficientLength) {
      setErrorMessage(
        `Comment must be at least ${MINIMUM_REVIEW_COMMENT_LENGTH} characters`,
      );
    } else {
      setErrorMessage('');
    }

    const newCanSubmit = commentIsSufficientLength && !submitCalled;

    setCanSubmit(newCanSubmit);
  }, [comment, submitCalled]);

  useEffect(() => {
    setRating(addReviewCommentDataQuery?.review?.rating || 3);
    setReviewContent(
      addReviewCommentDataQuery?.review?.content || '',
    );
  }, [addReviewCommentDataQuery]);

  return (
    <CommentTemplate
      comment={comment}
      canSubmit={canSubmit}
      errorMessage={errorMessage}
      onSubmit={onSubmit}
      rating={rating}
      reviewContent={reviewContent}
      setComment={setComment}
    />
  );
};

export default AddReviewComment;
