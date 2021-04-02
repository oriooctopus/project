import React from 'react';
import { useQuery } from '@apollo/client';

import { Spinner } from 'components/Spinner';
import { ErrorAlert } from 'components/ErrorAlert';
import RestaurantDetails from 'templates/RestaurantDetails';

import { useRestaurantDetailsQuery } from 'generated/graphql';

type GetRestaurantDetailsProps = {
  restaurantId: string;
};

const GetRestaurantDetails = ({
  restaurantId,
}: GetRestaurantDetailsProps) => {
  const { loading, error, data } = useRestaurantDetailsQuery({
    fetchPolicy: 'no-cache',
    variables: { id: Number(restaurantId) },
  });

  if (loading) return <Spinner />;
  if (error) return <ErrorAlert errorMessage={error.message} />;
  if (!data?.restaurant) return <span>query unsucessful</span>;
  console.log('data', data);

  return <RestaurantDetails {...data} />;
};

export default GetRestaurantDetails;
