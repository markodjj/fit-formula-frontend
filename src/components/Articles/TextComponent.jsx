import React from 'react';
import FormatText from "../../utils/FormatText"

const TextComponenet = ({ text }) => {
    return (
        <div>
          {text.split('\n').map((line, index) => (
            <p key={index}><FormatText text={line} /></p>
          ))}

        <style>
          
        </style>
        </div>
          
      );
    
 
}

export default TextComponenet;