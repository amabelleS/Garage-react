import React from "react";
import uuid from "react-uuid";
import { UsersContext } from "../Context/Users";

const mockProblem = [
  {
    id: uuid(),
    desc:
      "demo item - showing the date before adding admin logic. this.timeAsInArray = 24",
    time: 24,
    cost: 77,
  },
  {
    id: uuid(),
    desc: "this.timeAsInArray = 42 (ui required 9 hours => 1 day)",
    time: 42,
    cost: 879,
  },
];

const CarContext = React.createContext();

function CarProvider({ children }) {
  const [carProblems, setProblems] = React.useState([...mockProblem]);

  const { setUsers } = React.useContext(UsersContext);

  const addProblem = (n, id) => {
    setProblems([
      ...carProblems,
      {
        id: n,
        desc: "lorem sed risus ultricies tristique nulla",
        time: 0,
        cost: 77,
        userId: id,
      },
    ]);
  };

  return (
    <CarContext.Provider value={{ carProblems, addProblem }}>
      {children}
    </CarContext.Provider>
  );
}

export { CarContext, CarProvider };
