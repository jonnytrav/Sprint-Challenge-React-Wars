import React from 'react';
import StarwarsCharacter from './StarwarsCharacter';

const StarwarsCast = props => {
    return (
        <div className="cast-list">
            {props.cast.map((char, i) => {
                return (
                    <div className="characterOuter"key={i}>
                        <StarwarsCharacter 
                            name={char.name} 
                            gender={char.gender}
                            height={char.height}
                            mass={char.mass}
                            birthYear={char.birth_year}
                        />
                    </div>
                );
            })}
        </div>
    );
};

export default StarwarsCast;
