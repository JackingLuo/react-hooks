import React from 'react';
import {HashRouter} from 'react-router-dom';
import {renderRoutes} from 'react-router-config';

import myRoutes from './router';

function App() {
  return (
      <HashRouter>
        {renderRoutes(myRoutes)}
      </HashRouter>
  );
}

export default App;
