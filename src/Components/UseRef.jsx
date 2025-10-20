import {useState,useRef } from "react";

export default function UseRef() {

  const[myData,setMyData]=useState({
    name:"",
    age:"",
    email:"",
    city:""
  })

  const nameRef = useRef();
  const ageRef = useRef();
  const emailRef = useRef();
  const cityRef = useRef();

  const handleSubmit=(e)=>{
    e.preventDefault();
    const name=nameRef.current.value;
    const age=ageRef.current.value;
    const email=emailRef.current.value;
    const city=cityRef.current.value;
    setMyData({name, age, email, city});
  }

  return (
    <>
    <div className=" relative flex flex-col items-center justtify-center">
      <div className ="absolute top-20 p-10 border-2 border-gray-300 rounded-lg shadow-lg w-96 h-auto">
        <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Enter your Name" ref={nameRef}/>

        <input type="number" placeholder="Enter your Age" ref={ageRef}/>

        <input type="email" placeholder="Enter your Email" ref={emailRef}/>   
        <input type="text" placeholder="Enter your City" ref={cityRef}/>

        <button type="submit">Submit</button>
    </form>
    </div>
    <p>{myData.name}</p>
    <p>{myData.age}</p>   
    <p>{myData.email}</p>
    <p>{myData.city}</p>
    </div>
    </>
  );
}