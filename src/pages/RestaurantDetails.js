import React, { Fragment } from 'react';

import GetRestaurantDetails from 'containers/GetRestaurantDetails';

const RestaurantDetail = ({ restaurantId }) => {
  return <GetRestaurantDetails restaurantId={restaurantId} />;
};

export default RestaurantDetail;
