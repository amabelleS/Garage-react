import React, { useState } from "react";
import { UsersContext } from "../Context/Users";
import { CarContext } from "../Context/CarProblems";
import { useParams } from "react-router-dom";
import UserInfo from "../Components/UserInfo";
import CarsToFix from "../Components/CarsToFix";
import FixInfo from "../Components/FixInfo";

export default function UserDetails() {
  const { users, setUsers } = React.useContext(UsersContext);
  const { carProblems, addProblem } = React.useContext(CarContext);

  const { id } = useParams();
  const user = users.find((user) => user.id === id);

  const [showInfo, setShowInfo] = useState(false);
  const [showCars, setShowCars] = useState(false);
  const [toggleCarDetail, setToggleCarDetails] = useState(false);
  const [searchValue, setSearchValue] = React.useState();

  const toggleInfo = () => {
    setShowInfo(!showInfo);
  };
  const toggleCars = () => {
    setShowCars(!showCars);
  };

  const isProblem = () => {
    return user.toFixId.includes(searchValue);
  };

  const handelSubmit = () => {
    if (isProblem()) {
      setToggleCarDetails(!toggleCarDetail);
    } else {
      alert("adding...");
      addProblem(searchValue, id);

      let updatedUsers = users.map((user) =>
        user.id === id
          ? { ...user, toFixId: [...user.toFixId, searchValue] }
          : user
      );
      setUsers(updatedUsers);
    }
  };

  return (
    <div>
      <div>
        <button className="btn btn-sec" onClick={toggleCars}>
          history
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
            ? user.toFixId
              ? `${isProblem() ? "show" : "add"}`
              : "add"
            : "enter"}
        </button>

        <div>
          {toggleCarDetail && <FixInfo id={searchValue} cars={carProblems} />}
        </div>
      </div>
      {showInfo && <UserInfo toggleInfo={toggleInfo} id={id} />}
      {showCars && <CarsToFix id={id} />}
    </div>
  );
}
