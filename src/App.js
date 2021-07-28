import React from 'react';
import {BrowserRouter,Route,Switch} from "react-router-dom";
import {firstRoutes} from './router'

function App() {
  return (
    <BrowserRouter>
      <Switch>
        {firstRoutes.map(item=>(
          <Route key={item.path} {...item} />
        ))}
      </Switch>
    </BrowserRouter>
  );
}

export default App;
