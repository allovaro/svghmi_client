/* eslint-disable jsx-a11y/heading-has-content */
/* eslint-disable jsx-a11y/label-has-associated-control */
import { useState } from 'react';
import Star from './star/star';

import './ratingStars.css';

const RatingStars = () => {
  const [gradeIndex, setGradeIndex] = useState();
  const GRADES = ['Poor', 'Fair', 'Good', 'Very good', 'Excellent'];
  const activeStar = {
    fill: 'yellow',
  };

  const changeGradeIndex = (index) => {
    setGradeIndex(index);
  };

  return (
    <div className="rating-padding">
      <div className="rating-container">
        <h5 className="rating-result">{ GRADES[gradeIndex] ? GRADES[gradeIndex] : 'Please review how do you like this app'}</h5>
        <div className="rating-stars">
          {
            GRADES.map((grade, index) => (
              <Star
                index={index}
                key={grade}
                changeGradeIndex={changeGradeIndex}
                style={gradeIndex >= index ? activeStar : {}}
              />
            ))
          }
        </div>
      </div>
    </div>
  );
};

export default RatingStars;
