import { Post } from "../Interfaces/post";

export default function Home({posts}: {posts: Post[] | null}){
    if(!posts) return <h1>Caricamento posts...</h1>;
    function spanKey(postid: number){
        const date = new Date();
        return date.getHours() + date.getMinutes() + date.getSeconds() + postid;
    }

    return(
        <div>
        {posts.map((post) => (
            <span key={spanKey(post.id)}>
                <h1>{post.title}</h1>
                <p>{post.body}</p>
                <p>{post.userId} , {post.id}</p>
            </span>
        ))}
        </div>
    );
}