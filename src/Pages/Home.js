import React, { useState } from "react";
import { UsersContext } from "../Context/Users";
import { Link } from "react-router-dom";
import usersList from "../Components/UsersList";
import UsersList from "../Components/UsersList";

export default function Home() {
  const { users, userLogin } = React.useContext(UsersContext);

  const [id, setId] = useState(true);
  const [carNum, setCarNum] = useState(false);
  //   const [isId, setIsid] = useState(true);

  //   const showUsersBy = () => {
  //     if (id) {
  //       return <UsersList by={id} users={users} />;
  //     } else {
  //       return <UsersList by={carNum} users={users} />;
  //     }
  //   };

  const handleChange = () => {
    userLogin(id ? id : carNum);
  };

  return (
    <div className="container">
      <div>
        <Link to="/register" className="btn">
          register
        </Link>{" "}
      </div>
      <input placeholder={id ? "id" : "car number"}></input>
      <div className="form-group">
        <div>
          <input
            type="checkbox"
            name="id"
            id="id"
            checked={id}
            onChange={(e) => {
              setId(e.target.checked);
              setCarNum(false);
            }}
          />
          <label>id</label>
        </div>
        <div>
          <input
            type="checkbox"
            name="carNum"
            id="carNum"
            checked={carNum}
            onChange={(e) => {
              setCarNum(e.target.checked);
              setId(false);
            }}
          />
          <label htmlFor="carNum">car number</label>
        </div>
      </div>
      {/* <button onClick={showUsersBy()}>list</button> */}
      <UsersList by={id} users={users} />
    </div>
  );
}
