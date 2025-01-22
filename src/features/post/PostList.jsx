import { useSelector } from "react-redux";
import { selectAllPost } from "./postSlice";
import Author from "../Users/Author";

const PostList = () => {
    const getAllPosts = useSelector(selectAllPost);

    return (
        <div className="py-5">
            <h1 className="text-4xl font-bold py-5">Posts</h1>
            {
                getAllPosts.length > 0 ? (
                    <ul>
                        {getAllPosts.map(({ id, title, content, userId }) => (
                            <li key={id} className="list-none mb-4">
                                <p className="font-semibold text-2xl">{title}</p>
                                <p className="text-xl">{content}</p>
                                <Author userId={userId} />
                            </li>
                        ))}
                    </ul>
                ) : (
                    <p>No posts available</p>
                )
            }
        </div>
    );
}

export default PostList;
