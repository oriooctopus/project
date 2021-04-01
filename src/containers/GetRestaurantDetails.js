import React from 'react';
import { useQuery } from '@apollo/client';

import { Spinner } from 'components/Spinner';
import { ErrorAlert } from 'components/ErrorAlert';
import RestaurantDetails from 'components/RestaurantDetails';

import { RESTAURANT_DETAILS } from '../gql/queries/restaurants';
import test from '../gql/queries/users.graphql';

const GetRestaurantDetails = () => {
  console.log('does this work', test);

  return <span>wefewf</span>;
  const { loading, error, data } = useQuery(RESTAURANT_DETAILS, {
    fetchPolicy: 'no-cache',
  });

  if (loading) return <Spinner />;
  if (error) return <ErrorAlert errorMessage={error.message} />;

  return <RestaurantDetails post={data.post} />;
};

export default GetRestaurantDetails;
