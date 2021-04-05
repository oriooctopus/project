import React from 'react';

import { Spinner } from 'legacyComponents/Spinner';
import { ErrorAlert } from 'legacyComponents/ErrorAlert';
import RestaurantsTemplate from 'templates/Restaurants';

import { useRestaurantsQuery } from 'generated/graphql';

const RESTAURANTS_PER_PAGE = 10;

type RestaurantsProps = {
  pageParameters?: string;
};

const Restaurants = ({ pageParameters }: RestaurantsProps) => {
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

  const { loading, error, data } = useRestaurantsQuery({
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

  return (
    <RestaurantsTemplate
      {...data}
      currentPageNumber={currentPageNumber}
      restaurantsPerPage={RESTAURANTS_PER_PAGE}
      paginationUrlBuilder={paginationUrlBuilder}
    />
  );
};

export default Restaurants;
