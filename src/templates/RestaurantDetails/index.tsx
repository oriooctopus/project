import React from 'react';
import RestaurantHero from 'organisms/RestaurantHero';
import Layout from 'components/Layout';

import {
  Restaurant,
  RestaurantDetailsQuery,
} from 'generated/graphql';
import RestaurantReviews from 'organisms/RestaurantReviews';

// image, title, location, ratings, average rating, number of reviews
const RestaurantDetails = ({
  restaurant,
}: RestaurantDetailsQuery) => {
  if (!restaurant) {
    return <span />;
  }

  const {
    averageRating,
    imageUrl,
    location,
    reviews,
    totalReviews,
    title,
  } = restaurant;

  return (
    <Layout>
      <RestaurantHero
        averageRating={averageRating}
        image={imageUrl}
        location={location}
        totalReviews={totalReviews}
        title={title}
      />
      {/* @ts-ignore */}
      {reviews && <RestaurantReviews reviews={reviews} />}
    </Layout>
  );
};

export default RestaurantDetails;
