import React, { createContext, useState } from 'react';

export const RandomContext = createContext({
  int: 0,
  text: "text",
});

const Provider = ({ children }) => {
  const [int, setInt] = useState(0);
  const [text, setText] = useState("text");

  return (
    <RandomContext.Provider value={[{ int, text }, { setInt, setText }]} >
      {children}
    </RandomContext.Provider>
  );
};

export default Provider;
