import React from 'react'
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom';
import UseRef from './Components/UseRef';

function App() {
  return (
    <BrowserRouter>
    <Router>
      <Routes>
        <Route path="/" element={<UseRef />} />
      </Routes>
    </Router>
    </BrowserRouter>
  );
}
export default App;
