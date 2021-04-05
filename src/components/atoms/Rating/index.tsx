import React from 'react';
import StarRatingComponent from 'react-star-rating-component';

type RatingProps = {
  className?: string;
  canEdit?: boolean;
  name: string;
  setRating?: (number: number) => void;
  rating: number;
  starSize?: number;
};

const Rating = ({
  className,
  canEdit = true,
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
        editing={canEdit}
        onStarClick={setRating}
        name={name}
        starCount={5}
        value={rating}
      />
    </div>
  );
};

export default Rating;
