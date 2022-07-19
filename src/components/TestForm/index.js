import React, { useState } from 'react';

export const TestForm = () => {
  const [name, setName] = useState('');
  const [age, setAge] = useState(0);
  const [learnsReact, setLearnsReact] = useState(false);

  const sendData = (e) => {
    e.preventDefault();

    const data = {
      name,
      age,
      learnsReact,
    };

    console.log(data);
  };

  return (
    <form onSubmit={sendData}>
      <label>
        <span>Name:</span>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>

      <label>
        <span>Age:</span>
        <input
          type="number"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
      </label>

      <label>
        <span>Learns React</span>
        <input
          type="checkbox"
          checked={learnsReact}
          onChange={(e) => setLearnsReact(e.target.checked)}
        />
      </label>

      <button type="submit">Submit</button>
    </form>
  );
};
