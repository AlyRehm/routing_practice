import React from 'react'
import { useParams } from 'react-router-dom';


const Other = (props) => {
    {/* need to destructure to be able to get to the parameters in the routes */}
    const {word, color, bgColor} = useParams();

    return (
        <div>
        
            {
                // is it  a number? use isNaN (is not a number). creates a boolean
                isNaN(word)?
                // use inline CSS to determine colors
                <h3 style={
                    color?
                    {color: color, backgroundColor: bgColor}
                    // if it's not a color, then ignore with null
                    :null
                }>
                    The word is: {word}
                </h3>
                // else
                :
                <h3>
                    This number is: {word}
                </h3>
            }



        </div>
    )
}

export default Other