import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import UseRef from './Components/UseRef'
import UserAuth from './Context/useContext';
import Login from './Components/Login';

function App() {
  return (
    <>
    {<UserAuth>
      <Login/>
      </UserAuth>}
    {/* <BrowserRouter>
    
      <Routes>
        <Route path="/" element={<UseRef />} />
      </Routes>
    </BrowserRouter> */}
    </>
  );
}
export default App;
