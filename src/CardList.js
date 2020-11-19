import React from 'react';
import Card from './card';

const CardList = ({ robots }) => {
    const cardsArray = robots.map((user, i) => {
        return <Card id={robots[i].id} name={robots[i].name} email={robots[i].email}/>
    })
return (
    <div>
        {cardsArray}
    </div>
);
    
}

export default CardList;


// when we want to do a loop, always use map bcos second parameter for map is index