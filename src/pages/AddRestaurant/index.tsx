import React, { useEffect, useState } from 'react';

import AddRestaurantTemplate from 'templates/RestaurantData';

import { useCreateRestaurantMutation } from 'generated/graphql';

const AddRestaurant = () => {
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
    <AddRestaurantTemplate
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

export default AddRestaurant;
