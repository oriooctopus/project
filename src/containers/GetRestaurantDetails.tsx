import React from 'react';

import { Spinner } from 'legacyComponents/Spinner';
import { ErrorAlert } from 'legacyComponents/ErrorAlert';
import RestaurantDetails from 'templates/RestaurantDetails';

import { useRestaurantDetailsQuery } from 'generated/graphql';

type GetRestaurantDetailsProps = {
  restaurantId: string;
};

const GetRestaurantDetails = ({
  restaurantId,
}: GetRestaurantDetailsProps) => {
  console.log('does this happen?', restaurantId);
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
