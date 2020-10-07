import React from "react";
import CountUp from 'react-countup'

function Card(prop) {
  return (
    <div className="track_card" style={{borderLeft: `0.35rem solid ${prop.color}` }}>
      <h5>{prop.title}</h5>
      <p><CountUp start={0} end={Number(prop.figure)} delay={1} duration={2}/></p>
    </div>
  );
}

export default Card;
