import React from "react";
import CountUp from 'react-countup'

function Card(prop) {
  return (
    <div className="track_card" style={{borderBottom: `0.25rem solid ${prop.color}` }}>
      <h5>{prop.title}</h5>
      <p><CountUp start={0} end={prop.figure}/></p>
    </div>
  );
}

export default Card;
