import React from 'react';
import StarRatingComponent from 'react-star-rating-component';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

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
  starSize = 45,
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
        starColor="#ffb300"
        emptyStarColor="#ffb300"
        value={rating}
        renderStarIcon={(index, value) => {
          return (
            <span>
              <i
                className={
                  index <= value ? 'fas fa-star' : 'far fa-star'
                }
              />
            </span>
          );
        }}
        renderStarIconHalf={() => {
          return (
            <span>
              <span style={{ position: 'absolute' }}>
                <i className="far fa-star" />
              </span>
              <span>
                <i className="fas fa-star-half" />
              </span>
            </span>
          );
        }}
      />
    </div>
  );
};

export default Rating;
