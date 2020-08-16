import React from "react";
// import { CarContext } from "../Context/CarProblems";

export default function FixInfo({ id, cars }) {
  const fix = cars.find((car) => (car.id = id));
  console.log(fix);
  // TO FIX!!
  return (
    <div className="btn">
      <p>{fix.id}</p>
      <p>{fix.desc}</p>
      <p>{fix.cost}</p>
      <p>{fix.time}</p>
    </div>
  );
}
