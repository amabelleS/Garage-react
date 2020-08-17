import React from "react";
// import { CarContext } from "../Context/CarProblems";

export default function FixInfo({ id, carProblems }) {
  const fix = carProblems.find((f) => f.id === id);
  return (
    <div className="small-card flex-col">
      <h3 className="text-primary">FIX INFO</h3>
      <p>
        <span>ID: </span>
        {fix.id}
      </p>
      <p>
        <span>DESCRIPTION: </span>
        {fix.desc}
      </p>
      <p>
        <span>COST: </span>
        {fix.cost}
      </p>
      <p>
        <span>DURATION: </span>
        {fix.time}
      </p>
    </div>
  );
}
