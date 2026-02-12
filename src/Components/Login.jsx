import { useContext, useRef } from "react";
import { userData1 } from "../Context/useContext";
import HandleSubmit from "../Utils/userValidate";
import UserInput from "./userInput";

export default function Login() {
  const { userDetails, setUserDetails } = useContext(userData1);
  const usernameRef = useRef();
  const ageRef = useRef();

  return (
    
    <div className="flex flex-col items-center justify-center min-h-screen">
      {userDetails.userId ? (
      
        <div className="bg-white/80 backdrop-blur-lg shadow-xl rounded-2xl p-8 w-full max-w-md transition-transform transform hover:scale-[1.02]">
          <h1 className="text-3xl font-semibold text-center text-blue-700 mb-6 tracking-wide">
            Welcome User logged in : {userDetails.userId}
            <UserInput/>
            {/* <UserInput value={state,dispatch}/> */}
          
          </h1>

        </div>
      ) : (
        
          <>
          <div className="flex flex-col items-center justify-center min-h-screen">
          <label className="flex flex-col mb-4 ">
            <span className="text-gray-700 font-medium mb-1">Username</span>
            <input
              type="text"
              ref={usernameRef}
              placeholder="Enter your username"
              className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all" />
          </label><label className="flex flex-col mb-4">
              <span className="text-gray-700 font-medium mb-1">Age</span>
              <input
                type="number"
                ref={ageRef}
                placeholder="Enter your age"
                className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all" />
            </label><button
              onClick={() => HandleSubmit(usernameRef, ageRef, setUserDetails)}
              className="w-20 mt-2 bg-blue-600 text-white font-medium py-2 rounded-lg shadow-md hover:bg-blue-700 hover:shadow-lg active:scale-95 transition-all"
            >
              Submit
            </button>
            </div>
          </>
      )}
    </div>
    
  );
}
