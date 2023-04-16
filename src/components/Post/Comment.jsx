import Writer from "./Writer";

function Comment({comment}) {
    
    return (
        <div style={{marginBottom:"10px"}}>
            <Writer name={comment.name} date={comment.date}/>
            <span style={{marginLeft:"10px"}}>{comment.contents}</span>
        </div>
    );
}

export default Comment;