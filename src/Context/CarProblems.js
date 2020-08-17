import React from "react";
import uuid from "react-uuid";

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
  const [carProblems, setProblems] = React.useState([]);

  const addProblem = (pId, uId) => {
    const newProblem = {
      id: pId,
      desc:
        "for now time is a random num between 1-42, and cost a rnd between 1-4200",
      time: Math.floor(Math.random() * 42) + 1,
      cost: Math.floor(Math.random() * 4200) + 1,
      userId: uId,
    };
    setProblems([...carProblems, newProblem]);
  };

  const findUserProblems = (userId, problems) => {
    return problems.filter((p) => p.userId === userId);
  };

  return (
    <CarContext.Provider value={{ carProblems, addProblem, findUserProblems }}>
      {children}
    </CarContext.Provider>
  );
}

export { CarContext, CarProvider };
