import React, { useState } from "react";
import { UsersContext } from "../Context/Users";
// import { CarContext } from "../Context/CarProblems";
import { useParams } from "react-router-dom";
import UserInfo from "../Components/UserInfo";

export default function UserDetails() {
  // const { users } = React.useContext(UsersContext);
  // const { carProblems, addProblem } = React.useContext(CarContext);
  const { id } = useParams();

  const [showInfo, setShoeInfo] = useState(false);
  const [num, setNum] = React.useState();

  const toggleInfo = () => {
    setShoeInfo(!showInfo);
  };

  const handelSubmit = () => {};

  return (
    <div>
      <div>
        <button>history</button>
        <button onClick={toggleInfo}>user details</button>
      </div>{" "}
      <br />
      <div>
        <input
          placeholder="melfunction number"
          value={num}
          onChange={(e) => setNum(e.target.value)}
        ></input>
        <button onClick={handelSubmit}>enter</button>
      </div>
      {showInfo && <UserInfo toggleInfo={toggleInfo} id={id} />}
    </div>
  );
}
