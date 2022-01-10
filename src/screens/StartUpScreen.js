import {useEffect,useContext} from "react";
import { Context } from "../Contexts/AuthContext";
const StartUpScreen=()=>{
    const {checkForLogin}=useContext(Context);
    useEffect(()=>{
        checkForLogin();
    },[])
    return null;
}
export default StartUpScreen;