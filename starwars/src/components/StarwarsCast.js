import React from 'react';
import StarwarsCharacter from './StarwarsCharacter';

const StarwarsCast = props => {
    return (
        <div>
            {props.cast.map((char, i) => {
                return (
                    <div key={i}>
                        <StarwarsCharacter name={char.name} />
                    </div>
                );
            })}
        </div>
    );
};

export default StarwarsCast;
