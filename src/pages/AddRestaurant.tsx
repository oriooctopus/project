import React, { useEffect, useState } from 'react';

import RestaurantDataTemplate from 'templates/RestaurantData';

import { useCreateRestaurantMutation } from 'generated/graphql';

const RestaurantData = () => {
  const [description, setDescription] = useState('');
  const [location, setLocation] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [title, setTitle] = useState('');

  const [canSubmit, setCanSubmit] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [
    createRestaurantMutation,
    { called: submitCalled },
  ] = useCreateRestaurantMutation({
    variables: {
      description,
      location,
      imageUrl,
      title,
      userId: 2,
    },
  });
  const onSubmit = () => {
    createRestaurantMutation()
      .then(
        (response) =>
          (window.location.href = `/restaurant/${response?.data?.addRestaurant?.id}`),
      )
      .catch((e) => setErrorMessage(JSON.stringify(e)));
  };

  useEffect(() => {
    setCanSubmit(!submitCalled);
  }, [submitCalled]);

  return (
    <RestaurantDataTemplate
      canSubmit={canSubmit}
      description={description}
      errorMessage={errorMessage}
      imageUrl={imageUrl}
      location={location}
      onSubmit={onSubmit}
      setDescription={setDescription}
      setImageUrl={setImageUrl}
      setLocation={setLocation}
      setTitle={setTitle}
      title={title}
    />
  );
};

export default RestaurantData;
