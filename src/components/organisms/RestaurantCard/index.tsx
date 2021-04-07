import React from 'react';
import { Link } from '@reach/router';
import { RestaurantFragment } from 'generated/graphql';
import Rating from 'components/atoms/Rating';
import CardContainer from 'components/atoms/CardContainer';
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

  return (
    <CardContainer className={styles.root}>
      {averageRating && (
        <Rating
          canEdit={false}
          name={`${title} rating`}
          rating={averageRating}
        />
      )}
      <span className="large-body">{title}</span>
      <p>{description}</p>
      <div className={styles.buttonContainer}>
        <Link to={`/restaurant/${id}`}>
          <span className="button success">View</span>
        </Link>
        {canModify && (
          <>
            <Button theme="danger" onClick={onClickRestaurantDelete}>
              Delete
            </Button>
            <Link to={`/restaurant/edit/${id}`}>
              <span className="button primary">Edit</span>
            </Link>
          </>
        )}
      </div>
    </CardContainer>
  );
};

export default RestaurantCard;
