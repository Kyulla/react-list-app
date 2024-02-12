import {
  BrowserRouter,
  Link,
  NavLink,
  Navigate,
  Outlet,
  Route,
  Routes,
  useParams,
  } from "react-router-dom";
  import { useState } from "react";

function App() {
  const [isLogged, setIsLogged] = useState<boolean>(false);

  return (
    <>
    <BrowserRouter>
    <Routes>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App;
