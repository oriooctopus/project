import React from 'react';
import RestaurantHero from 'components/organisms/RestaurantHero';
import Layout from 'components/atoms/Layout';
import Container from 'components/atoms/Container';
import ReviewCard from 'components/organisms/ReviewCard';

import { RestaurantDetailsQuery } from 'generated/graphql';
import RestaurantReviews from 'components/organisms/RestaurantReviews';

// import styles from './styles';

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
    highestReview,
    location,
    lowestReview,
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
      <section>
        <Container>
          <div className="row">
            <div className="col-md-6">
              <h4>Highest Review</h4>
              <ReviewCard {...highestReview} />
            </div>
            <div className="col-md-6">
              <h4>Lowest Review</h4>
              <ReviewCard {...lowestReview} />
            </div>
          </div>
        </Container>
      </section>
      {title && (
        // @ts-ignore
        <RestaurantReviews reviews={reviews} title="All Reviews" />
      )}
    </Layout>
  );
};

export default RestaurantDetails;
