import React from 'react';


const card =  ({ name, email, id }) => {
    return (
    //only one div here
        <div className='tc bg-light-green dib br3  pa3 ma2 grow bw2 shadow-5'>
            <img alt='robots' src={`https://robohash.org/test${id}?200*200`} />
            {/* src has template string ` ` to randomize the robots */}
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    );

    }
export default card;