import React from 'react';

import styles from './index.module.scss';
import { ReactComponent as ReviewStar } from 'src/img/icons/review-star.svg';
import Container from 'components/atoms/Container';

type RestaurantHeroProps = {
  averageRating: number;
  image: string;
  location: string;
  title: string;
  totalReviews: number;
};

const RestaurantHero = ({
  averageRating,
  image,
  location,
  title,
  totalReviews,
}: RestaurantHeroProps) => {
  const style = {
    '--url': `url(${image})`,
  } as React.CSSProperties;

  return (
    <header className={styles.restaurantHero} style={style}>
      <Container>
        <h1>{title}</h1>
        <div className={styles.ratingsContainer}>
          <ReviewStar />
          {averageRating && (
            <span className={styles.ratingText}>
              {/* TODO: Move to graphql */}
              {averageRating.toFixed(2)} stars from {totalReviews}{' '}
              reviews
            </span>
          )}
        </div>
        <div className={styles.location}>
          <span>
            <span className={styles.locatedAt}>Located At:</span>
            <b> {location}</b>
          </span>
        </div>
      </Container>
    </header>
  );
};

export default RestaurantHero;
