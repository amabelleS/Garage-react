import React from "react";
import { UsersContext } from "../Context/Users";
import { CarContext } from "../Context/CarProblems";

export default function CarsToFix({ id }) {
  const { carProblems, addProblem } = React.useContext(CarContext);
  //   console.log(carProblems);
  const { user } = React.useContext(UsersContext);
  const userCars = user.id;

  const displayTime = (num) => {
    let hours = num % 9;
    let days = Math.floor(num / 9);
    if (days === 0) return `${hours} hours`;
    if (days === 1 && !hours) return `One ${days}`;
    if (days === 1 && hours) return `One ${days} and ${hours} hours`;
    if (days > 1 && !hours) return `${days} days`;
    if (days > 1 && hours) return `${days} days and ${hours} hours`;
  };

  let totalCost = 0;

  const renderTableData = () => {
    return carProblems.map((car) => {
      const { id, desc, cost, time } = car;
      totalCost += car.cost;
      return (
        <tr key={id}>
          <td>{id}</td>
          <td>{displayTime(time)}</td>
          <td>{cost}</td>
          <td>{desc}</td>
        </tr>
      );
    });
  };

  const renderTableHeader = () => {
    //   let allKeys = Object.keys(carProblems[0]);
    const header = ["ID", "TIME", "COST", "description"];
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