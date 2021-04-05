import React from 'react';

import { Spinner } from 'legacyComponents/Spinner';
import { ErrorAlert } from 'legacyComponents/ErrorAlert';
import RestaurantDetailsTemplate from 'templates/RestaurantDetails';
import AuthContext from 'AuthContext';

import { useRestaurantDetailsQuery } from 'generated/graphql';

type RestaurantDetailsProps = {
  restaurantId: string;
};

const RestaurantDetails = ({
  restaurantId,
}: RestaurantDetailsProps) => {
  const {
    userData: { isAdmin },
  } = useContext(AuthContext);
  const { loading, error, data } = useRestaurantDetailsQuery({
    fetchPolicy: 'no-cache',
    variables: { id: Number(restaurantId) },
  });

  if (loading || !data?.restaurant) return <Spinner />;
  if (error) return <ErrorAlert errorMessage={error.message} />;

  return (
    <RestaurantDetailsTemplate
      {...data}
      includeDelete={isAdmin}
      includeEdit={isAdmin}
    />
  );
};

export default RestaurantDetails;
