import React from 'react';
import Layout from 'components/atoms/Layout';
import Container from 'components/atoms/Container';
import SubmitRestaurantBox from 'components/organisms/SubmitRestaurantBox';
import styles from './index.module.scss';

type RestaurantDataProps = {
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

const RestaurantData = ({
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
}: RestaurantDataProps) => {
  return (
    <Layout>
      <Container className={styles.RestaurantData}>
        <h1>{title}</h1>
        <SubmitRestaurantBox
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
      </Container>
    </Layout>
  );
};

export default RestaurantData;
