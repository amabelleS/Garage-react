import React from "react";
// import { useLocalStorageState } from "../Hooks/useLocalStorageSate";

const UsersContext = React.createContext();

function UsersProvider({ children }) {
  const [users, setUsers] = React.useState([]);
  const [user, setUser] = React.useState({});

  const addUser = (u) => {
    setUsers([...users, u]);
    setUser(u);
  };

  const isUserIdOnList = (id) => {
    return users.filter((user) => user.id === id).length > 0;
  };

  // const updateUserFixList = (userId, fixId) => {
  //   debugger;
  //   const updatedUsers = users.map((user) =>
  //     user.id === userId ? { ...user, toFixId: [...user.toFixId, fixId] } : user
  //   );
  // };

  return (
    <UsersContext.Provider
      value={{ users, addUser, setUser, user, isUserIdOnList }}
    >
      {children}
    </UsersContext.Provider>
  );
}

export { UsersContext, UsersProvider };
