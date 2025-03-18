import React from 'react';

const QuoutesComponent = ({text}) => {
    return (
        <div className='quoat-container'>
           
            <div className='marker'>

            </div>
            <div className='header'>
                <i>"{text}"</i>
            </div>
        </div>
      
    )
}

export default QuoutesComponent;