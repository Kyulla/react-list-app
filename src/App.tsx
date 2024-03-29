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
import Comments from "./components/Comments";
import { Comment } from "./Interfaces/comment";

function App() {
  const [isLogged, setIsLogged] = useState<boolean>(false);
  const [posts, setPosts] = useState<Post[] | null>(null);
  const [comments, setComments] = useState<Comment[] | null>(null);

  const getPost = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts/");
    const data = await response.json();
    setPosts(data);
  }

  const getComments = async (postId: string) => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`);
    const data = await response.json();
    setComments(data);
  }

const handleLogin = () => {
  setIsLogged(true);
  localStorage.setItem('isLogged', 'true');
};

const handleLogout = () => {
  setIsLogged(false);
  localStorage.removeItem('isLogged');
};

  useEffect(() => {
    getPost();
    
    const isUserLogged = localStorage.getItem('isLogged');
    if (isUserLogged) {
      setIsLogged(JSON.parse(isUserLogged));
    }
  }, []);
  
  return (
    <>
    <BrowserRouter>
    <Routes>

      <Route element={<GuestRoute isLogged={isLogged} />} >
        <Route path="/login" element={<Login handleLogin={handleLogin} />}/>
      </Route>

      <Route element={<ProtectedRoute isLogged={isLogged} />}>
        <Route path="/" element={<Home posts={posts} handleLogout={handleLogout} />}/>
        <Route path="/:idPost/comments" element={<Comments comments={comments} getComments={getComments} posts={posts} />}/>
      </Route>
      <Route path="/404" element={<RouteNotFound />} />
      <Route path="*" element={<Redirect />} />

    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App;
