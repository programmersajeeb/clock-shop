import { useContext } from "react";
import { AuthContext } from "../contexts/AuthProvider/AuthProvaider";


const useAuth = () =>{
  const auth = useContext(AuthContext);
  return auth;
}

export default useAuth;