import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";

const useUser = () => {
    const all =useContext(AuthContext)
    return all
};

export default useUser;