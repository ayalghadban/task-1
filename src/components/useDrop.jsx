import { useState } from 'react';

const useDrop = (state1) => {
  const [state, setState] = useState(state1);
  const handleChange = (value) => {
    setState(value);
  };
  return [state, handleChange];
};

export default useDrop;
