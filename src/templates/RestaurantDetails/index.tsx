import React from 'react';
import RestaurantHero from 'components/organisms/RestaurantHero';
import Layout from 'components/atoms/Layout';
import Container from 'components/atoms/Container';
import ReviewCard from 'components/organisms/ReviewCard';

import { RestaurantDetailsQuery } from 'generated/graphql';
import RestaurantReviews from 'components/organisms/RestaurantReviews';

// import styles from './styles';

type RestaurantDetailsProps = RestaurantDetailsQuery & {
  includeDelete: boolean;
  includeEdit: boolean;
};

const RestaurantDetails = ({
  includeDelete,
  includeEdit,
  restaurant,
}: RestaurantDetailsProps) => {
  if (!restaurant) {
    return <span>data not found</span>;
  }

  const sharedButtonProps = {
    includeDelete,
    includeEdit,
  };

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
              <ReviewCard {...sharedButtonProps} {...highestReview} />
            </div>
            <div className="col-md-6">
              <h4>Lowest Review</h4>
              <ReviewCard {...sharedButtonProps} {...lowestReview} />
            </div>
          </div>
        </Container>
      </section>
      {title && (
        <RestaurantReviews
          // @ts-ignore
          reviews={reviews}
          title="All Reviews"
          {...sharedButtonProps}
        />
      )}
    </Layout>
  );
};

export default RestaurantDetails;
