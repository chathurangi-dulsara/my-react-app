import { useContext, useRef } from "react";
import { userDataaa } from "../Context/userActivity";
import { userData1 } from "../Context/useContext";
import { handleUserInput } from "../Utils/userValidate";
import { Action } from "../Reducers/userActivityReducer";

export default function UserInput() {
  const { state = {}, dispatch = () => {} } = useContext(userDataaa);
  const { userDetails = {} } = useContext(userData1);

  const imageRef = useRef();
  const emailRef = useRef();
  const cityRef = useRef();
  const positionRef = useRef();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
      {userDetails.userId &&(
        <div className="w-full max-w-md text-lg text-gray-700 bg-white shadow-lg rounded-xl p-6 space-y-6">
          
        
          <div className="space-y-4">
            <input
              type="text"
              placeholder="Image URL"
              ref={imageRef}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
            />
            <input
              type="text"
              placeholder="Email"
              ref={emailRef}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
            />
            <input
              type="text"
              placeholder="City"
              ref={cityRef}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
            />
            <input
              type="text"
              placeholder="Position"
              ref={positionRef}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
            />
            <button

            onClick={() => handleUserInput(Action.SET_USER_INFO, imageRef, emailRef, cityRef, positionRef, dispatch)}
              // onClick={() =>dispatch({
              //   type: Action.SET_USER_INFO,
              //   data: {
              //     image: imageRef.current.value,
              //     email: emailRef.current.value,
              //     city: cityRef.current.value,
              //     position: positionRef.current.value,
              //   }
              // })}
              className="w-full bg-blue-500 text-white p-3 rounded-lg hover:bg-blue-600 transition"
            >
              Submit
            </button>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg border border-gray-200 space-y-2">
            <p>
              <span className="font-semibold">Image:</span> {state.image || " "}
            </p>
            <p>
              <span className="font-semibold">Email: </span> {state.email || " "}
            </p>
            <p>
              <span className="font-semibold">City:</span>  {state.city || " "}
            </p>
            <p>
              <span className="font-semibold">Position: </span> {state.position || " "}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
