import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import UseRef from './Components/UseRef'
import UserAuth from './Context/useContext';
import Login from './Components/Login';
import { UserActivity } from './Context/userActivity';
import UserInput from './Components/userInput';

function App() {
  return (
    <>
    {<UserAuth>
      <UserActivity>
      <Login/>
      <UserInput/>
      </UserActivity>
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
