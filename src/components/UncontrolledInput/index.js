import React, { useRef } from 'react';

export const UncontrolledInput = () => {
  const inputRef = useRef();

  const clickHandler = () => {
    console.log(inputRef.current.value);
    inputRef.current.value = '';
  };

  return (
    <div>
      <input type="text" ref={inputRef} />
      <button onClick={clickHandler}>Click</button>
    </div>
  );
};
