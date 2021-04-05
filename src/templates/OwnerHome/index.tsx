import React from 'react';
import { Link } from '@reach/router';
import Container from 'components/atoms/Container';
import Layout from 'components/atoms/Layout';
import { ReviewFragment } from 'generated/graphql';
import ReviewCard from 'components/organisms/ReviewCard';

import {
  OwnerHomeQuery,
  RestaurantEdges,
  Restaurant,
  Review,
  UnansweredReviewEdges,
} from 'generated/graphql';

type OwnerHomeProps = OwnerHomeQuery & {};

const OwnerHome = ({
  getUnansweredReviewsForOwner,
  restaurants,
}: OwnerHomeProps) => {
  if (!getUnansweredReviewsForOwner?.edges || !restaurants?.edges) {
    return <span />;
  }

  const formattedRestaurants = (restaurants?.edges || [])
    // @ts-ignore
    .map((edge: RestaurantEdges) => edge?.node) as Restaurant[];
  const formattedUnansweredReviews = (
    getUnansweredReviewsForOwner?.edges || []
  ).map(
    // @ts-ignore
    (edge: UnansweredReviewEdges) => edge?.node,
  ) as Review[];

  console.log('result', getUnansweredReviewsForOwner);

  return (
    <Layout>
      <Container>
        {formattedRestaurants.map(
          ({
            id,
            averageRating,
            title,
            canAddReview,
          }: Restaurant) => (
            <span>{title}</span>
          ),
        )}
        <section>
          <div>
            <h4>Unanswered Reviews</h4>
            <div className="row">
              {formattedUnansweredReviews.length ? (
                formattedUnansweredReviews.map(
                  (review: ReviewFragment) => (
                    <div className="col-md-4 spacing-medium-bottom">
                      <ReviewCard {...review} />
                    </div>
                  ),
                )
              ) : (
                <span>No Unanswered Review</span>
              )}
            </div>
            {formattedUnansweredReviews.length && (
              <Link to="/unanswered-comments">
                <span className="button success">
                  See All Unanswered Comments
                </span>
              </Link>
            )}
          </div>
        </section>
      </Container>
    </Layout>
  );
};

export default OwnerHome;
