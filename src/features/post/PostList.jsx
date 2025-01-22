import { useSelector } from "react-redux";
import { selectAllPost } from "./postSlice";
import Author from "../Users/Author";
import TimeAgo from "./TimeAgo";
import ReactionButtons from "./reactionButtons";

const PostList = () => {
    const getAllPosts = useSelector(selectAllPost);
    const orderedPosts = getAllPosts.slice().sort((a,b) => b.date.localeCompare(a.date))

    return (
        <div className="py-5">
            <h1 className="text-4xl font-bold py-5">Posts</h1>
            {
                getAllPosts.length > 0 ? (
                    <ul>
                        {orderedPosts.map(({ id, title, content, date, userId,reactions }) => (
                            <li key={id} className="list-none mb-4">
                                <p className="font-semibold text-2xl">{title}</p>
                                <p className="text-xl">{content}</p>
                                <div className="flex items-center gap-3">
                                    <Author userId={userId} />
                                    <TimeAgo timeStrap={date}/>
                                </div>
                                <ReactionButtons postId={id} reactions={reactions}/>
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
