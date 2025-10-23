import { createContext, useState } from "react";

export const userDataaa = createContext({})

export const UserActivity=({children})=>{
    const[userInfo,setUserInfo]=useState({
        image:"",
        email:"",
        city:" ",
        position:""
    })

   
    return (
        <userDataaa.Provider value={{userInfo,setUserInfo}}>
            {children}
        </userDataaa.Provider>
    )
}