import React from 'react';
import { Link } from '@reach/router';
import RestaurantCard from 'components/organisms/RestaurantCard';
import Container from 'components/atoms/Container';
import Layout from 'components/atoms/Layout';

import {
  RestaurantsQuery,
  RestaurantEdges,
  RestaurantFragment,
} from 'generated/graphql';
import Paginator from 'components/molecules/Paginator';

import styles from './index.module.scss';

type RestaurantsProps = RestaurantsQuery & {
  currentPageNumber: number;
  includeRatingsFilter: boolean;
  paginationUrlBuilder: (pageNumber: number) => string;
  restaurantsPerPage: number;
};

const RatingsFilterLinks = () => (
  <div className={styles.ratingsFilters}>
    <span className={styles.ratingsPrecursor}>Filter By Rating</span>
    {Array(5)
      .fill('')
      .map((_, i) => (
        <Link to={`/restaurants?ratingsMinimum=${i + 1}`}>
          {i + 1}
        </Link>
      ))}
  </div>
);

const Restaurants = ({
  currentPageNumber,
  includeRatingsFilter,
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
      <Container>
        {includeRatingsFilter && <RatingsFilterLinks />}
        <section>
          {formattedRestaurants.length ? (
            <div className="row">
              {formattedRestaurants.map(
                (restaurant: RestaurantFragment) => (
                  <div className="col-md-6 spacing-medium-bottom">
                    <RestaurantCard {...restaurant} />
                  </div>
                ),
              )}
            </div>
          ) : (
            <h4>No Restaurants Found</h4>
          )}
        </section>
        <Paginator
          currentPage={currentPageNumber}
          paginationUrlBuilder={paginationUrlBuilder}
          totalPages={totalPages}
        />
      </Container>
    </Layout>
  );
};

export default Restaurants;
