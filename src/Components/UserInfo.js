import React from "react";
import { UsersContext } from "../Context/Users";

export default function UserInfo(props) {
  const { users } = React.useContext(UsersContext);
  const user = users.find((user) => user.id === props.id);
  const { name, id, adress, phone, carNum } = user;
  return (
    <div>
      <p>{name}</p>
      <p>{id}</p>
      <p>{adress}</p>
      <p>{phone}</p>
      <p>{carNum}</p>
      <button onClick={props.toggleInfo}>hide</button>
    </div>
  );
}
