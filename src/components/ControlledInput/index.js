import React, { useState } from 'react';

export const ControlledInput = () => {
  const [value, setValue] = useState('');

  const changeHandler = (e) => {
    setValue(e.target.value);
  };

  const submitHandler = () => {
    console.log(value);
    setValue('');
  };

  return (
    <div>
      <input
        type="text"
        value={value}
        // onChange={(e) => setValue(e.target.value)}
        onChange={changeHandler}
      />

      <button onClick={submitHandler}>Click</button>
    </div>
  );
};
