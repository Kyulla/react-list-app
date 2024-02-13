import {
  BrowserRouter,
  Route,
  Routes,
  } from "react-router-dom";
import { useState, useEffect } from "react";
import Login from "./components/Login";
import ProtectedRoute from "./components/ProtectedRoute";
import GuestRoute from "./components/GuestRoute";
import Redirect from "./components/Redirect";
import RouteNotFound from "./components/RouteNotFound";
import Home from "./components/Home";
import { Post } from "./Interfaces/post";

function App() {
  const [isLogged, setIsLogged] = useState<boolean>(false);
  const [posts, setPosts] = useState<Post[] | null>(null);

  const getPost = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts/");
    const data = await response.json();
    setPosts(data);
  }

  useEffect(() => {
    getPost();
  }, []);
  
  return (
    <>
    <BrowserRouter>
    <Routes>

      <Route element={<GuestRoute isLogged={isLogged} />} >
        <Route path="/login" element={<Login setIsLogged={setIsLogged} />}/>
      </Route>

      <Route element={<ProtectedRoute isLogged={isLogged} />}>
        <Route path="/" element={<Home posts={posts} />}/>
      </Route>
      <Route path="/404" element={<RouteNotFound />} />
      <Route path="*" element={<Redirect />} />

    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App;
