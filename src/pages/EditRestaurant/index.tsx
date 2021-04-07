import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from '@reach/router';

import RestaurantDataTemplate from 'templates/RestaurantData';
import { useRestaurantDetailsQuery } from 'generated/graphql';

import { useEditRestaurantMutation } from 'generated/graphql';
import { AuthContext } from 'AuthContext';

type EditRestaurantProps = {
  restaurantId: string;
};

const EditRestaurant = ({ restaurantId }: EditRestaurantProps) => {
  const formattedRestaurantId = Number(restaurantId);
  const {
    userData: { uuid },
  } = useContext(AuthContext);
  const navigate = useNavigate();

  const { data: restaurantDetailsQuery } = useRestaurantDetailsQuery({
    fetchPolicy: 'no-cache',
    variables: { id: formattedRestaurantId },
  });

  const [description, setDescription] = useState('');
  const [location, setLocation] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [title, setTitle] = useState('');

  const [canSubmit, setCanSubmit] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [
    editRestaurantMutation,
    { called: submitCalled },
  ] = useEditRestaurantMutation({
    variables: {
      description,
      id: formattedRestaurantId,
      location,
      imageUrl,
      title,
      userId: Number(uuid),
    },
  });

  const onSubmit = () => {
    editRestaurantMutation()
      .then((response) =>
        navigate(`/restaurant/${response?.data?.editRestaurant?.id}`),
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
