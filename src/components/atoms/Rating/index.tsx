import React from 'react';
import StarRatingComponent from 'react-star-rating-component';

type RatingProps = {
  className?: string;
  name: string;
  setRating: (number: number) => void;
  rating: number;
  starSize?: number;
};

const Rating = ({
  className,
  name,
  setRating,
  rating,
  starSize = 25,
}: RatingProps) => {
  const style = {
    fontSize: `${starSize}px`,
  } as React.CSSProperties;

  return (
    <div className={className} style={style}>
      <StarRatingComponent
        onStarClick={setRating}
        name={name}
        starCount={5}
        value={rating}
      />
    </div>
  );
};

export default Rating;
