/* eslint-disable jsx-a11y/label-has-associated-control */

import '../ratingStars.css';

const Star = ({
  grade, style, index, changeGradeIndex,
}) => {
  const changeGrade = (e) => {
    changeGradeIndex(e.target.value);
  };

  return (
    <label className="rating-star">
      <input
        type="radio"
        name="rating"
        id={grade}
        value={index}
        className="rating-stars_radio-input"
        onClick={changeGrade}
      />
      <svg
        width="40"
        height="40"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#393939"
        strokeWidth="1"
        strokeLinecap="round"
        strokeLinejoin="round"
        style={style}
      >
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
      </svg>
    </label>
  );
};

export default Star;
