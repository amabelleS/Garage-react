import React, { useState } from "react";
// import { UsersContext } from "../Context/Users";
import { CarContext } from "../Context/CarProblems";
import { useParams } from "react-router-dom";
import UserInfo from "../Components/UserInfo";
import CarsToFix from "../Components/CarsToFix";
import FixInfo from "../Components/FixInfo";

export default function UserDetails() {
  // const { users, updateUserFixList } = React.useContext(UsersContext);
  const { carProblems, addProblem, findUserProblems } = React.useContext(
    CarContext
  );

  const { id } = useParams();
  // const user = users.find((user) => user.id === id);
  const userProblems = findUserProblems(id, carProblems);

  const [showInfo, setShowInfo] = useState(false);
  const [showCars, setShowCars] = useState(false);
  const [showCarDetail, setShowCarDetails] = useState(false);
  const [searchValue, setSearchValue] = useState();

  const toggleInfo = () => {
    setShowInfo(!showInfo);
  };
  const toggleCars = () => {
    setShowCars(!showCars);
  };

  const isProblem = () => {
    return userProblems.filter((p) => p.id === searchValue).length > 0;
  };

  const handelSubmit = () => {
    if (isProblem()) {
      setShowCarDetails(!showCarDetail);
      if (showCarDetail && !searchValue) setShowCarDetails(!showCarDetail);
    } else if (searchValue && !isProblem()) {
      alert("adding...");
      addProblem(searchValue, id);
    } else alert("pls enter search value");
  };

  return (
    <div>
      <div>
        <button className="btn btn-sec" onClick={toggleCars}>
          {showCars ? "hide history" : "fix history"}
        </button>
        <button className="btn btn-third" onClick={toggleInfo}>
          {!showInfo ? "user details" : "hide info"}
        </button>
      </div>{" "}
      <br />
      <div className="flex-2">
        <input
          type="number"
          placeholder="melfunction number"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
        ></input>
        <button className="btn btn-primary btn-radius" onClick={handelSubmit}>
          {searchValue
            ? isProblem()
              ? showCarDetail
                ? "hide"
                : "show"
              : "add"
            : "enter"}
        </button>
      </div>
      {showInfo && <UserInfo id={id} />}
      {searchValue && showCarDetail ? (
        <FixInfo id={searchValue} carProblems={carProblems} />
      ) : (
        ""
      )}
      {showCars && <CarsToFix id={id} />}
    </div>
  );
}
