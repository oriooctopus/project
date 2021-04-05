import React from 'react';

import { Spinner } from 'legacyComponents/Spinner';
import { ErrorAlert } from 'legacyComponents/ErrorAlert';
import UnansweredReviewsTemplate from 'templates/UnansweredReviews';

import { useUnansweredReviewsQuery } from 'generated/graphql';

const UNANSWERED_REVIEWS_PER_PAGE = 2;

type UnansweredReviewsProps = {
  pageNumber?: string;
};

const UnansweredReviews = ({
  pageNumber,
}: UnansweredReviewsProps) => {
  const currentPageNumber = pageNumber ? Number(pageNumber) : 1;

  const paginationUrlBuilder = (page: number) =>
    `/unanswered-reviews/${page}`;

  const after = (currentPageNumber - 1) * UNANSWERED_REVIEWS_PER_PAGE;

  const { loading, error, data } = useUnansweredReviewsQuery({
    fetchPolicy: 'no-cache',
    variables: {
      after,
      limit: UNANSWERED_REVIEWS_PER_PAGE,
    },
  });

  if (loading) return <Spinner />;
  if (error) return <ErrorAlert errorMessage={error?.message} />;
  if (!data?.getUnansweredReviewsForOwner)
    return <span>query unsucessful</span>;

  return (
    <UnansweredReviewsTemplate
      {...data}
      currentPageNumber={currentPageNumber}
      unansweredReviewsPerPage={UNANSWERED_REVIEWS_PER_PAGE}
      paginationUrlBuilder={paginationUrlBuilder}
    />
  );
};

export default UnansweredReviews;
