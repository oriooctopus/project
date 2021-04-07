import React from 'react';
import Layout from 'components/atoms/Layout';
import Container from 'components/atoms/Container';
import TextInput from 'components/atoms/Inputs/Text';
import Textarea from 'components/atoms/Inputs/Textarea';
import SubmitBox from 'components/molecules/SubmitBox';
import styles from './index.module.scss';

type RestaurantDataProps = {
  canSubmit: boolean;
  description: string;
  errorMessage: string;
  imageUrl: string;
  location: string;
  onSubmit: () => void;
  restaurantTitle: string;
  setDescription: (description: string) => void;
  setImageUrl: (imageUrl: string) => void;
  setLocation: (location: string) => void;
  setTitle: (title: string) => void;
  title?: string;
};

const RestaurantData = ({
  canSubmit,
  description,
  errorMessage,
  imageUrl,
  location,
  onSubmit,
  restaurantTitle,
  setDescription,
  setImageUrl,
  setLocation,
  setTitle,
  title,
}: RestaurantDataProps) => (
  <Layout>
    <Container className={styles.root}>
      <h1>{title ? title : restaurantTitle}</h1>
      <SubmitBox
        canSubmit={canSubmit}
        errorMessage={errorMessage}
        onSubmit={onSubmit}
      >
        <TextInput
          name="Title"
          handleChange={setTitle}
          placeholder="Title here"
          value={restaurantTitle}
          withLabel
        />
        <TextInput
          name="Location"
          handleChange={setLocation}
          placeholder="Location Here"
          value={location}
          withLabel
        />
        <TextInput
          name="Image"
          handleChange={setImageUrl}
          placeholder="Image Url Here"
          value={imageUrl}
          withLabel
        />
        <Textarea
          handleChange={setDescription}
          name="Description"
          placeholder="Description Here"
          value={description}
          withLabel
        />
      </SubmitBox>
    </Container>
  </Layout>
);

export default RestaurantData;
