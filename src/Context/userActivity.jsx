import { createContext, useReducer, useState } from "react";
import { userActivityReducer } from "../Reducers/userActivityReducer";

export const userDataaa = createContext({})

export const UserActivity=({children})=>{

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