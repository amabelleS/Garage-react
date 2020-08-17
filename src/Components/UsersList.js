import React from "react";
import { Link } from "react-router-dom";

export default function UsersList({ users, by }) {
  let list = () => {
    if (by) {
      return (
        <div>
          {users.map((user, i) => (
            <Link key={i} to={`/home/${user.id}`} className="card-1">
              {user.id}{" "}
            </Link>
          ))}
        </div>
      );
    } else {
      return (
        <div>
          {users.map((user) => {
            return (
              <div key={user.id}>
                <Link to={`/home/${user.id}`} className="card-1">
                  {user.carNum}{" "}
                </Link>{" "}
              </div>
            );
          })}
        </div>
      );
    }
  };

  return <div> {list()}</div>;
}
