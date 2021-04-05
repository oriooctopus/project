import React from 'react';
// import RestaurantHero from 'organisms/RestaurantHero';
import Layout from 'components/atoms/Layout';

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

  return (
    <Layout>
      <span>ewfewe </span>
      {formattedRestaurants.map(
        ({ id, averageRating, title, canAddReview }: Restaurant) => (
          <span>{title}</span>
        ),
      )}
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
      {/* {formattedOwnerHome.map(
        ({ id, averageRating, title, canAddReview }: Restaurant) => (
          <div style={{ marginBottom: '20px' }}>
            <a href={`/restaurant/${id}`}>
              <p>{title}</p>
              <p>average rating: {averageRating}</p>
              {canAddReview && (
                <a href={`/review/add/${id}`}>Leave a Review</a>
              )}
            </a>
          </div>
        ),
      )} */}
    </Layout>
  );
};

export default OwnerHome;
