import { useContext, useRef } from "react";
import { userDataaa } from "../Context/userActivity";
import { userData1 } from "../Context/useContext";
import { handleUserInput } from "../Utils/userValidate";

export default function UserInput() {
  const { userInfo = {}, setUserInfo = () => {} } = useContext(userDataaa);
  const { userDetails = {} } = useContext(userData1);

  const imageRef = useRef();
  const emailRef = useRef();
  const cityRef = useRef();
  const positionRef = useRef();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
      {userDetails.userId &&(
        <div className="w-full max-w-md bg-white shadow-lg rounded-xl p-6 space-y-6">
          
        
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
              onClick={() =>
                handleUserInput(imageRef, emailRef, cityRef, positionRef, setUserInfo)
              }
              className="w-full bg-blue-500 text-white p-3 rounded-lg hover:bg-blue-600 transition"
            >
              Submit
            </button>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg border border-gray-200 space-y-2">
            <p>
              <span className="font-semibold">Image:</span> {userInfo.image || " "}
            </p>
            <p>
              <span className="font-semibold">Email: </span> {userInfo.email || " "}
            </p>
            <p>
              <span className="font-semibold">City:</span>  {userInfo.city || " "}
            </p>
            <p>
              <span className="font-semibold">Position: </span> {userInfo.position || " "}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
