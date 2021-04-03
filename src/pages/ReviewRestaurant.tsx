import React, { useEffect, useState } from 'react';

import { Spinner } from 'components/Spinner';
import { ErrorAlert } from 'components/ErrorAlert';
import ReviewRestaurantTemplate from 'templates/ReviewRestaurant';

import { Redirect } from '@reach/router';

import {
  useReviewRestaurantQuery,
  useCreateReviewMutation,
} from 'generated/graphql';

const MINIMUM_REVIEW_CONTENT_LENGTH = 1;

type ReviewRestaurantProps = {
  restaurantId: string;
};

const ReviewRestaurant = ({
  restaurantId,
}: ReviewRestaurantProps) => {
  const [rating, setRating] = useState(3);
  const [reviewContent, setReviewContent] = useState('');
  const [canSubmit, setCanSubmit] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [
    createReviewMutation,
    { called: submitCalled },
  ] = useCreateReviewMutation({
    variables: {
      content: reviewContent,
      rating,
      restaurantId: Number(restaurantId),
    },
  });
  const onSubmit = () => {
    createReviewMutation()
      .then(() => {
        setTimeout(() => {
          window.location.href = `/restaurant/${restaurantId}`;
        }, 2000);
      })
      .catch((e) => setErrorMessage(JSON.stringify(e)));
  };
  const { loading, error, data } = useReviewRestaurantQuery({
    fetchPolicy: 'no-cache',
    variables: { id: Number(restaurantId) },
  });

  useEffect(() => {
    const reviewIsSufficientLength =
      reviewContent.length > MINIMUM_REVIEW_CONTENT_LENGTH;

    if (!reviewIsSufficientLength) {
      setErrorMessage(
        `Review content must be at least ${MINIMUM_REVIEW_CONTENT_LENGTH} characters`,
      );
    } else {
      setErrorMessage('');
    }

    const newCanSubmit = reviewIsSufficientLength && !submitCalled;

    setCanSubmit(newCanSubmit);
  }, [reviewContent, submitCalled]);

  if (loading) return <Spinner />;
  if (error) return <ErrorAlert errorMessage={error.message} />;
  if (!data?.restaurant) return <span>query unsucessful</span>;
  console.log('data', data);
  console.log('reviewContent', reviewContent, 'other', errorMessage);

  return (
    <ReviewRestaurantTemplate
      canSubmit={canSubmit}
      errorMessage={errorMessage}
      onSubmit={onSubmit}
      rating={rating}
      reviewContent={reviewContent}
      setRating={setRating}
      setReviewContent={setReviewContent}
      {...data}
    />
  );
};

export default ReviewRestaurant;
