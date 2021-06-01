import React from 'react';
import './Card.css'
const Card = (props) =>{
    const{id, name, email} = props;
    return (
        <div className="tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
            <img alt='robots' src={`https://robohash.org/${id}?size=220x200`}/>
            <div>
                <h2>{name}</h2>
                <p className="serif f5 lh-copy">{email}</p>
            </div>
        </div>
    );
}

export default Card;
