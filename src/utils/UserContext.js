import { createContext } from "react";


const UserContext = createContext({
   user:{ name :"Dummy me",
    email:"dummydata"}
})

export default UserContext;