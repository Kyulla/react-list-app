import { NavLink, useParams } from "react-router-dom";
import { useEffect } from "react";
import { Post } from "../Interfaces/post";
import { Comment } from "../Interfaces/comment";

export default function Comments({comments, getComments, posts} : {comments: Comment[] | null; getComments: (postId: string) => void; posts: Post[] | null}){
    const { idPost } = useParams();

    useEffect(() => {
        if(idPost) {
            getComments(idPost);
        }
    }, [idPost, getComments]);

    if(!idPost) return <p>Non è stato possibile ottenere l'id del post</p>;

    const intIdPost = parseInt(idPost, 10);
    
    if(!posts) return <h1>Caricamento post...</h1>
    if(!comments) return <h1>Caricamento commenti...</h1>

    return(
        <>
        <NavLink to="/">Home</NavLink>
        {posts.filter((post) => post.id === intIdPost).map((post) =>(
            <span key={post.id}>
                <h1>{post.title}</h1>
                <p>{post.body}</p>
            </span>
        ))}
        {comments.map((comment)=> (
            <div key={comment.id}>
                <h3>{comment.name}, {comment.email}</h3>
                <p>{comment.body}</p>
            </div>
        ))}
        </>
    );
}
