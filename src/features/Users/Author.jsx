import { useSelector } from "react-redux";
import { selectAllUser } from "./userSlice";

const Author = ({ userId }) => {
    const users = useSelector(selectAllUser);
    const author = users.find(user => user.id === parseInt(userId));

    return (
        <div>
            by {author ? (author.id === 0 ? "unknown author" : author.author) : "unknown author"}
        </div>
    );
}

export default Author;
