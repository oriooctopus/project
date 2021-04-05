import React from 'react';
// import UnansweredReviewHero from 'organisms/UnansweredReviewHero';
import Layout from 'components/atoms/Layout';

import {
  UnansweredReviewsQuery,
  UnansweredReviewEdges,
  Review,
} from 'generated/graphql';
import Paginator from 'components/molecules/Paginator';

type UnansweredReviewsProps = UnansweredReviewsQuery & {
  currentPageNumber: number;
  paginationUrlBuilder: (pageNumber: number) => string;
  unansweredReviewsPerPage: number;
};

const UnansweredReviews = ({
  currentPageNumber,
  paginationUrlBuilder,
  getUnansweredReviewsForOwner,
  unansweredReviewsPerPage,
}: UnansweredReviewsProps) => {
  if (!getUnansweredReviewsForOwner) {
    return <span />;
  }

  const totalUnansweredReviews =
    getUnansweredReviewsForOwner.totalCount || 0;
  const totalPages = Math.ceil(
    totalUnansweredReviews / unansweredReviewsPerPage,
  );

  const formattedUnansweredReviews = (
    getUnansweredReviewsForOwner?.edges || []
  ).map(
    // @ts-ignore
    (edge: UnansweredReviewEdges) => edge?.node,
  ) as Review[];

  return (
    <Layout>
      {formattedUnansweredReviews.map(
        ({ reviewComment, content, id, rating }: Review) => (
          <div style={{ marginBottom: '20px' }}>
            <a href={`/review-comment/add/${id}`}>
              <p>{content}</p>
              <span>{rating}</span>
            </a>
          </div>
        ),
      )}
      <Paginator
        currentPage={currentPageNumber}
        paginationUrlBuilder={paginationUrlBuilder}
        totalPages={totalPages}
      />
    </Layout>
  );
};

export default UnansweredReviews;
