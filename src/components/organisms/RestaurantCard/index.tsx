import React from 'react';
import { Link } from '@reach/router';
import { RestaurantFragment } from 'generated/graphql';
import Rating from 'components/atoms/Rating';
import Button from 'components/atoms/Button';
import useDeleteRestaurant from 'hooks/useDeleteRestaurant';
import styles from './index.module.scss';

const RestaurantCard = ({
  averageRating,
  canModify,
  description,
  id,
  title,
}: RestaurantFragment) => {
  const onClickRestaurantDelete = useDeleteRestaurant(id);
  const onClickRestaurantEdit = () => {
    window.location.href = `/restaurant/edit/${id}`;
  };

  return (
    <Link to={`/restaurant/${id}`}>
      <div className={styles.root}>
        {averageRating && (
          <Rating
            canEdit={false}
            name={`${title} rating`}
            rating={averageRating}
          />
        )}
        <span className="large-body">{title}</span>
        <p>{description}</p>
        {canModify && (
          <div className={styles.buttonContainer}>
            <Button theme="danger" onClick={onClickRestaurantDelete}>
              Delete
            </Button>
            <Button theme="primary" onClick={onClickRestaurantEdit}>
              Edit
            </Button>
          </div>
        )}
      </div>
    </Link>
  );
};

export default RestaurantCard;
