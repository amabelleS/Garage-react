import React from "react";
// import { useLocalStorageState } from "../Hooks/useLocalStorageSate";

const UsersContext = React.createContext();

function UsersProvider({ children }) {
  const [users, setUsers] = React.useState([]);
  // const [user, setUser] = React.useState({});

  const addUser = (user) => {
    setUsers([...users, user]);
    // setUser(user);
  };

  // const updateUserFixList = (userId, fixId) => {
  //   debugger;
  //   const updatedUsers = users.map((user) =>
  //     user.id === userId ? { ...user, toFixId: [...user.toFixId, fixId] } : user
  //   );
  // };

  return (
    <UsersContext.Provider value={{ users, addUser }}>
      {children}
    </UsersContext.Provider>
  );
}

export { UsersContext, UsersProvider };
