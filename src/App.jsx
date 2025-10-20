import React from 'react'
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom';
import UseRef from './Components/UseRef';

function App() {
  return (
    <BrowserRouter>
    
      <Routes>
        <Route path="/" element={<UseRef />} />
      </Routes>

    </BrowserRouter>
  );
}
export default App;
