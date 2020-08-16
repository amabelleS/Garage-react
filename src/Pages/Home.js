import React, { useState } from "react";
import { UsersContext } from "../Context/Users";
import { Link, useHistory } from "react-router-dom";
import UsersList from "../Components/UsersList";

export default function Home() {
  const history = useHistory();
  const { users, user, setUser } = React.useContext(UsersContext);

  const [id, setId] = useState(true);
  const [carNum, setCarNum] = useState(false);
  const [searchValue, setSearchValue] = useState("");

  const handelSearch = () => {
    if (searchValue === "666") {
      history.push("/admin");
    }
    if (searchValue === user.id) {
      setUser(user.id);
      history.push(`/home/${user.id}`);
    }
    if (searchValue === user.carNum) {
      setUser(user.id);
      history.push(`/home/${user.id}`);
    }
  };

  return (
    <div className="container">
      <div>
        <Link to="/register" className="badge btn-third">
          register
        </Link>{" "}
      </div>
      <br />
      <div className="flex-2">
        <input
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          type="number"
          placeholder={id ? "id" : "car number"}
        ></input>
        <button onClick={handelSearch} className="btn btn-sec btn-sm my-1">
          search
        </button>
      </div>
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
      <UsersList by={id} users={users} />
    </div>
  );
}
