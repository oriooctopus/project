import React from 'react';

import { Spinner } from 'legacyComponents/Spinner';
import { ErrorAlert } from 'legacyComponents/ErrorAlert';
import RestaurantDetailsTemplate from 'templates/RestaurantDetails';

import { useRestaurantDetailsQuery } from 'generated/graphql';

type RestaurantDetailsProps = {
  restaurantId: string;
};

const RestaurantDetails = ({
  restaurantId,
}: RestaurantDetailsProps) => {
  const { loading, error, data } = useRestaurantDetailsQuery({
    fetchPolicy: 'no-cache',
    variables: { id: Number(restaurantId) },
  });

  if (loading || !data?.restaurant) return <Spinner />;
  if (error) return <ErrorAlert errorMessage={error.message} />;

  // ideally I would add a context that wraps all pages with user role/other data
  // const isAdmin = data?.currentUser?.role === 'admin';
  const isAdmin = true;

  return (
    <RestaurantDetailsTemplate
      {...data}
      includeDelete={isAdmin}
      includeEdit={isAdmin}
    />
  );
};

export default RestaurantDetails;
