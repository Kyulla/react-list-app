import { NavLink } from "react-router-dom";

export default function Login({setIsLogged} : {setIsLogged: React.Dispatch<React.SetStateAction<boolean>>}){
    return(
        <>
            <button onClick={() => setIsLogged(true)}>Login</button>
        </>
    );
}