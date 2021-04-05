import React from 'react';
// import RestaurantHero from 'organisms/RestaurantHero';
import Layout from 'components/atoms/Layout';

import {
  RestaurantsQuery,
  RestaurantEdges,
  Restaurant,
} from 'generated/graphql';
import Paginator from 'components/molecules/Paginator';

type RestaurantsProps = RestaurantsQuery & {
  currentPageNumber: number;
  paginationUrlBuilder: (pageNumber: number) => string;
  restaurantsPerPage: number;
};

const Restaurants = ({
  currentPageNumber,
  paginationUrlBuilder,
  restaurants,
  restaurantsPerPage,
}: RestaurantsProps) => {
  if (!restaurants?.edges) {
    return <span />;
  }

  const totalRestaurants = restaurants.totalCount || 0;
  const totalPages = Math.ceil(totalRestaurants / restaurantsPerPage);

  const formattedRestaurants = (restaurants?.edges || [])
    // @ts-ignore
    .map((edge: RestaurantEdges) => edge?.node) as Restaurant[];

  return (
    <Layout>
      {formattedRestaurants.map(
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
      )}
      <Paginator
        currentPage={currentPageNumber}
        paginationUrlBuilder={paginationUrlBuilder}
        totalPages={totalPages}
      />
    </Layout>
  );
};

export default Restaurants;
