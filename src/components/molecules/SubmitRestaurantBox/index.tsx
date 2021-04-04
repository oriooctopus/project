import React from 'react';
import Button from 'components/atoms/Button';
import TextInput from 'components/atoms/Inputs/Text';
import styles from './index.module.scss';
import clsx from 'clsx';

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

// Ideally we could abstract this further by adding a submitContainer component
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
  const onChangeDescription = (
    e: React.FormEvent<HTMLTextAreaElement>,
  ) => {
    const { value } = e.target as HTMLTextAreaElement;

    setDescription(value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit();
  };

  return (
    <form
      className={clsx(styles.SubmitRestaurantBox, 'row')}
      onSubmit={handleSubmit}
    >
      <div className="col-md-8">
        <textarea
          onChange={onChangeDescription}
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
        <div className={styles.submitContainer}>
          <Button disabled={!canSubmit} theme="success" type="submit">
            Submit Review
          </Button>
          {errorMessage && (
            <span className={styles.error}>{errorMessage}</span>
          )}
        </div>
      </div>
    </form>
  );
};

export default SubmitRestaurantBox;
