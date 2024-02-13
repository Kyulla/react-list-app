import { Post } from "../Interfaces/post";
import { Link } from "react-router-dom";
import { spanKey } from "../functions/spanKey";

export default function Home({posts}: {posts: Post[] | null}){
    if(!posts) return <h1>Caricamento posts...</h1>;

    return(
        <div>
        {posts.map((post) => (
            <>
            <Link to={post.id.toString() + "/comments"}>
                <span key={spanKey(post.id)}>
                    <h1>{post.title}</h1>
                    <p>{post.body}</p>
                </span>
            </Link>
            </>
        ))}
        </div>
    );
}