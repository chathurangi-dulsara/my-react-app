import { createContext, useState } from "react";

export const userData1 = createContext({})


const UserAuth = ({children}) => {
    const [userDetails,setUserDetails]=useState({
        name:"",
        age:"",
       userId:"",
    })


return(
    <div>
        <userData1.Provider value={{userDetails,setUserDetails}}>{children}
        </userData1.Provider>
    </div>
)
}

export default UserAuth;