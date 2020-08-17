import React from "react";
import { UsersContext } from "../Context/Users";

export default function UserInfo(props) {
  const { users } = React.useContext(UsersContext);
  const user = users.find((user) => user.id === props.id);
  const { name, id, adress, phone, carNum } = user;
  return (
    <div>
      {" "}
      <h3 className="alert">User Info</h3>
      <div className="grid-5">
        <p className="m-1 p paint-darkSec small-card">
          <span>Name: {name}</span>
        </p>
        <p className="m-1 p paint-darkSec small-card">
          <span>ID: {id}</span>
        </p>
        <p className="m-1 p paint-darkSec small-card">
          <span>Adress: {adress}</span>
        </p>
        <p className="m-1 p paint-darkSec small-card">
          <span>Phone: {phone}</span>
        </p>
        <p className="m-1 p paint-darkSec small-card">
          <span>Car Num: {carNum}</span>
        </p>
        {/* <p className="p paint-darkSec"></p>
      <p className="paint-darkSec">{adress}</p>
      <p className="small-card">{}</p>
      <p className="small-card paint-darkSec">{carNum}</p> */}
        {/* <button onClick={props.toggleInfo}>hide</button> */}
      </div>
    </div>
  );
}
