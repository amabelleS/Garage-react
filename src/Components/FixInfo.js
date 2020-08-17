import React from "react";
import PropTypes from "prop-types";

export default function FixInfo({ id = carProblems[0].id, carProblems }) {
  const displayTime = (num) => {
    let hours = num % 9;
    let days = Math.floor(num / 9);

    if (days === 0) return `${hours} hours`;
    if (days === 1 && !hours) return `${days} day`;
    if (days === 1 && hours) return `${days} day and ${hours} hours`;
    if (days > 1 && !hours) return `${days} days`;
    if (days > 1 && hours) return `${days} days and ${hours} hours`;
  };

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
        {fix && displayTime(fix.time)} /{fix && fix.time} working hours
      </p>
    </div>
  );
}

FixInfo.propTypes = {
  id: PropTypes.number,
  carProblems: PropTypes.array,
};
