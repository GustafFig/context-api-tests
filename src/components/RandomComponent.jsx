import React, { useState, useEffect, useContext } from 'react';
import { RandomContext } from '../context';

const RandomComponent = () => {
  const [{ int, text }, { setInt, setText }] = useContext(RandomContext);
  const [newInt, setNewInt] = useState(int);
  const [newText, setNewText] = useState(text);

  useEffect(() => {
    setInt(newInt);
  }, [newInt, setInt]);

  useEffect(() => {
    setText(newText);
  }, [newText, setText]);

  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <input type="number" data-testid="number-input" value={newInt} onChange={({ target }) => setNewInt(target.value)} />
      <input type="text" data-testid="text-input" value={newText} onChange={({ target }) => setNewText(target.value)} />
    </div>
  );
};

export default RandomComponent;
