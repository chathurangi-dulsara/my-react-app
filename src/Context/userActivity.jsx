import { createContext, useReducer, useState } from "react";
import { userActivityReducer } from "../Reducers/userActivityReducer";

export const userDataaa = createContext({})

export const UserActivity=({children})=>{
    // export const UserActivity=({children,values})=>{
// <userDataaa.Provider value={{ values }}> then we can pass values as state, dispatch in App.jsx */}

    const [state, dispatch] = useReducer(userActivityReducer, initialState={
        image: "",
        email: "",
        city: " ",
        position: "",

  });  

    // const[userInfo,setUserInfo]=useState({
    //     image:"",
    //     email:"",
    //     city:" ",
    //     position:"",
    // })

   
    return (
        <userDataaa.Provider value={{ state, dispatch }}>
            {children}
        </userDataaa.Provider>
    )
}