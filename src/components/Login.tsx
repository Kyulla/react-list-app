import { NavLink } from "react-router-dom";

export default function Login({handleLogin} : {handleLogin: () => void}){
    return(
        <>
            <button onClick={() => handleLogin()}>Login</button>
        </>
    );
}