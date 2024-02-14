import { Post } from "../Interfaces/post";
import { Link } from "react-router-dom";

export default function Home({posts, handleLogout}: {posts: Post[] | null; handleLogout: () => void}){
    if(!posts) return <h1>Caricamento posts...</h1>;

    return(
        <div>
            <button onClick={() => handleLogout()}>Logout</button>
            {posts.map((post) => (
                <>
                    <Link to={post.id.toString() + "/comments"}>
                        <span key={post.id}>
                            <h1>{post.title}</h1>
                            <p>{post.body}</p>
                        </span>
                    </Link>
                </>
        ))}
        </div>
    );
}