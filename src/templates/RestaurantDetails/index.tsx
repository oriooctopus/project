import React from 'react';
import { useNavigate } from '@reach/router';
import RestaurantHero from 'components/organisms/RestaurantHero';
import Layout from 'components/atoms/Layout';
import Container from 'components/atoms/Container';
import ReviewCard from 'components/organisms/ReviewCard';
import Button from 'components/atoms/Button';

import { RestaurantDetailsQuery } from 'generated/graphql';
import RestaurantReviews from 'components/organisms/RestaurantReviews';

type RestaurantDetailsProps = RestaurantDetailsQuery & {};

const RestaurantDetails = ({
  restaurant,
}: RestaurantDetailsProps) => {
  const navigate = useNavigate();

  if (!restaurant) {
    return <span>Restaurant not found</span>;
  }

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
            onClick={() => navigate(`/review/add/${restaurantId}`)}
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
                  <ReviewCard {...highestReview} />
                </div>
                <div className="col-md-6">
                  <h4>Lowest Review</h4>
                  <ReviewCard {...lowestReview} />
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
        />
      ) : (
        <Container>
          <h4 className="mt-5">No reviews yet</h4>
        </Container>
      )}
    </Layout>
  );
};

export default RestaurantDetails;
