import { useState, useRef } from "react";
import { User, Mail, MapPin, Calendar } from "lucide-react";

export default function UseRef() {
  const [myData, setMyData] = useState({
    name: "",
    age: "",
    email: "",
    city: "",
  });

  const nameRef = useRef();
  const ageRef = useRef();
  const emailRef = useRef();
  const cityRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    setMyData({
      name: nameRef.current.value,
      age: ageRef.current.value,
      email: emailRef.current.value,
      city: cityRef.current.value,
    });

    nameRef.current.focus();
    
    nameRef.current.value = "";
    ageRef.current.value = "";
    emailRef.current.value = "";
    cityRef.current.value = "";

  };

  return (
    <div className="flex flex-col items-center justify-center p-4 min-h-screen bg-gradient-to-br from-blue-50 to-blue-100">
      <div className="p-8 bg-white border border-gray-200 rounded-2xl shadow-xl w-96">
        <h2 className="text-2xl font-semibold text-center mb-6 text-blue-700">
          User Information Form
        </h2>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <label className="flex flex-col">
            <span className="text-gray-700 font-medium mb-1">Name</span>
            <input
              type="text"
              placeholder="Enter your name"
              ref={nameRef}
              className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </label>

          <label className="flex flex-col">
            <span className="text-gray-700 font-medium mb-1">Age</span>
            <input
              type="number"
              placeholder="Enter your age"
              ref={ageRef}
              className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </label>

          <label className="flex flex-col">
            <span className="text-gray-700 font-medium mb-1">Email</span>
            <input
              type="email"
              placeholder="Enter your email"
              ref={emailRef}
              className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </label>

          <label className="flex flex-col">
            <span className="text-gray-700 font-medium mb-1">City</span>
            <input
              type="text"
              placeholder="Enter your city"
              ref={cityRef}
              className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </label>

          <div className="flex justify-center mt-4">
            <button
              type="submit"
              className="px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 active:bg-blue-800 transition duration-200 shadow-md"
            >
              Submit
            </button>
          </div>
        </form>
      </div>

      {myData.name&& myData.age &&myData.email &&myData.city && (
        <div className="mt-8 w-96 bg-white rounded-xl shadow-lg  border border-gray-200">
          <div className="text-center mb-4">
            <h3 className="text-xl font-semibold text-blue-700">
              Submitted Details
            </h3>
            <p className="text-gray-500 text-sm">
              Here’s what you entered
            </p>
          </div>

          <div className="flex flex-col gap-3 text-gray-700">
            <div className="flex items-center gap-2">
              <User className="text-blue-500" size={18} />
              <span>
                <strong>Name:</strong> {myData.name}
              </span>
            </div>

            <div className="flex items-center gap-2">
              <Calendar className="text-blue-500" size={18} />
              <span>
                <strong>Age:</strong> {myData.age}
              </span>
            </div>

            <div className="flex items-center gap-2">
              <Mail className="text-blue-500" size={18} />
              <span>
                <strong>Email:</strong> {myData.email}
              </span>
            </div>

            <div className="flex items-center gap-2">
              <MapPin className="text-blue-500" size={18} />
              <span>
                <strong>City:</strong> {myData.city}
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
