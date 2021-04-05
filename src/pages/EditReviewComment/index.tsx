import React, { useEffect, useState } from 'react';

import EditReviewCommentTemplate from 'templates/ReviewComment';

import {
  useEditReviewCommentDataQuery,
  useEditReviewCommentMutation,
} from 'generated/graphql';

const MINIMUM_REVIEW_COMMENT_LENGTH = 1;

type EditReviewCommentProps = {
  reviewCommentId: string;
};

const EditReviewComment = ({
  reviewCommentId,
}: EditReviewCommentProps) => {
  const [reviewContent, setReviewContent] = useState('');
  const [reviewId, setReviewId] = useState(0);
  const [rating, setRating] = useState(3);
  const [comment, setComment] = useState('');
  const [canSubmit, setCanSubmit] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const {
    data: editReviewCommentDataQuery,
  } = useEditReviewCommentDataQuery({
    fetchPolicy: 'no-cache',
    variables: { reviewCommentId: Number(reviewCommentId) },
  });
  const [
    editReviewCommentMutation,
    { called: submitCalled },
  ] = useEditReviewCommentMutation({
    variables: {
      comment,
      id: Number(reviewCommentId),
      reviewId,
    },
  });
  const onSubmit = () => {
    editReviewCommentMutation()
      .then(() => {
        window.location.href = `/restaurant/${editReviewCommentDataQuery?.reviewComment?.restaurantId}`;
      })
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
    console.log('result', editReviewCommentDataQuery);
    setRating(
      editReviewCommentDataQuery?.reviewComment?.review?.rating || 3,
    );
    setReviewContent(
      editReviewCommentDataQuery?.reviewComment?.review?.content ||
        '',
    );
    setReviewId(
      editReviewCommentDataQuery?.reviewComment?.review?.id || 0,
    );
    setComment(
      editReviewCommentDataQuery?.reviewComment?.comment || '',
    );
  }, [editReviewCommentDataQuery]);

  return (
    <EditReviewCommentTemplate
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

export default EditReviewComment;
