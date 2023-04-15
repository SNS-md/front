import styled from "styled-components";
import Writer from "./Writer";

function Comment({comment}) {
    
    return (
        <div>
            <Writer name={comment.name} date={comment.date}/>
            <span style={{marginLeft:"10px"}}>{comment.content}</span>
        </div>
    );
}

export default Comment;