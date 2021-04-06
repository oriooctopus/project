import React from 'react';
import Container from 'components/atoms/Container';
import ReviewCard from 'components/organisms/ReviewCard';
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
      <Container>
        <section>
          <div className="row">
            {formattedUnansweredReviews.length ? (
              formattedUnansweredReviews.map((review: Review) => (
                <div className="col-md-6 spacing-medium-bottom">
                  <ReviewCard {...review} />
                </div>
              ))
            ) : (
              <span>No Unanswered Review</span>
            )}
          </div>
          <Paginator
            currentPage={currentPageNumber}
            paginationUrlBuilder={paginationUrlBuilder}
            totalPages={totalPages}
          />
        </section>
      </Container>
    </Layout>
  );
};

export default UnansweredReviews;
