import React from 'react';
import TextInput from 'components/atoms/Inputs/Text';
import Textarea from 'components/atoms/Inputs/Textarea';
import SubmitBox from 'components/molecules/SubmitBox';

type SubmitRestaurantBoxProps = {
  canSubmit: boolean;
  description: string;
  errorMessage: string;
  imageUrl: string;
  location: string;
  onSubmit: () => void;
  setDescription: (description: string) => void;
  setImageUrl: (imageUrl: string) => void;
  setLocation: (location: string) => void;
  setTitle: (title: string) => void;
  title: string;
};

const SubmitRestaurantBox = ({
  canSubmit,
  description,
  errorMessage,
  imageUrl,
  location,
  onSubmit,
  setDescription,
  setImageUrl,
  setLocation,
  setTitle,
  title,
}: SubmitRestaurantBoxProps) => {
  return (
    <SubmitBox
      canSubmit={canSubmit}
      errorMessage={errorMessage}
      onSubmit={onSubmit}
    >
      <Textarea
        handleChange={setDescription}
        name="description"
        placeholder="Description Here"
        value={description}
      />
      <TextInput
        name="title"
        handleChange={setTitle}
        placeholder="Title here"
        value={title}
      />
      <TextInput
        name="location"
        handleChange={setLocation}
        placeholder="Location Here"
        value={location}
      />
      <TextInput
        name="image_url"
        handleChange={setImageUrl}
        placeholder="Image Url Here"
        value={imageUrl}
      />
    </SubmitBox>
  );
};

export default SubmitRestaurantBox;
