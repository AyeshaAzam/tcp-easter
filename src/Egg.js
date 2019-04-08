import React from "react";
import "./Egg.css";

const Egg = ({ cracked, onClick }) => {
  if (cracked)
    return (
      <div>
        <div className="container">
          <div className="egg-upper">
            <div className="upperCrack1"> </div>
            <div className="upperCrack2"> </div>
            <div className="upperCrack3"> </div>
            <div className="upperCrack4"> </div>
          </div>
          <div className="egg-lower">
            <div className="crack1"> </div>
            <div className="crack2"> </div>
            <div className="crack3"> </div>
          </div>
        </div>
      </div>
    );

  return <div onClick={onClick} className="egg" />;
};

export default Egg;
