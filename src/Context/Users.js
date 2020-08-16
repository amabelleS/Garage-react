import React from "react";
// import { useLocalStorageState } from "../Hooks/useLocalStorageSate";

const UsersContext = React.createContext();

function UsersProvider({ children }) {
  const [users, setUsers] = React.useState([]);
  const [user, setUser] = React.useState({});

  const addUser = (user) => {
    setUsers([...users, { ...user, toFixId: [] }]);
    setUser(user);
  };

  return (
    <UsersContext.Provider value={{ users, user, addUser, setUser, setUsers }}>
      {children}
    </UsersContext.Provider>
  );
}

export { UsersContext, UsersProvider };
