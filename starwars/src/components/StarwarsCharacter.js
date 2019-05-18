import React from 'react';
import './StarWars.css';

const StarwarsCharacter = props => {
    return (
        <div className="characterInner">
            <h3 className="name">{props.name}</h3>
            <p>Gender: {props.gender}</p> 
            <p>Height: {props.height}</p>   
            <p>Mass: {props.mass}</p>    
            <p>Birth Year: {props.birthYear}</p>
        </div>
    );
};

export default StarwarsCharacter;