import { parseISO, formatDistanceToNow } from "date-fns";
import { LuClock9 } from "react-icons/lu";
const TimeAgo = ({timeStrap})=>{
    let timeAgo = '';
    const date = parseISO(timeStrap);
    const timePeriod = formatDistanceToNow(date);
    timeAgo = `${timePeriod} Ago`;
    console.log(timeAgo);
    return(
        <div className="flex items-center gap-2">
           <LuClock9/> {timeAgo}
        </div>
    )
}

export default TimeAgo;