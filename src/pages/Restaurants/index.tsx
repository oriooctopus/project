import React, { useContext } from 'react';

import { Spinner } from 'legacyComponents/Spinner';
import { ErrorAlert } from 'legacyComponents/ErrorAlert';
import RestaurantsTemplate from 'templates/Restaurants';

import { AuthContext } from 'AuthContext';

import { useRestaurantsQuery } from 'generated/graphql';

const RESTAURANTS_PER_PAGE = 10;

type RestaurantsProps = {
  pageParameters?: string;
};

const Restaurants = ({ pageParameters }: RestaurantsProps) => {
  const {
    userData: { role },
  } = useContext(AuthContext);
  const includeRatingsFilter = role === 'user';

  const searchParameters = new URLSearchParams(
    window?.location.search,
  );
  const pageNumber = searchParameters.get('pageNumber');
  const ratingsMinimum = searchParameters.get('ratingsMinimum');

  const paginationUrlBuilder = (page: number) =>
    `/restaurants?pageNumber=${page}&ratingsMinimum=${ratingsMinimum}`;

  const currentPageNumber =
    Number(pageNumber) > 0 ? Number(pageNumber) : 1;
  const after = (currentPageNumber - 1) * RESTAURANTS_PER_PAGE;

  const { loading, error, data, refetch } = useRestaurantsQuery({
    fetchPolicy: 'no-cache',
    variables: {
      after,
      limit: RESTAURANTS_PER_PAGE,
      ratingsMinimum: Number(ratingsMinimum),
    },
  });

  if (loading) return <Spinner />;
  if (error) return <ErrorAlert errorMessage={error.message} />;
  if (!data?.restaurants) return <span>query unsucessful</span>;

  setInterval(() => {
    console.log('refetching!!!');
    // refetch();
  }, 5000);

  return (
    <RestaurantsTemplate
      {...data}
      currentPageNumber={currentPageNumber}
      includeRatingsFilter={includeRatingsFilter}
      restaurantsPerPage={RESTAURANTS_PER_PAGE}
      paginationUrlBuilder={paginationUrlBuilder}
    />
  );
};

export default Restaurants;
