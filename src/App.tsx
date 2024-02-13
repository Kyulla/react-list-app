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
import Login from "./components/Login";
import ProtectedRoute from "./components/ProtectedRoute";
import GuestRoute from "./components/GuestRoute";
import Redirect from "./components/Redirect";
import RouteNotFound from "./components/RouteNotFound";

function App() {
  const [isLogged, setIsLogged] = useState<boolean>(false);

  return (
    <>
    <BrowserRouter>
    <Routes>

      <Route element={<GuestRoute isLogged={isLogged} />} >
        <Route path="/login" element={<Login setIsLogged={setIsLogged} />}/>
      </Route>

      <Route element={<ProtectedRoute isLogged={isLogged} />}>
        <Route path="/" element={<h1>sei loggato</h1>}/>
      </Route>
      <Route path="/404" element={<RouteNotFound />} />
      <Route path="*" element={<Redirect />} />

    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App;
