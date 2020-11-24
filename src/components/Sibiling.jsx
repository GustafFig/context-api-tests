import React, { useContext } from 'react';
import { RandomContext } from '../context';

const Sibiling = () => {
  const [{ int, text }] = useContext(RandomContext);

  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <p>Inteiro: {int}</p>
      <p>Float: {text}</p>
    </div>
  );
};

export default Sibiling;
