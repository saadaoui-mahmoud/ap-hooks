import React , {useState} from 'react'
import { FaStar } from 'react-icons/fa'

function StarRating() {
    const [rating , setRating]   = useState(null);
    const [hover , setHover]   = useState(null);
    return (
        <div className='star'>
                {[...Array(5)].map((star,i)=>{
                const ratingValue = i+1; 
                
                    return(
                        <label className="rating"  key={`${star}-${i}`}>
                            <input type="radio" 
                            name="rating" 
                            value={ratingValue}
                            onClick={()=>{setRating(ratingValue)}}
                            />

                            <FaStar  
                            className="star"
                            color={ratingValue <= ( hover || rating ) ? "#ffc107" : "#e4e5e9"} 
                            size="20px"
                            onMouseEnter={()=>{setHover(ratingValue)}}
                            onMouseLeave={()=>{setHover(null)}}
                            />
                        </label>
                    )
                }) }     
            </div> 
    )
}

export default StarRating