import React, { useEffect, useState } from 'react';

import RestaurantDataTemplate from 'templates/RestaurantData';
import { useRestaurantDetailsQuery } from 'generated/graphql';

import { useCreateRestaurantMutation } from 'generated/graphql';

type EditRestaurantProps = {
  restaurantId: string;
};

const EditRestaurant = ({ restaurantId }: EditRestaurantProps) => {
  const { data: restaurantDetailsQuery } = useRestaurantDetailsQuery({
    fetchPolicy: 'no-cache',
    variables: { id: Number(restaurantId) },
  });

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

  useEffect(() => {
    setDescription(
      restaurantDetailsQuery?.restaurant?.description || '',
    );
    setLocation(restaurantDetailsQuery?.restaurant?.location || '');
    setImageUrl(restaurantDetailsQuery?.restaurant?.imageUrl || '');
    setTitle(restaurantDetailsQuery?.restaurant?.title || '');
  }, [restaurantDetailsQuery]);

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

export default EditRestaurant;
