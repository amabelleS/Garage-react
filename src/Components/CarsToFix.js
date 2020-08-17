import React from "react";
import { CarContext } from "../Context/CarProblems";

export default function CarsToFix({ id }) {
  const { carProblems, findUserProblems } = React.useContext(CarContext);

  const displayTime = (num) => {
    let hours = num % 9;
    let days = Math.floor(num / 9);

    if (days === 0) return `${hours} hours`;
    if (days === 1 && !hours) return `${days} day`;
    if (days === 1 && hours) return `${days} day and ${hours} hours`;
    if (days > 1 && !hours) return `${days} days`;
    if (days > 1 && hours) return `${days} days and ${hours} hours`;
  };

  let totalCost = 0;
  const userProblems = findUserProblems(id, carProblems);

  const renderTableData = () => {
    return userProblems.map((car, i) => {
      const { id, desc, cost, time } = car;
      totalCost += car.cost;
      return (
        <tr key={i}>
          <td>{id}</td>
          <td>{displayTime(time)}</td>
          <td>{cost}</td>
          <td>{desc}</td>
        </tr>
      );
    });
  };

  const renderTableHeader = () => {
    //   const allKeys = Object.keys(carProblems[0]);
    const header = ["ID", "DURATION", "COST", "description"];
    return header.map((k, i) => {
      return <th key={i}>{k}</th>;
    });
  };

  return (
    <div>
      <table className="table">
        <tbody>
          <tr>{renderTableHeader()}</tr>
          {renderTableData()}
        </tbody>
      </table>
      <h3 className="alert">Total car fixing cost: {totalCost}</h3>
    </div>
  );
}
