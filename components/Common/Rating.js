import React, { useCallback, useEffect, useState } from "react";

const range = (min, max) =>
  Array(max - min + 1).fill().map((_, i) => min + i)


const RatingItem  = ({ checked, colored, onChange, value }) => (
  <label className={`rating__item ${colored ? 'rating__item--selected' : ''}`}>
    <input
      checked={checked}
      className='rating__input'
      onChange={(e) => onChange(value)}
      type="radio"
      value={value}
    />
  </label>
)

const RatingComponent = ({ min, max, onChange, value }) => {
  return (
    <span className='rating'>
      {
        range(min, max).map((item, idx) => (
          <RatingItem
            key={idx}
            colored={value >= item}
            checked={value === item}
            value={item}
            onChange={onChange}
          />
        ))
      }
    </span>
  )
}

export default function Rating(props){

    const { edit, setRating, rating } = props;

    return (
        edit? 
        <RatingComponent
            min={1}
            max={5}
            onChange={(val) => setRating(val)}
            value={rating}
        /> : 
        <RatingComponent
            min={1}
            max={5}
            onChange={() => {}}
            value={rating}
        /> 
    )
}
