import { useContext,useRef } from "react";
import { userDataaa } from "../Context/userActivity";
import { userData1 } from "../Context/useContext";
import Login from "./Login";

export default function UserInput() {
  
 const { userInfo, setUserInfo } = useContext(userDataaa);
 const { userDetails } = useContext(userData1);


  const imageRef = useRef();
  const emailRef = useRef();
  const cityRef = useRef();
  const positionRef = useRef();

  const handleSubmit = () => {
    setUserInfo((pre) => ({
      ...pre,
      image: imageRef.current.value,
      email: emailRef.current.value,
      city: cityRef.current.value,
      position: positionRef.current.value,
    }));
  };

  return (
    <div>
      {userDetails.userId?(
        <div>
            <div>
          <input type="text" placeholder="Image URL" ref={imageRef} />
          <input type="text" placeholder="Email" ref={emailRef} />
          <input type="text" placeholder="City" ref={cityRef} />
          <input type="text" placeholder="Position" ref={positionRef} />
          <button onClick={handleSubmit}>Submit</button>  
        </div>
        </div>
      ):(
       <div>Please login to enter user details</div>
      )}
    </div>
  );
}


   