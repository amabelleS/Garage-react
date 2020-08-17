import React from "react";
import PropTypes from "prop-types";

export default function FixInfo({ id = carProblems[0].id, carProblems }) {
  const fix = carProblems.find((f) => f.id === id);
  return (
    <div className="small-card flex-col">
      <h3 className="text-primary">FIX INFO</h3>
      <p>
        <span>ID: </span>
        {fix && fix.id}
      </p>
      <p>
        <span>DESCRIPTION: </span>
        {fix && fix.desc}
      </p>
      <p>
        <span>COST: </span>
        {fix && fix.cost}
      </p>
      <p>
        <span>DURATION: </span>
        {fix && fix.time}
      </p>
    </div>
  );
}

FixInfo.propTypes = {
  id: PropTypes.number,
  carProblems: PropTypes.array,
};
