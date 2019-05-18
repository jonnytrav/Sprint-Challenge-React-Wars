import React from 'react';
import './StarWars.css';

const StarwarsCharacter = props => {
    return (
        <div>
            <h3>{props.name}</h3>        
        </div>
    );
};

export default StarwarsCharacter;