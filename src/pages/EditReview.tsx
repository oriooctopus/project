import React, { useEffect, useState } from 'react';

import { Spinner } from 'legacyComponents/Spinner';
import { ErrorAlert } from 'legacyComponents/ErrorAlert';
import RestaurantReviewTemplate from 'templates/RestaurantReview';

import {
  useEditReviewPageQuery,
  useEditReviewMutation,
} from 'generated/graphql';

const MINIMUM_REVIEW_CONTENT_LENGTH = 1;

type EditRestaurantReviewProps = {
  reviewId: string;
};

const EditRestaurantReview = ({
  reviewId: reviewIdString,
}: EditRestaurantReviewProps) => {
  const reviewId = Number(reviewIdString);
  const {
    loading: reviewQueryLoading,
    error: reviewQueryError,
    data: reviewQuery,
  } = useEditReviewPageQuery({
    fetchPolicy: 'no-cache',
    variables: { id: Number(reviewId) },
  });

  const previousReviewContent = reviewQuery?.review?.content || '';
  const previousRating = reviewQuery?.review?.rating || 3;
  const restaurantId = reviewQuery?.review?.restaurant?.id || 0;
  const title = reviewQuery?.review?.restaurant?.title || '';

  const [rating, setRating] = useState(3);
  const [reviewContent, setReviewContent] = useState('');
  const [canSubmit, setCanSubmit] = useState(true);
  const [errorMessage, setErrorMessage] = useState('');

  const [
    editReviewMutation,
    { called: submitCalled },
  ] = useEditReviewMutation({
    variables: {
      content: reviewContent,
      rating,
      id: reviewId,
    },
  });

  const onSubmit = () => {
    editReviewMutation()
      .then(() => {
        window.location.href = `/restaurant/${restaurantId}`;
      })
      .catch((e) => setErrorMessage(JSON.stringify(e)));
  };

  useEffect(() => {
    const reviewIsSufficientLength =
      reviewContent.length > MINIMUM_REVIEW_CONTENT_LENGTH;
    const newCanSubmit = reviewIsSufficientLength && !submitCalled;

    if (!reviewIsSufficientLength) {
      setErrorMessage(
        `Review content must be at least ${MINIMUM_REVIEW_CONTENT_LENGTH} characters`,
      );
    } else {
      setErrorMessage('');
    }

    setCanSubmit(newCanSubmit);
  }, [reviewContent, submitCalled]);

  useEffect(() => {
    setReviewContent(previousReviewContent);
    setRating(previousRating);
  }, [reviewQuery]);

  if (reviewQueryLoading) return <Spinner />;
  if (reviewQueryError)
    return <ErrorAlert errorMessage={reviewQueryError.message} />;
  if (!reviewQuery?.review) return <span>query unsucessful</span>;

  return (
    <RestaurantReviewTemplate
      canSubmit={canSubmit}
      errorMessage={errorMessage}
      onSubmit={onSubmit}
      rating={rating}
      reviewContent={reviewContent}
      setRating={setRating}
      setReviewContent={setReviewContent}
      title={title}
    />
  );
};

export default EditRestaurantReview;
