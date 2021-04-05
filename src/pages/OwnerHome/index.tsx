import React from 'react';

import { Spinner } from 'legacyComponents/Spinner';
import { ErrorAlert } from 'legacyComponents/ErrorAlert';
import OwnerHomeTemplate from 'templates/OwnerHome/index';

import { useOwnerHomeQuery } from 'generated/graphql';

const OwnerHome = () => {
  const { loading, error, data } = useOwnerHomeQuery({
    fetchPolicy: 'no-cache',
    variables: {},
  });

  if (loading) return <Spinner />;
  if (error) return <ErrorAlert errorMessage={error.message} />;
  if (!data?.getUnansweredReviewsForOwner || !data?.restaurants)
    return <span>query unsucessful</span>;

  return <OwnerHomeTemplate {...data} />;
};

export default OwnerHome;
