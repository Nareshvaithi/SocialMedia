import { useDispatch } from "react-redux";
import { reactionAdded } from "./postSlice";
const ReactionButtons = ({postId,reactions})=>{
    const dispatch = useDispatch();
    const reactionsValue = {
        thumbsup : '👍',
        heart: '❤️',
        smile: '😀',
        laugh: '😂',
        cry: '😭',
        rocket: '🚀',
    };          
    const reactionEmojies = Object.entries(reactionsValue).map(([name,emoji])=>{
        return <button
                key={name}
                onClick={()=>dispatch(reactionAdded({postId:postId, reaction:name}))}
                >
                    {emoji} {reactions[name]}   
                </button>
    });
    return(
        <div>
            {reactionEmojies}
        </div>
    )
}

export default ReactionButtons;