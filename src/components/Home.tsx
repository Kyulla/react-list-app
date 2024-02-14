import { Post } from "../Interfaces/post";
import { Link } from "react-router-dom";

export default function Home({posts, handleLogout}: {posts: Post[] | null; handleLogout: () => void}){
    if(!posts) return <h1>Caricamento posts...</h1>;

    return(
        <div>
            <button onClick={() => handleLogout()}>Logout</button>
            {posts.map((post) => (
                <>
                    <span key={post.id}>
                        <li><Link to={post.id.toString() + "/comments"}>{post.title}</Link></li>
                    </span>
                </>
        ))}
        </div>
    );
}