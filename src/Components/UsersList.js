import React from "react";
import { Link } from "react-router-dom";

export default function UsersList({ users, by }) {
  let list = () => {
    if (by) {
      return (
        <div>
          {users.map((user) => (
            <Link to={`/home/${user.id}`} className="card">
              {user.id}{" "}
            </Link>
          ))}
        </div>
      );
    } else {
      return (
        <div>
          {users.map((user) => (
            <Link to={`/home/${user.id}`} className="card">
              {user.carNum}{" "}
            </Link>
          ))}
        </div>
      );
    }
  };

  return <div> {list()}</div>;
}
