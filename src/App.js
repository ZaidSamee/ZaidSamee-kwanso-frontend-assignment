import Routes from './router/index';
import React, { Suspense } from 'react';

const App = () => {

  return (
    <Suspense fallback={<h2>Loading</h2>}>
      <Routes />
    </Suspense>

  )
}
export default App;
