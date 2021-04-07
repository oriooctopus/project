import React, { useEffect, useState } from 'react';
import { useNavigate } from '@reach/router';
import { Spinner } from 'legacyComponents/Spinner';
import { ErrorAlert } from 'legacyComponents/ErrorAlert';
import AddReviewTemplate from 'templates/RestaurantReview';
import {
  useReviewRestaurantQuery,
  useCreateReviewMutation,
} from 'generated/graphql';

const MINIMUM_REVIEW_CONTENT_LENGTH = 5;

type AddReviewProps = {
  restaurantId: string;
};

const AddReview = ({ restaurantId }: AddReviewProps) => {
  const navigate = useNavigate();
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
      .then(() => navigate(`/restaurant/${restaurantId}`))
      .catch((e) => setErrorMessage(JSON.stringify(e)));
  };
  const {
    loading,
    error,
    data: addReviewQueryData,
  } = useReviewRestaurantQuery({
    fetchPolicy: 'no-cache',
    variables: { id: Number(restaurantId) },
  });
  const { title } = addReviewQueryData?.restaurant || {
    title: '',
  };

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
  if (!addReviewQueryData?.restaurant)
    return <span>query unsucessful</span>;

  return (
    <AddReviewTemplate
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

export default AddReview;
