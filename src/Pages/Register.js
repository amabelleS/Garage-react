import React, { useState } from "react";
import { UsersContext } from "../Context/Users";
import { useHistory } from "react-router-dom";

export default function Register() {
  const history = useHistory();

  const [name, setName] = useState("");
  const [id, setId] = useState("");
  const [adress, setAdress] = useState("");
  const [phone, setPhone] = useState("");
  const [carNum, setCarNaum] = useState("");
  const [error, setError] = useState();

  const { isUserIdOnList, addUser } = React.useContext(UsersContext);

  //validations:
  const okName = () => {
    if (!isNaN(name)) {
      setError("enter your name");
      return false;
    }
    return true;
  };

  const okId = () => {
    if (isNaN(id) || id.length !== 9) {
      setError("ID must be 9 digits long");
      return false;
    } else {
      return true;
    }
  };

  const okCarNum = () => {
    if (!carNum || isNaN(carNum)) {
      setError("enter your car number");
      return false;
    } else {
      return true;
    }
  };

  const okPhone = () => {
    if (isNaN(phone) || phone.length < 7) {
      setError("phone number must be at least 7 digits long");
      return false;
    } else {
      return true;
    }
  };

  const okAdress = () => {
    if (!adress.length > 0) {
      setError("enter adress");
      return false;
    } else return true;
  };

  const validateAll = () => {
    if (okName() && okId() && okAdress() && okPhone() && okCarNum()) {
      return true;
    } else return false;
  };

  const handelSubmit = () => {
    setError("");
    if (isUserIdOnList(id)) {
      alert("This ID already exist in repo");
    } else if (!isUserIdOnList(id) && validateAll()) {
      let user = { name, id, adress, phone, carNum };
      addUser(user);
      history.push("/");
    }
  };
  return (
    <div className="">
      <h1 className="text-primary">new client</h1>
      <div>
        {error && <p className="text-danger card lead">{error}</p>}
        <input
          placeholder="full name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          type="text"
        ></input>
        <br />
        {/* {!okName() && <h4 style={{ color: "red" }}>some chars...</h4>} */}
        <input
          placeholder="id"
          value={id}
          onChange={(e) => setId(e.target.value)}
          type="number"
        ></input>
        <br />
        <input
          placeholder="adress"
          value={adress}
          onChange={(e) => setAdress(e.target.value)}
          type="text"
        ></input>
        <br />
        <input
          placeholder="phone number"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          type="number"
        ></input>
        <br />
        <input
          placeholder="car number"
          value={carNum}
          onChange={(e) => setCarNaum(e.target.value)}
          type="number"
        ></input>
      </div>
      <button className="btn btn-primary" onClick={handelSubmit}>
        regisater
      </button>
    </div>
  );
}
