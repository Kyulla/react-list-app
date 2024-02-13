import { NavLink } from "react-router-dom";

export default function RouteNotFound(){
    return(
      <>
        <h1>Pagina non trovata</h1>
        <NavLink to="/">Torna alla home</NavLink>
      </>
    )
}