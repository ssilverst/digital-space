import React from 'react'
import Home from './components/Home';
import Digital from './components/Digital'
import { Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/digital-garden">
        <Digital />
      </Route>
    </div>
  )
}

export default App;
