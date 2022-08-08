import React, { useEffect, useState } from 'react';

export default function Rating(props) {

    const [stars, setStars] = useState([]);

    const rating = props.rating;

    const [real, setReal] = useState(rating);

    useEffect(() => {
        const tempStars = [];
        for(let i = 0; i < 5; i++) {
            let classname = 'star-rating__star';
            
            if (real >= i && real != null) {
                classname += ' is-selected';
            }
      
            tempStars.push(
              <label key={i} className={classname}>★</label>
            );
        }
        setStars(tempStars)
    }, [])

   

    return (
        <div className="star-rating">
            {stars}
        </div>
    )
}
