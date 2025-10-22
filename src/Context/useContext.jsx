import { createContext, useState } from "react";

export const userData = createContext({})


const UserAuth = ({children}) => {
    const [userDetails,setUserDetails]=useState({
        name:"",
        age:"",
       userId:"",
    })


return(
    <div>
        <userData.Provider value={{userDetails,setUserDetails}}>{children}
        </userData.Provider>
    </div>
)
}

export default UserAuth;