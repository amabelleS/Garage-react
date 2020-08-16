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

  const { addUser } = React.useContext(UsersContext);

  //erroes
  // const writeError = (err) => {
  //   setError(err);
  // };

  //validations:
  const okName = () => {
    if (!isNaN(name)) {
      setError("badName");
      // alert("bad name");
      return false;
    }
    return true;
  };

  const okId = () => {
    if (isNaN(id) || id.length !== 9) {
      setError("wrong id");
      // alert("wrong id");
      return false;
    } else {
      return true;
    }
  };

  const okCarNum = () => {
    if (!carNum || isNaN(carNum)) {
      setError("wrong carNum");
      return false;
    } else {
      return true;
    }
  };

  const okPhone = () => {
    if (isNaN(phone) || phone.length < 7) {
      setError("wrong phone");
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
    if (validateAll()) {
      let user = { name, id, adress, phone, carNum };
      addUser(user);
      history.push("/");
    }
  };
  return (
    <div className="">
      <h1 className="text-primary">new client</h1>
      <div>
        {error && <p>{error}</p>}
        <input
          placeholder="full name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          type="text"
        ></input>
        <br />
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
