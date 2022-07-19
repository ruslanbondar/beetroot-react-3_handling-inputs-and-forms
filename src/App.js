import React from 'react';

import { ControlledInput } from './components/ControlledInput';
import { UncontrolledInput } from './components/UncontrolledInput';
import { TestForm } from './components/TestForm';

const App = () => {
  return (
    <div>
      <ControlledInput />
      <UncontrolledInput />
      <TestForm />
    </div>
  );
};

export default App;
