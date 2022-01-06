import React from 'react'
import Home from './components/Home';
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div>
      <Routes>
        <Route exact path="/digital-space">
          <Home />
        </Route>
      </Routes>
    </div>
  )
}

export default App;
