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

  const isUserOnListById = (id) => {
    return users.filter((user) => user.id === id).length > 0;
  };

  const isUserOnListByCarNum = (num) => {
    return users.filter((user) => user.carNum === num).length > 0;
  };

  const findUserById = (id) => {
    return users.find((user) => user.id === id);
  };

  const findUserByCarNum = (num) => {
    return users.find((user) => user.carNum === num);
  };

  // const updateUserFixList = (userId, fixId) => {
  //   debugger;
  //   const updatedUsers = users.map((user) =>
  //     user.id === userId ? { ...user, toFixId: [...user.toFixId, fixId] } : user
  //   );
  // };

  return (
    <UsersContext.Provider
      value={{
        users,
        addUser,
        setUser,
        user,
        isUserOnListById,
        isUserOnListByCarNum,
        findUserByCarNum,
        findUserById,
      }}
    >
      {children}
    </UsersContext.Provider>
  );
}

export { UsersContext, UsersProvider };
