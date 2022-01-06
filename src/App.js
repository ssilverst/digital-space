import React from 'react'
import Home from './components/Home';
import Digital from './components/Digital'
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />}>
        </Route>
        <Route exact path="/digital" element={<Digital />}>
        </Route>
      </Routes>
    </div>
  )
}

export default App;
