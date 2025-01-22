import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { postAdded } from "./postSlice";
import { selectAllUser } from "../Users/userSlice";

const PostForm = () => {
    const dispatch = useDispatch();
    const users = useSelector(selectAllUser);
    const [postData, setPostData] = useState({
        title: '',
        content: '',
        userId: ''
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setPostData((prev) => ({
            ...prev,
            [name]: value
        }));
    };

    const handlePost = (event) => {
        event.preventDefault();
        if (postData.title && postData.content && postData.userId) {
            dispatch(postAdded(postData));
            // Clear form fields after submission
            setPostData({ title: '', content: '', userId: '' });
        } else {
            alert("Please fill in all fields");
        }
    };

    return (
        <div className="w-[500px] mx-auto">
            <form>
                <input
                    className="w-full py-3 px-2 outline-none bg-gray-600 text-white my-1 rounded-lg placeholder:text-green-400"
                    onChange={handleChange}
                    id="title"
                    name="title"
                    type="text"
                    value={postData.title}
                    placeholder="Title"
                />
                <select
                    className="w-full py-3 px-2 outline-none bg-gray-600 text-white my-1 rounded-lg placeholder:text-green-400"
                    onChange={handleChange}
                    name="userId"
                    id="author"
                    value={postData.userId}
                >
                    {
                        users.map(({ id, author }) => (
                            <option key={id} value={id}>{author}</option>
                        ))
                    }
                </select>
                <input
                    className="w-full py-3 px-2 outline-none bg-gray-600 text-white my-1 rounded-lg placeholder:text-green-400"
                    onChange={handleChange}
                    id="content"
                    name="content"
                    type="text"
                    value={postData.content}
                    placeholder="Content"
                />
                <button
                    onClick={handlePost}
                    type="button"
                    className="bg-orange-400 px-5 py-2 text-white rounded-lg my-1"
                    disabled={!postData.title || !postData.content}
                >
                    POST
                </button>
            </form>
        </div>
    );
}

export default PostForm;
