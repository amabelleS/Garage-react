import React from "react";
import { UsersContext } from "../Context/Users";

export default function UserInfo(props) {
  const { users } = React.useContext(UsersContext);
  const user = users.find((user) => user.id == props.id);
  const { name, id, adress, phone, carNum } = user;
  return (
    <div>
      <p>{user.name}</p>
      <p>{user.id}</p>
      <p>{user.adress}</p>
      <p>{user.phone}</p>
      <p>{user.carNum}</p>
      <button onClick={props.toggleInfo}>hide</button>
    </div>
  );
}
