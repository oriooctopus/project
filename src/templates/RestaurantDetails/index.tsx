import React from 'react';
import RestaurantHero from 'components/organisms/RestaurantHero';
import Layout from 'components/atoms/Layout';
import Container from 'components/atoms/Container';
import ReviewCard from 'components/organisms/ReviewCard';
import Button from 'components/atoms/Button';

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
    return <span>Restaurant not found</span>;
  }

  const sharedButtonProps = {
    includeDelete,
    includeEdit,
  };

  const {
    averageRating,
    canAddReview,
    imageUrl,
    highestReview,
    id: restaurantId,
    location,
    lowestReview,
    reviews,
    totalReviews,
    title,
  } = restaurant;
  const averageRatingParsed = Number(averageRating);

  return (
    <Layout>
      <RestaurantHero
        averageRating={averageRatingParsed}
        image={imageUrl}
        location={location}
        totalReviews={totalReviews}
        title={title}
      />
      {canAddReview && (
        <Container>
          <Button
            theme="success"
            onClick={() =>
              (window.location.href = `/review/add/${restaurantId}`)
            }
          >
            Add a review
          </Button>
        </Container>
      )}
      {highestReview &&
        lowestReview &&
        highestReview?.id !== lowestReview?.id && (
          <section>
            <Container>
              <div className="row">
                <div className="col-md-6">
                  <h4>Highest Review</h4>
                  <ReviewCard
                    {...sharedButtonProps}
                    {...highestReview}
                  />
                </div>
                <div className="col-md-6">
                  <h4>Lowest Review</h4>
                  <ReviewCard
                    {...sharedButtonProps}
                    {...lowestReview}
                  />
                </div>
              </div>
            </Container>
          </section>
        )}
      {reviews?.length ? (
        <RestaurantReviews
          // @ts-ignore
          reviews={reviews}
          title="All Reviews"
          {...sharedButtonProps}
        />
      ) : (
        <Container>
          <h4>No reviews yet</h4>
        </Container>
      )}
    </Layout>
  );
};

export default RestaurantDetails;
