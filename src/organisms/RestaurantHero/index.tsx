import React from 'react';

import styles from './index.module.scss';
import { ReactComponent as ReviewStar } from 'src/img/icons/review-star.svg';
import Container from 'atoms/Container';

type RestaurantHeroProps = {
  averageRating: number,
  image: string,
  location: string,
  title: string,
  totalReviews: number,
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
  console.log('maybe', ReviewStar);
  console.log('styles', styles);
  // TODO: Move to graphql
  // const formattedAverageRating = averageRating.toFixed(2);
  return (
    <header className={styles.restaurantHero} style={style}>
      <Container>
        <h1>{title}</h1>
        <div className={styles.ratingsContainer}>
          <ReviewStar />
          <span className={styles.ratingText}>
            {averageRating} stars from {totalReviews} reviews
          </span>
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
