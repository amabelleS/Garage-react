import React from "react";

const UsersContext = React.createContext();

function UsersProvider({ children }) {
  const [users, setUsers] = React.useState([]);
  // const [user, setUser] = React.useState({});

  // const userLogin = (user) => {
  //   setUser(user);
  // localStorage.setItem("user", JSON.stringify(user));
  // };

  const addUser = (user) => {
    setUsers([...users, user]);
  };

  return (
    <UsersContext.Provider value={{ users, addUser }}>
      {children}
    </UsersContext.Provider>
  );
}

export { UsersContext, UsersProvider };
