import React from "react";

const CarContext = React.createContext();

const mockProblem = [{ num: 1, desc: "bad", time: "2 days", cost: 77 }];

function CarProvider({ children }) {
  const [carProblems, setProblems] = React.useState(mockProblem);

  const addProblem = (p) => {
    setProblems([...carProblems, p]);
  };

  return (
    <CarContext.Provider value={{ carProblems, addProblem }}>
      {children}
    </CarContext.Provider>
  );
}

export { CarContext, CarProvider };
